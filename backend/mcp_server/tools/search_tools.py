from database.search_service import search_caterers_db
from mcp_server.app import mcp

@mcp.tool(name="search_caterers")
def search_caterers(
    city: str = "",
    budget: str = "",
    specialization: str = "",
    min_rating: float = None,
):
    """
    Search the catering database based on the user's requirements.

    Use this tool whenever a user wants to:
    - Find caterers in a specific city.
    - Search caterers within a budget.
    - Filter by specialization.
    - Filter by minimum rating.

    Parameters:
    - city: City or location of the caterer.
    - budget: User's budget or budget range.
    - specialization: Type of catering service (e.g., Wedding, Birthday, Corporate).
    - min_rating: Minimum acceptable rating.

    Return:
    A list of caterers matching the given filters.
    Return an empty list if no caterers are found.

    Do not generate or assume catering information.
    The results should come only from the database.
    """

    print("\n========== SEARCH TOOL CALLED ==========")
    print("City:", city)
    print("Budget:", budget)
    print("Specialization:", specialization)
    print("Rating:", min_rating)

    results = search_caterers_db(
        city=city,
        budget=budget,
        specialization=specialization,
        min_rating=min_rating,
    )

    print("Results Found:", len(results))

    return results