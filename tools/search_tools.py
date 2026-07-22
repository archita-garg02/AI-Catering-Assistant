from langchain.tools import tool

from database.query import search_caterers


@tool
def search_caterers_tool(
    city: str = "",
    budget: str = "",
    specialization: str = "",
    min_rating: float = None,
):
    """
    Search caterers from MongoDB.
    """

    return search_caterers(
        city=city,
        budget=budget,
        specialization=specialization,
        min_rating=min_rating,
    )