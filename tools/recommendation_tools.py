from typing import List, Dict, Any

from langchain.tools import tool


# ------------------------------------------
# Weight Configuration
# ------------------------------------------

RATING_WEIGHT = 30
BUDGET_WEIGHT = 25
CAPACITY_WEIGHT = 20
SPECIALIZATION_WEIGHT = 15
VERIFIED_WEIGHT = 10


# ------------------------------------------
# Helper Functions
# ------------------------------------------

def budget_score(user_budget: str, caterer_budget: str) -> int:
    """
    Returns score based on budget match.
    """

    if not user_budget or not caterer_budget:
        return 0

    user_budget = user_budget.lower().strip()
    caterer_budget = caterer_budget.lower().strip()

    if user_budget == caterer_budget:
        return BUDGET_WEIGHT

    return 10


def rating_score(rating: float) -> int:
    """
    Converts rating into weighted score.
    """

    if rating >= 4.8:
        return 30

    elif rating >= 4.5:
        return 27

    elif rating >= 4.0:
        return 22

    elif rating >= 3.5:
        return 15

    return 8


def capacity_score(user_capacity: int, caterer_capacity: int) -> int:

    if caterer_capacity >= user_capacity:
        return CAPACITY_WEIGHT

    difference = user_capacity - caterer_capacity

    if difference <= 50:
        return 15

    if difference <= 100:
        return 10

    return 0


def specialization_score(
    user_specialization: str,
    caterer_specialization: str,
) -> int:

    if not user_specialization:
        return 0

    if user_specialization.lower() in caterer_specialization.lower():
        return SPECIALIZATION_WEIGHT

    return 0


def verified_score(status: str) -> int:

    if str(status).lower() == "verified":
        return VERIFIED_WEIGHT

    return 0


# ------------------------------------------
# Tool 1
# ------------------------------------------

@tool
def calculate_match_score(
    caterer: Dict[str, Any],
    user_requirements: Dict[str, Any],
) -> Dict[str, Any]:
    """
    Calculates total recommendation score for a caterer.
    """

    total = 0

    rating = float(caterer.get("Rating", 0))

    budget = caterer.get("Budget Tier", "")

    capacity = int(caterer.get("Guest Capacity", 0))

    specialization = caterer.get("Specialization", "")

    status = caterer.get("Status", "")

    rating_points = rating_score(rating)

    budget_points = budget_score(
        user_requirements.get("budget", ""),
        budget,
    )

    capacity_points = capacity_score(
        int(user_requirements.get("guests", 0)),
        capacity,
    )

    specialization_points = specialization_score(
        user_requirements.get("event_type", ""),
        specialization,
    )

    verified_points = verified_score(status)

    total = (
        rating_points
        + budget_points
        + capacity_points
        + specialization_points
        + verified_points
    )

    return {
        "name": caterer.get("Caterer Name"),
        "score": total,
        "rating": rating,
        "budget": budget,
        "capacity": capacity,
        "specialization": specialization,
        "status": status,
        "details": caterer,
    }


# ------------------------------------------
# Tool 2
# ------------------------------------------

@tool
def rank_caterers(
    caterers: List[Dict[str, Any]],
    user_requirements: Dict[str, Any],
    top_k: int = 3,
) -> List[Dict[str, Any]]:
    """
    Rank caterers according to recommendation score.
    """

    scored = []

    for caterer in caterers:

        score = calculate_match_score.invoke(
            {
                "caterer": caterer,
                "user_requirements": user_requirements,
            }
        )

        scored.append(score)

    scored.sort(
        key=lambda x: (
            x["score"],
            x["rating"],
        ),
        reverse=True,
    )

    return scored[:top_k]


# ------------------------------------------
# Tool 3
# ------------------------------------------

@tool
def generate_recommendation_summary(
    ranked_caterers: List[Dict[str, Any]],
) -> str:
    """
    Generates human readable recommendation summary.
    """

    if not ranked_caterers:

        return (
            "Sorry, I couldn't find any caterers matching "
            "your requirements."
        )

    response = []

    response.append(
        f"I found {len(ranked_caterers)} excellent caterer(s) for your event.\n"
    )

    for i, caterer in enumerate(ranked_caterers, start=1):

        response.append(
            f"""
{i}. {caterer['name']}

⭐ Rating: {caterer['rating']}

💰 Budget: {caterer['budget']}

👥 Capacity: {caterer['capacity']} Guests

🎉 Specialization: {caterer['specialization']}

✅ Status: {caterer['status']}

🏆 Match Score: {caterer['score']}/100
"""
        )

    response.append(
        "These caterers best match your event requirements "
        "based on rating, budget, guest capacity, specialization, "
        "and verification status."
    )

    return "\n".join(response)