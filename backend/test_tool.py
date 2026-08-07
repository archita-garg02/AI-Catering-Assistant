import asyncio

from agents.search_agent import create_search_agent


async def main():
    print("1. Creating agent...")
    agent = await create_search_agent()
    print("2. Agent created")

    print("3. Calling agent...")

    result = await agent.ainvoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": "Find caterers in Chennai"
                }
            ]
        }
    )

    print("4. Agent returned")
    print(result)


if __name__ == "__main__":
    asyncio.run(main())