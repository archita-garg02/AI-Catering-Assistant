from database.mongo_connection import get_database

db = get_database()

collection = db["caterers"]

def search_caterers_db(
    city="",
    budget="",
    specialization="",
    min_rating=None,
):
    query = {}

    if city:
        query["city"] = city

    if budget:
        query["budget"] = budget

    if specialization:
        query["specialization"] = specialization

    if min_rating is not None:
        query["rating"] = {"$gte": min_rating}

    return list(collection.find(query, {"_id": 0}))