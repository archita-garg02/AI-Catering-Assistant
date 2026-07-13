from langchain.agents import create_agent

from model import model

from tools import (
    search_caterers,
    get_contact_details,
    calculate_total_cost,
    list_all_regions,
    list_budget_categories,
)

tools = [
    search_caterers,
    get_contact_details,
    calculate_total_cost,
    list_all_regions,
    list_budget_categories,
]

agent = create_agent(
    model=model,
    tools=tools,
    system_prompt="""
You are an AI Catering Assistant.

Your job is to help users find the best caterers.

Always use the available tools.

Never invent caterer names.

If no caterer exists, politely tell the user.
"""
)