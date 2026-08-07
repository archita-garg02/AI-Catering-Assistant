from langchain_ollama import ChatOllama

model = ChatOllama(
    model="llama3.1",
    temperature=0,
)

# from langchain.chat_models import init_chat_model

# model = init_chat_model(
#     model="ollama:llama3.1",
#     temperature=0
# )