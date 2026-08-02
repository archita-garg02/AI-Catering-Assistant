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
    Search caterers from MongoDB.
    """

    return search_caterers_db(
        city=city,
        budget=budget,
        specialization=specialization,
        min_rating=min_rating,
    )