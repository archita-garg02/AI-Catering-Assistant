import os
import pandas as pd

from database.mongo_connection import get_database
from database.config import CATERERS_COLLECTION

# --------------------------------------------
# Connect to MongoDB
# --------------------------------------------

db = get_database()
collection = db[CATERERS_COLLECTION]

# --------------------------------------------
# Folder containing all HTML files
# --------------------------------------------

DATA_FOLDER = "data/html"

# --------------------------------------------
# Rename columns
# --------------------------------------------

COLUMN_MAPPING = {
    "Caterer Name": "caterer_name",
    "State/Area": "state_area",
    "Region/Zone": "region_zone",
    "Contact Number": "contact_number",
    "Email": "email",
    "Website URL": "website_url",
    "Specialization": "specialization",
    "Budget Tier": "budget_tier",
    "Guest Capacity": "guest_capacity",
    "Status": "status",
    "Rating": "rating"
}

# --------------------------------------------
# Clear old data (optional)
# --------------------------------------------

collection.delete_many({})

print("Old records removed.\n")

total_records = 0

# --------------------------------------------
# Read every HTML file
# --------------------------------------------

for filename in os.listdir(DATA_FOLDER):

    if not filename.endswith(".html"):
        continue

    filepath = os.path.join(DATA_FOLDER, filename)

    print(f"Reading {filename}")

    try:

       # Read first table from HTML
        df = pd.read_html(filepath)[0]

        # Remove the serial number column (Unnamed: 0) if it exists
        if "Unnamed: 0" in df.columns:
            df = df.drop(columns=["Unnamed: 0"])

        # The first row contains the actual column names
        df.columns = df.iloc[0]

        # Remove the first row from the data
        df = df.iloc[1:].reset_index(drop=True)

        # Rename columns
        df.rename(columns=COLUMN_MAPPING, inplace=True)

        # Remove rows that are completely empty
        df.dropna(how="all", inplace=True)

        # Replace NaN with empty string
        df.fillna("", inplace=True)

        # Remove extra spaces
        df = df.apply(
            lambda column:
            column.map(lambda value: value.strip() if isinstance(value, str) else value)
        )

        # Convert rating to float
        if "rating" in df.columns:
            df["rating"] = pd.to_numeric(
                df["rating"],
                errors="coerce"
            )

        # Add source file
        df["source_file"] = filename

        # Convert dataframe into dictionary
        records = df.to_dict("records")

        # Insert into MongoDB
        if records:
            collection.insert_many(records)

        print(f"Imported {len(records)} records.\n")

        total_records += len(records)

    except Exception as e:

        print(f"Error in {filename}")

        print(e)

print("=" * 50)

print(f"Total Imported Records : {total_records}")

print("=" * 50)