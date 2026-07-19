from langchain.agenrts import create_agent
from model import model
from tools.recommendation_tools import (
  calculate_match_score(),
  rank_caterers(),
  generate_recommendation_summary()
)

tools=[
   calculate_match_score(),
   rank_caterers(),
   generate_recommendation_summary()
]

agent = create_agent(
    model=model,
    tools=tools,
    system_prompt="""You are the Recommendation Agent.

Your responsibility is to rank caterers returned by the Search Agent.

You never search the dataset yourself.

Ranking Criteria:
1. Higher Rating
2. Better Budget Match
3. Guest Capacity Match
4. Specialization Match
5. Verified Status
6. Cuisine Match (if available)

Responsibilities:
- Score every caterer.
- Rank them.
- Return only the best recommendations.

If multiple caterers have similar scores, prefer:
1. Higher rating
2. Verified caterers
3. Larger guest capacity

Output Format:

[
 {
   "rank":1,
   "name":"",
   "score":96,
   "reason":"Highest rating and perfect budget match."
 },
 {
   "rank":2,
   "name":"",
   "score":91,
   "reason":"Excellent capacity and specialization."
 }
]"""
)