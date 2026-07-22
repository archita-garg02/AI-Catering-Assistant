from langchain.tools import tool

from database.query import search_by_city


@tool
def compare_caterers(
    city: str,
):
    """
    Compare caterers.
    """

    caterers = search_by_city(city)

    comparison = []

    for item in caterers:

        comparison.append(
            {
                "Name": item["caterer_name"],
                "Budget": item["budget_tier"],
                "Rating": item["rating"],
                "Capacity": item["guest_capacity"],
                "Specialization": item["specialization"],
            }
        )

    return comparison