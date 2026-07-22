# database/create_indexes.py

from database.mongo_connection import get_database
from database.config import CATERERS_COLLECTION

db = get_database()

collection = db[CATERERS_COLLECTION]

print("Creating indexes...")

collection.create_index("caterer_name")

collection.create_index("state_area")

collection.create_index("region_zone")

collection.create_index("budget_tier")

collection.create_index("specialization")

collection.create_index("rating")

collection.create_index("status")

print("Indexes created successfully!")