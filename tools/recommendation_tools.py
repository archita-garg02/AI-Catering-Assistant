from langchain.tools import tool

from database.query import search_caterers


@tool
def recommend_caterers(
    city: str,
    guests: int,
):
    """
    Recommend best caterers.
    """

    caterers = search_caterers(city=city)

    caterers = sorted(
        caterers,
        key=lambda x: x.get("rating", 0),
        reverse=True,
    )

    return caterers[:5]