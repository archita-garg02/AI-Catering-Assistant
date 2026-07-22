from langchain.agents import create_agent

from model import model
from tools.search_tool import search_caterers_tool

agent = create_agent(
    model=model,
    tools=[search_caterers_tool],
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