from agents.search_agent import agent

response = agent.invoke(
    {
        "messages": [
            {
                "role": "user",
                "content": "Find premium caterers in Tiruchirappalli"
            }
        ]
    }
)

print(response)