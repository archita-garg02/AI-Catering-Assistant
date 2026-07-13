from langchain.tools import tool
from data_loader import df


@tool
def search_caterers(
    region: str = "",
    budget: str = "",
    specialization: str = "",
    min_rating: float = 0,
):
    """
    Search caterers using different filters.

    Parameters:
    - region: Delhi, South Delhi, North Delhi, etc.
    - budget: Budget-Friendly, Mid-Range, Premium
    - specialization: Wedding, Corporate, Birthday, etc.
    - min_rating: Minimum rating
    """

    result = df.copy()

    # Search in both State and Region
    if region:
        result = result[
            (
                result["State / Area"].str.contains(
                    region,
                    case=False,
                    na=False,
                )
            )
            |
            (
                result["Region / Zone"].str.contains(
                    region,
                    case=False,
                    na=False,
                )
            )
        ]

    # Budget filter
    if budget:
        result = result[
            result["Budget Tier"].str.contains(
                budget,
                case=False,
                na=False,
            )
        ]

    # Specialization filter
    if specialization:
        result = result[
            result["Specialization"].str.contains(
                specialization,
                case=False,
                na=False,
            )
        ]

    # Rating filter
    if min_rating > 0:
        result = result[result["Rating"] >= min_rating]

    if result.empty:
        return "No matching caterers found."

    # Sort by rating
    result = result.sort_values(
        by="Rating",
        ascending=False,
    )

    # Return top 5
    result = result.head(5)

    return result[
        [
            "Caterer Name",
            "State / Area",
            "Region / Zone",
            "Budget Tier",
            "Guest Capacity",
            "Rating",
            "Specialization",
            "Contact Number",
        ]
    ].to_dict(orient="records")


@tool
def get_contact_details(caterer_name: str):
    """
    Get contact details of a caterer.
    """

    result = df[
        df["Caterer Name"].str.contains(
            caterer_name,
            case=False,
            na=False,
        )
    ]

    if result.empty:
        return "Caterer not found."

    return result[
        [
            "Caterer Name",
            "Contact Number",
            "Email Address",
            "Website URL",
            "Verified Address / Location",
        ]
    ].to_dict(orient="records")


@tool
def calculate_total_cost(
    price_per_plate: int,
    guests: int,
):
    """
    Calculate estimated catering cost.
    """

    total = price_per_plate * guests

    return {
        "Guests": guests,
        "Price Per Plate": price_per_plate,
        "Estimated Cost": total,
    }


@tool
def list_all_regions():
    """
    List all available regions.
    """

    regions = sorted(
        df["Region / Zone"]
        .dropna()
        .unique()
        .tolist()
    )

    return regions


@tool
def list_budget_categories():
    """
    List available budget categories.
    """

    budgets = sorted(
        df["Budget Tier"]
        .dropna()
        .unique()
        .tolist()
    )

    return budgets