from zipfile import ZipFile
from pathlib import Path
import pandas as pd


class DataLoader:
    def __init__(self, zip_path: str):
        self.zip_path = Path(zip_path)
        self.df = self._load_data()

    def _load_data(self):
        all_dataframes = []

        with ZipFile(self.zip_path, "r") as zip_file:

            # List all Excel files inside the ZIP
            excel_files = [
                file
                for file in zip_file.namelist()
                if file.endswith(".xlsx")
            ]

            if not excel_files:
                raise ValueError("No Excel files found inside ZIP.")

            print(f"Found {len(excel_files)} Excel files")

            for excel in excel_files:
                print(f"Loading: {excel}")

                with zip_file.open(excel) as file:
                    df = pd.read_excel(file)

                    # Optional: Add source filename
                    df["source_file"] = excel

                    all_dataframes.append(df)

        final_df = pd.concat(all_dataframes, ignore_index=True)

        print(f"\nTotal Records: {len(final_df)}")

        return final_df


loader = DataLoader("data/data.zip")

df = loader.df