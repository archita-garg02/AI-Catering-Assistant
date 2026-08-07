from langchain.agents import create_agent

from models.model import model
from mcp_server.client import get_tools_by_name


async def create_search_agent():

    tools = await get_tools_by_name(["search_caterers"])

    print("\n========== SEARCH TOOLS ==========")

    for tool in tools:
        print(tool)
        print("Type:", type(tool))
        print("Name:", tool.name)

    agent = create_agent(
        model=model,
        tools=tools,
        name="search_agent",
system_prompt = """
You are the Search Agent for the AI Catering Assistant.

Your responsibilities:
- Always use the search_caterers tool to search the catering database.
- **required parameters**: city
- Never answer from your own knowledge.
- Never generate or assume caterer information.
- Use the user's request to extract filters such as:
  - City
  - Budget
  - Specialization
  - Minimum Rating
- Call the search_caterers tool with the extracted filters.
- Return only the results provided by the tool.
- If no matching caterers are found, clearly inform the user that no results were found.
- Do not recommend, rank, or compare caterers.
- If required information is missing, ask the user for clarification instead of guessing.
"""
    )

    print("\n========== AGENT CREATED ==========")
    print(agent)

    return agent