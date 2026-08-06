from langchain.agents import create_agent

from models.model import model
from mcp_server.client import get_tools_by_name


async def create_comparison_agent():

    tools = await get_tools_by_name([
        "compare_caterers"
    ])

    return create_agent(
        model=model,
        tools=tools,
        system_prompt="""
    You are the Comparison Agent.

    Responsibilities:
    1. Search caterers.
    2. Compare them based on:
    - Rating
    - Budget
    - Capacity
    - Specialization
    3. Present the comparison in a table.

    Never recommend one unless explicitly asked.
    """
    )