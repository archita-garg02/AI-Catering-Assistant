from agents.interaction_agent import InteractionAgent


def main():
    print("=" * 60)
    print("🍽️ Welcome to AI Catering Assistant")
    print("Type 'exit' to quit.")
    print("=" * 60)

    interaction_agent = InteractionAgent()

    while True:
        user_input = input("\nYou: ").strip()

        if user_input.lower() in ["exit", "quit"]:
            print("\n👋 Thank you for using AI Catering Assistant.")
            break

        try:
            response = interaction_agent.handle_request(user_input)
            print(f"\nAssistant: {response}")

        except Exception as e:
            print(f"\n❌ Error: {e}")


if __name__ == "__main__":
    main()