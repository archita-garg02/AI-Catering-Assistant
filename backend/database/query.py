from database.mongo_connection import get_database
from database.config import CATERERS_COLLECTION

# ----------------------------------------
# Connect to MongoDB
# ----------------------------------------

db = get_database()

collection = db[CATERERS_COLLECTION]


# ----------------------------------------
# Get All Caterers
# ----------------------------------------

def get_all_caterers():
    """
    Returns all caterers.
    """

    return list(
        collection.find(
            {},
            {"_id": 0}
        )
    )


# ----------------------------------------
# Search by City
# ----------------------------------------

def search_by_city(city):
    """
    Search caterers by city.
    """

    return list(
        collection.find(
            {
                "state_area": {
                    "$regex": city,
                    "$options": "i"
                }
            },
            {
                "_id": 0
            }
        )
    )


# ----------------------------------------
# Search by Budget
# ----------------------------------------

def search_by_budget(budget):
    """
    Search by budget tier.
    """

    return list(
        collection.find(
            {
                "budget_tier": {
                    "$regex": budget,
                    "$options": "i"
                }
            },
            {
                "_id": 0
            }
        )
    )


# ----------------------------------------
# Search by Specialization
# ----------------------------------------

def search_by_specialization(specialization):
    """
    Search by specialization.
    """

    return list(
        collection.find(
            {
                "specialization": {
                    "$regex": specialization,
                    "$options": "i"
                }
            },
            {
                "_id": 0
            }
        )
    )


# ----------------------------------------
# Search by Rating
# ----------------------------------------

def search_by_rating(min_rating):
    """
    Search caterers whose rating is greater than or equal
    to the given rating.
    """

    return list(
        collection.find(
            {
                "rating": {
                    "$gte": float(min_rating)
                }
            },
            {
                "_id": 0
            }
        )
    )


# ----------------------------------------
# Search by Guest Capacity
# ----------------------------------------

def search_by_guest_capacity(guests):
    """
    Search caterers whose guest capacity range
    includes the requested number of guests.
    """

    results = []

    documents = collection.find({}, {"_id": 0})

    for doc in documents:

        capacity = doc.get("guest_capacity", "")

        if "-" not in str(capacity):
            continue

        try:

            minimum, maximum = capacity.split("-")

            minimum = int(minimum)

            maximum = int(maximum)

            if minimum <= guests <= maximum:
                results.append(doc)

        except:
            continue

    return results


# ----------------------------------------
# Search by Multiple Filters
# ----------------------------------------

def search_caterers(
    city=None,
    budget=None,
    specialization=None,
    min_rating=None
):
    """
    Dynamic search using multiple filters.
    """

    query = {}

    if city:

        query["state_area"] = {
            "$regex": city,
            "$options": "i"
        }

    if budget:

        query["budget_tier"] = {
            "$regex": budget,
            "$options": "i"
        }

    if specialization:

        query["specialization"] = {
            "$regex": specialization,
            "$options": "i"
        }

    if min_rating:

        query["rating"] = {
            "$gte": float(min_rating)
        }

    return list(
        collection.find(
            query,
            {
                "_id": 0
            }
        )
    )