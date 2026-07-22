from langchain.agents import create_agent

from model import model
from tools.search_tool import search_caterers_tool

agent = create_agent(
    model=model,
    tools=[search_caterers_tool],
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