from typing import Optional
from langchain.tools import tool


# ---------------------------------------------------------
# Budget Tier Configuration
# (Price Per Plate in INR)
# ---------------------------------------------------------

BUDGET_TIERS = {
    "low": (300, 500),
    "medium": (600, 900),
    "high": (1000, 1500),
    "premium": (1600, 3000)
}


# ---------------------------------------------------------
# Tool 1 : Estimate Total Cost
# ---------------------------------------------------------

@tool
def estimate_cost(
    guests: int,
    price_per_plate: float
) -> str:
    """
    Estimate the total catering cost.

    Args:
        guests (int):
            Number of guests.

        price_per_plate (float):
            Catering price per plate.

    Returns:
        Estimated total cost.
    """

    if guests <= 0:
        return "❌ Number of guests must be greater than zero."

    if price_per_plate <= 0:
        return "❌ Price per plate must be greater than zero."

    total_cost = guests * price_per_plate

    return (
        f"Estimated Catering Cost\n\n"
        f"Guests            : {guests}\n"
        f"Price Per Plate   : ₹{price_per_plate:,.0f}\n"
        f"---------------------------------\n"
        f"Estimated Cost    : ₹{total_cost:,.0f}"
    )


# ---------------------------------------------------------
# Tool 2 : Estimate Budget Range
# ---------------------------------------------------------

@tool
def estimate_budget_range(
    guests: int,
    budget_tier: str
) -> str:
    """
    Estimate budget range based on budget tier.

    Budget Tiers:
    - Low
    - Medium
    - High
    - Premium

    Args:
        guests (int)

        budget_tier (str)

    Returns:
        Estimated minimum and maximum cost.
    """

    if guests <= 0:
        return "❌ Number of guests must be greater than zero."

    budget_tier = budget_tier.lower()

    if budget_tier not in BUDGET_TIERS:
        return (
            "❌ Invalid Budget Tier.\n"
            "Available options are:\n"
            "- Low\n"
            "- Medium\n"
            "- High\n"
            "- Premium"
        )

    min_price, max_price = BUDGET_TIERS[budget_tier]

    min_cost = guests * min_price
    max_cost = guests * max_price

    return (
        f"Estimated Budget Range\n\n"
        f"Guests          : {guests}\n"
        f"Budget Tier     : {budget_tier.title()}\n"
        f"Price Range     : ₹{min_price} - ₹{max_price} per plate\n"
        f"---------------------------------------------\n"
        f"Estimated Total : ₹{min_cost:,.0f} - ₹{max_cost:,.0f}"
    )