# database/mongo_connection.py

from pymongo import MongoClient
from database.config import (
    MONGO_URI,
    DATABASE_NAME
)

# Create MongoDB Client
client = MongoClient(MONGO_URI)

# Select Database
db = client[DATABASE_NAME]


def get_database():
    """
    Returns the MongoDB database instance.
    """
    return db