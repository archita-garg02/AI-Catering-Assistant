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
        query["state_area"] = {
            "$regex": city,
            "$options": "i",
        }

    if budget:
        query["budget_tier"] = {
            "$regex": budget,
            "$options": "i",
        }

    if specialization:
        query["specialization"] = {
            "$regex": specialization,
            "$options": "i",
        }

    if min_rating is not None:
        query["rating"] = {"$gte": float(min_rating)}

    print("\n========== DATABASE DEBUG ==========")
    print("Database:", db.name)
    print("Collection:", collection.name)
    print("Query:", query)

    results = list(collection.find(query, {"_id": 0}))

    print("Results Found:", len(results))

    if results:
        print("First Result:", results[0]["caterer_name"])

    print("====================================\n")

    return results