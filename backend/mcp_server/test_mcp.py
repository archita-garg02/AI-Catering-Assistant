from database.search_service import search_caterers_db

result = search_caterers_db(
    city="Delhi",
    budget="Medium",
    specialization="Wedding",
    min_rating=4.5,
)

print(result)