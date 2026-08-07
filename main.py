import asyncio
import sys
from pathlib import Path
from pprint import pprint

BACKEND_DIR = Path(__file__).resolve().parent / "backend"
sys.path.insert(0, str(BACKEND_DIR))

from supervisors.supervisor import get_app


async def run_session():
    app = await get_app()

    print("=" * 60)
    print("🍽️ Welcome to AI Catering Assistant")
    print("Type 'exit' to quit.")
    print("=" * 60)

    while True:
        user_input = input("\nYou: ").strip()

        if user_input.lower() in ["exit", "quit"]:
            print("\n👋 Thank you for using AI Catering Assistant.")
            break
        
        try:
            result = await app.ainvoke(
                {"messages": [{"role": "user", "content": user_input}]}
            )

            print("\nConversation:\n")

            for msg in result["messages"]:
                if hasattr(msg, "content") and msg.content:
                    name = getattr(msg, "name", "assistant")
                    print(f"{name}:")
                    print(msg.content)
                    print("-" * 50)

        except Exception as e:
            print(f"\n❌ Error: {e}")

        # try:
        #     result = await app.ainvoke(
        #         {"messages": [{"role": "user", "content": user_input}]}
        #     )
        #     # print(f"\nAssistant: {result['messages'][-1].content}")
        #     pprint(result)



        # except Exception as e:
        #     print(f"\n❌ Error: {e}")


def main():
    asyncio.run(run_session())


if __name__ == "__main__":
    main()
