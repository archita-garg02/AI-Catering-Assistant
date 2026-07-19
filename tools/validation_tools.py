"""
validation_tools.py

LangChain tools used by the User Interaction Agent.

Responsibilities:
1. Extract structured requirements from user messages.
2. Validate extracted information.
3. Identify missing required fields.
"""

from typing import Dict, List, Optional
import json

from langchain.tools import tool
from langchain_core.messages import HumanMessage

# Import your model
from model import model

# Tool: Extract User Requirements
@tool
def extract_user_requirements(user_query: str) -> Dict:
    """
    Extract structured catering requirements from a user's message.

    Args:
        user_query: Natural language user request.

    Returns:
        Dictionary containing extracted fields.
    """

    prompt = f"""
You are an information extraction assistant.

Extract catering requirements from the user's message.

Return ONLY valid JSON.

Fields:
{{
    "event_type": "",
    "city": "",
    "guest_count": null,
    "budget_per_plate": null,
    "cuisine": "",
    "food_type": "",
    "event_date": ""
}}

Rules:
- guest_count must be an integer.
- budget_per_plate must be a number.
- Use empty string if unavailable.
- Do not explain anything.

User Message:
{user_query}
"""

    response = model.invoke([HumanMessage(content=prompt)])

    try:
        return json.loads(response.content)
    except Exception:
        return {
            "event_type": "",
            "city": "",
            "guest_count": None,
            "budget_per_plate": None,
            "cuisine": "",
            "food_type": "",
            "event_date": ""
        }

# Tool: Identify Missing Fields
@tool
def identify_missing_fields(requirements: Dict) -> List[str]:
    """
    Identify missing mandatory fields.

    Args:
        requirements: Dictionary produced by extract_user_requirements()

    Returns:
        List of missing field names.
    """

    required_fields = [
        "event_type",
        "city",
        "guest_count",
        "budget_per_plate"
    ]

    missing = []

    for field in required_fields:

        value = requirements.get(field)

        if value is None:
            missing.append(field)

        elif isinstance(value, str):

            if value.strip() == "":
                missing.append(field)

    return missing

# Tool: Validate User Input
@tool
def validate_user_input(requirements: Dict) -> Dict:
    """
    Validate extracted user requirements.

    Returns validation status and any errors.
    """

    errors = []

    guest_count = requirements.get("guest_count")
    budget = requirements.get("budget_per_plate")

    if guest_count is not None:

        if not isinstance(guest_count, int):
            errors.append("Guest count must be an integer.")

        elif guest_count <= 0:
            errors.append("Guest count must be greater than zero.")

    if budget is not None:

        if not isinstance(budget, (int, float)):
            errors.append("Budget must be numeric.")

        elif budget <= 0:
            errors.append("Budget must be greater than zero.")

    city = requirements.get("city")

    if city:

        if len(city.strip()) < 2:
            errors.append("City name is too short.")

    return {
        "is_valid": len(errors) == 0,
        "errors": errors
    }