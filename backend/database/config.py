# database/config.py

import os

from dotenv import load_dotenv

load_dotenv()

# MongoDB Connection URL
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")

# Database Name
DATABASE_NAME = os.getenv("DATABASE_NAME", "CateringDB")

# Collection Names
CATERERS_COLLECTION = "caterers"
USERS_COLLECTION = "users"
BOOKINGS_COLLECTION = "bookings"
REVIEWS_COLLECTION = "reviews"
MENUS_COLLECTION = "menus"