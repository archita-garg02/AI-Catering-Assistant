import pandas as pd

EXCEL_PATH = "data/North_India_Caterers_Plus_100_No_Duplicates.xlsx"

df = pd.read_excel(EXCEL_PATH)

# Remove extra spaces
df.columns = df.columns.str.strip()

# Replace NaN with empty string
df.fillna("", inplace=True)

print("Dataset Loaded Successfully")
print(df.columns.tolist())