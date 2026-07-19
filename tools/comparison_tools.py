from typing import List, Dict, Any
from langchain.tools import tool


# ======================================================
# Tool 1 : compare_caterers()
# ======================================================

@tool
def compare_caterers(caterers: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Compare two or more caterers based on important attributes.

    Args:
        caterers: List of caterer dictionaries.

    Returns:
        Dictionary containing comparison table.
    """

    if len(caterers) < 2:
        return {
            "success": False,
            "message": "At least two caterers are required for comparison."
        }

    comparison = []

    attributes = [
        "Caterer Name",
        "Rating",
        "Budget Tier",
        "Guest Capacity",
        "Specialization",
        "Contact Number",
        "Website URL",
        "Verified Address / Location"
    ]

    for attribute in attributes:

        row = {
            "Attribute": attribute
        }

        for caterer in caterers:

            caterer_name = caterer.get("Caterer Name", "Unknown")

            row[caterer_name] = caterer.get(attribute, "N/A")

        comparison.append(row)

    return {
        "success": True,
        "comparison": comparison
    }

# ======================================================
# Tool 2 : highlight_differences()
# ======================================================

@tool
def highlight_differences(caterers: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Highlights strengths and differences between caterers.

    Args:
        caterers: List of caterer dictionaries.

    Returns:
        Summary of key differences.
    """

    if len(caterers) < 2:
        return {
            "success": False,
            "message": "Need at least two caterers."
        }

    highlights = []

    # Highest Rating
    highest_rating = max(
        caterers,
        key=lambda x: float(x.get("Rating", 0))
    )

    highlights.append(
        f"{highest_rating['Caterer Name']} has the highest rating "
        f"({highest_rating.get('Rating', 'N/A')})."
    )

    # Largest Capacity
    largest_capacity = max(
        caterers,
        key=lambda x: int(x.get("Guest Capacity", 0))
    )

    highlights.append(
        f"{largest_capacity['Caterer Name']} can serve the largest number "
        f"of guests ({largest_capacity.get('Guest Capacity')} guests)."
    )

    # Lowest Budget Tier (Simple Ranking)
    budget_priority = {
        "Low": 1,
        "Medium": 2,
        "High": 3,
        "Premium": 4
    }

    cheapest = min(
        caterers,
        key=lambda x: budget_priority.get(
            str(x.get("Budget Tier", "Premium")),
            4
        )
    )

    highlights.append(
        f"{cheapest['Caterer Name']} is the most budget-friendly option "
        f"({cheapest.get('Budget Tier')})."
    )

    # Specializations
    for caterer in caterers:

        highlights.append(
            f"{caterer['Caterer Name']} specializes in "
            f"{caterer.get('Specialization', 'General Catering')}."
        )

    return {
        "success": True,
        "highlights": highlights
    }