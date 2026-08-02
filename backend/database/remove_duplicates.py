# database/remove_duplicates.py

from database.mongo_connection import get_database
from database.config import CATERERS_COLLECTION

db = get_database()

collection = db[CATERERS_COLLECTION]

pipeline = [
    {
        "$group": {
            "_id": {
                "name": "$caterer_name",
                "city": "$state_area"
            },
            "ids": {
                "$push": "$_id"
            },
            "count": {
                "$sum": 1
            }
        }
    },
    {
        "$match": {
            "count": {
                "$gt": 1
            }
        }
    }
]

duplicates = collection.aggregate(pipeline)

deleted = 0

for duplicate in duplicates:

    ids = duplicate["ids"]

    # Keep first document

    ids_to_delete = ids[1:]

    if ids_to_delete:

        result = collection.delete_many(
            {
                "_id": {
                    "$in": ids_to_delete
                }
            }
        )

        deleted += result.deleted_count

print(f"Removed {deleted} duplicate documents.")