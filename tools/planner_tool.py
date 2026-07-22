from langchain.tools import tool


@tool
def planner_tool(
    guests: int,
    event_type: str,
):
    """
    Suggest catering plan.
    """

    return {
        "event_type": event_type,
        "recommended_staff": guests // 20,
        "estimated_tables": guests // 8,
        "estimated_food_counter": max(2, guests // 100),
    }