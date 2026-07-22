from agents.Search_Agent import Search_agent
from agents.Recommendation_Agent import Recommendation_Agent
from agents.Comparison_Agent import Comparison_Agent



def supervisor(query: str):

    query = query.lower()

    if "compare" in query:
        return comparison_agent.invoke(
            {"messages":[{"role":"user","content":query}]}
        )

    elif "recommend" in query or "best" in query:
        return recommendation_agent.invoke(
            {"messages":[{"role":"user","content":query}]}
        )

    elif "cost" in query or "price" in query:
        return cost_agent.invoke(
            {"messages":[{"role":"user","content":query}]}
        )

    else:
        return search_agent.invoke(
            {"messages":[{"role":"user","content":query}]}
        )