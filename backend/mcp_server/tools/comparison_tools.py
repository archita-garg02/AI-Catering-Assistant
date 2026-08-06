from database.search_service import search_caterers_db
from mcp_server.app import mcp

@mcp.tool(name="compare_caterers")
def compare_caterers(
    city: str,
):
    """
    Compare caterers.
    """

    caterers = search_caterers_db(city=city)

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