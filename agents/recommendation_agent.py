from langchain.agents import create_agent

from model import model
from tools.search_tool import search_caterers_tool

agent = create_agent(
    model=model,
    tools=[search_caterers_tool],
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