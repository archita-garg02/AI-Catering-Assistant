from langchain.tools import tool
from services.data_loader import df



# -------------------------------
# Helper Function
# -------------------------------

def _apply_filters(
    city: Optional[str] = None,
    state: Optional[str] = None,
    budget: Optional[str] = None,
    specialization: Optional[str] = None,
    capacity: Optional[int] = None,
    min_rating: Optional[float] = None,
):
    """
    Internal helper function.
    Returns filtered dataframe.
    """

    filtered_df = df.copy()

    if city:
        filtered_df = filtered_df[
            filtered_df["Region / Zone"]
            .astype(str)
            .str.contains(city, case=False, na=False)
        ]

    if state:
        filtered_df = filtered_df[
            filtered_df["State / Area"]
            .astype(str)
            .str.contains(state, case=False, na=False)
        ]

    if budget:
        filtered_df = filtered_df[
            filtered_df["Budget Tier"]
            .astype(str)
            .str.lower()
            == budget.lower()
        ]

    if specialization:
        filtered_df = filtered_df[
            filtered_df["Specialization"]
            .astype(str)
            .str.contains(specialization, case=False, na=False)
        ]

    if capacity is not None:
        filtered_df = filtered_df[
            filtered_df["Guest Capacity"] >= capacity
        ]

    if min_rating is not None:
        filtered_df = filtered_df[
            filtered_df["Rating"] >= min_rating
        ]

    return filtered_df


# ======================================================
# Tool 1 : Search Caterers
# ======================================================

@tool
def search_caterers(
    city: str = "",
    state: str = "",
    budget: str = "",
    specialization: str = "",
    capacity: int = 0,
    min_rating: float = 0.0,
):
    """
    Search caterers based on city, state, budget,
    specialization, guest capacity and minimum rating.

    Returns matching caterers.
    """

    filtered = _apply_filters(
        city=city or None,
        state=state or None,
        budget=budget or None,
        specialization=specialization or None,
        capacity=capacity if capacity > 0 else None,
        min_rating=min_rating if min_rating > 0 else None,
    )

    if filtered.empty:
        return "No caterers found matching your requirements."

    results = []

    for _, row in filtered.iterrows():
        results.append(
            {
                "name": row.get("Caterer Name"),
                "state": row.get("State / Area"),
                "region": row.get("Region / Zone"),
                "address": row.get("Verified Address / Location"),
                "phone": row.get("Contact Number"),
                "email": row.get("Email Address"),
                "website": row.get("Website URL"),
                "specialization": row.get("Specialization"),
                "budget": row.get("Budget Tier"),
                "capacity": row.get("Guest Capacity"),
                "rating": row.get("Rating"),
                "status": row.get("Status"),
            }
        )

    return results


# ======================================================
# Tool 2 : Get Caterer Details
# ======================================================

@tool
def get_caterer_details(caterer_name: str):
    """
    Retrieve complete information of a caterer.

    Input:
        Caterer Name

    Output:
        Complete Caterer Details
    """

    result = df[
        df["Caterer Name"]
        .astype(str)
        .str.lower()
        .str.contains(caterer_name.lower(), na=False)
    ]

    if result.empty:
        return f"No caterer found with name '{caterer_name}'."

    row = result.iloc[0]

    return {
        "name": row.get("Caterer Name"),
        "state": row.get("State / Area"),
        "region": row.get("Region / Zone"),
        "address": row.get("Verified Address / Location"),
        "phone": row.get("Contact Number"),
        "email": row.get("Email Address"),
        "website": row.get("Website URL"),
        "specialization": row.get("Specialization"),
        "budget": row.get("Budget Tier"),
        "capacity": row.get("Guest Capacity"),
        "rating": row.get("Rating"),
        "status": row.get("Status"),
    }


