from langchain.agents import create_agent

from models.model import model
from mcp_server.client import get_tools_by_name


async def create_planner_agent():

    tools = await get_tools_by_name([
        "planner_tool"
    ])

    return create_agent(
    model=model,
    tools=tools,
    system_prompt="""
You are the Event Planner Agent.

Responsibilities:
1. Understand the event requirements.
2. Determine suitable filters.
3. Search caterers using the search tool.
4. Return suitable caterers.

Never fabricate data.
"""
)