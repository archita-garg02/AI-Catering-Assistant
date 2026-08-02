from mcp_server.app import mcp

@mcp.tool(name="recommend_caterers")
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