import glob
import os
from io import StringIO

import pandas as pd
from pymongo import MongoClient

# MongoDB Connection
client = MongoClient("mongodb://localhost:27017/")
db = client["catering_db"]
collection = db["caterers"]

# Optional: Clear existing data before import
collection.delete_many({})

# Folder containing HTML files
html_folder = "excel"
html_files = glob.glob(os.path.join(html_folder, "*.html"))

print(f"Found {len(html_files)} HTML files.\n")

total_records = 0

for file in html_files:
    print(f"Reading: {os.path.basename(file)}")

    try:
        # Read HTML
        with open(file, "r", encoding="utf-8") as f:
            html = f.read()

        # Extract tables
        tables = pd.read_html(StringIO(html))

        if not tables:
            print("  No table found.\n")
            continue

        df = tables[0]

        # Remove first unnamed/index column if present
        df = df.loc[:, ~df.columns.astype(str).str.contains("^Unnamed")]

        # Make column names strings
        df.columns = df.columns.astype(str)

        # Remove rows where first column is repeated header
        first_col = df.columns[0]
        df = df[df[first_col].astype(str).str.strip() != "Caterer Name"]

        # Remove completely empty rows
        df = df.dropna(how="all")

        # Reset index
        df = df.reset_index(drop=True)

        # Convert NaN to None for MongoDB
        df = df.where(pd.notnull(df), None)

        records = df.to_dict(orient="records")

        if len(records) == 0:
            print("  No valid records found.\n")
            continue

        collection.insert_many(records)

        total_records += len(records)

        print(f"  Imported {len(records)} records\n")

    except Exception as e:
        print(f"  Error: {e}\n")

print("=" * 50)
print(f"Total Imported: {total_records}")
print("=" * 50)