from agent import agent

while True:

    query = input("User : ")

    if query.lower() == "exit":
        break

    response = agent.invoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": query,
                }
            ]
        }
    )

    print("\nAI :")

    print(response["messages"][-1].content)