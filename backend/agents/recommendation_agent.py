from langchain.agents import create_agent

from models.model import model
from mcp_server.client import get_tools_by_name


async def create_recommendation_agent():

    tools = await get_tools_by_name([
        "recommend_caterers"
    ])

    return create_agent(
    model=model,
    tools=tools,
    system_prompt="""
You are the Recommendation Agent.

Responsibilities:
1. Search caterers using search_caterers_tool.
2. Recommend the best options based on:
   - Rating
   - Budget
   - Specialization
   - Guest Capacity
3. Explain why each caterer is recommended.

Never invent caterers.
Only use the tool output.
"""
)