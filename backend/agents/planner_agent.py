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
    name="planner_agent",
    system_prompt="""
You are the Event Planner Agent.

Responsibilities:
1. Understand the user's intent.
2. Decide which specialist agent should execute.
3. Never search.
4. Never recommend.
5. Never compare.

Never fabricate data.
"""
)