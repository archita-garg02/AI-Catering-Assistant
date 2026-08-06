from langchain.agents import create_agent

from models.model import model
from mcp_server.client import get_tools_by_name

async def create_search_agent():
    
    tools = await get_tools_by_name([
        "search_caterers"
    ])

    return create_agent(
        model=model,
        tools=tools,
        system_prompt="""
    You are the Search Agent.

    Your only responsibility is retrieving caterers from MongoDB using the available search tool.

    Responsibilities:
    1. Read the search filters.
    2. Call search_caterers_tool.
    3. Return all matching caterers.
    4. Never modify the returned data.

    Never:
    - Recommend caterers.
    - Rank caterers.
    - Compare caterers.
    - Estimate prices.
    - Talk directly to users.

    Return only the search results.
    """
    )