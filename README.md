# 🍽️ AI Catering Assistant

An intelligent **Agentic AI-powered Catering Recommendation System** built using **LangChain**, **FastAPI**, and **Python**. The assistant helps users discover suitable caterers based on their event requirements through a collaborative multi-agent workflow.

---

## 🚀 Features

- 🤖 Multi-Agent AI Architecture
- 🔍 Intelligent Caterer Search
- ⭐ Personalized Recommendations
- ⚖️ Caterer Comparison
- 💰 Cost Estimation
- 💬 Conversational Requirement Gathering
- 🔧 Modular LangChain Tools

---

# 🛠 Tech Stack

- Python
- LangChain
- Ollama
- Llama 3
- Pandas

---

# 📂 Project Structure

```
AI-Catering-Assistant/

│
├── agents/
│   ├── interaction_agent.py
│   ├── planner_agent.py
│   ├── search_agent.py
│   ├── recommendation_agent.py
│   ├── comparison_agent.py
│   └── cost_agent.py
│
├── tools/
│   ├── search_tools.py
│   ├── recommendation_tools.py
│   ├── comparison_tools.py
│   ├── estimation_tools.py
│   ├── validation_tools.py
│   └── utility_tools.py
│
├── services/
│   ├── data_loader.py
│
├── data/
│   └── data.zip
│
│
├── app.py
├── requirements.txt
└── README.md
```

---

# 📖 Project Workflow

```
                           User
                            │
                            ▼
               User Interaction Agent
          (Collects event requirements)
                            │
                            ▼
                    Planning Agent
          (Determines user intent & workflow)
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
    Search Agent    Comparison Agent   Cost Agent
          │
          ▼
   Search Tools & Dataset
          │
          ▼
  Recommendation Agent
 (Ranks & explains results)
          │
          ▼
         User
```

---

# 📁 Module Explanation

## 1. data_loader.py

Responsible for loading the zip dataset.

Functions:
- Reads zip file
- Cleans column names
- Handles missing values
- Creates a Pandas DataFrame

---

## 2. search.py

Contains the business logic.

Responsibilities:

- Search caterers
- Apply filters
- Sort by rating
- Return best matches

This file **does not know anything about LangChain**.

---

## 3. tools.py

The project follows an **Agent + Tool** architecture.

## Search Tools

- search_caterers()
- get_caterer_details()

---

## Recommendation Tools

- rank_caterers()
- calculate_match_score()
- generate_recommendation_summary()

---

## Comparison Tools

- compare_caterers()
- highlight_differences()

---

## Cost Estimation Tools

- estimate_cost()
- estimate_budget_range()

---

## Validation Tools

- extract_user_requirements()
- validate_user_input()
- identify_missing_fields()

---

## Utility Tools

- load_dataset()
- normalize_city_name()
- normalize_budget()
- validate_capacity()

---

## 4. model.py

Initializes the LLM.

Example:

```python
from langchain.chat_models import init_chat_model

model = init_chat_model(
    "ollama:llama3"
)
```

---

## 5.  Multi-Agent Workflow

### 1. User Interaction Agent
Responsible for interacting with users and collecting event requirements.

Responsibilities:
- Understand user requests
- Ask follow-up questions
- Maintain conversation context
- Collect:
  - Event Type
  - City
  - Number of Guests
  - Budget
  - Cuisine Preference

---

### 2. Planning Agent

Responsible for understanding user intent and deciding which specialist agent should execute the request.

Possible workflows:

```
Find Caterer
    ↓
Search Agent
    ↓
Recommendation Agent
```

```
Compare Caterers
      ↓
Comparison Agent
```

```
Estimate Budget
      ↓
Cost Estimation Agent
```

---

### 3. Search Agent

Searches the catering dataset using user filters.

Supported Filters:

- City
- Budget Tier
- Guest Capacity
- Rating
- Specialization
- Cuisine (Future)

---

### 4. Recommendation Agent

Ranks matching caterers using multiple criteria:

- Rating
- Budget Match
- Capacity Match
- Specialization Match
- Verification Status

Returns the best recommendations with explanations.

---

### 5. Comparison Agent

Compares multiple caterers based on:

- Rating
- Budget
- Capacity
- Contact Information
- Website
- Specialization

---

### 6. Cost Estimation Agent

Calculates estimated catering cost based on:

```
Estimated Cost = Guests × Price Per Plate
```

Example:

```
500 Guests
₹900 / Plate

↓

₹4,50,000
---
```

## 6. main.py

Entry point of the application.

Responsibilities:

- Accept user input
- Invoke AI Agent
- Display response

---

# 🤖 How the AI Agent Works

Suppose the user asks:

> Find premium wedding caterers in South Delhi.

### Step 1

The user query is sent to the AI Agent.

↓

### Step 2

The LLM understands the intent.

It extracts:

- Region = South Delhi
- Budget = Premium
- Specialization = Wedding

↓

### Step 3

The agent decides to call

```
search_caterers()
```

↓

### Step 4

The tool executes the search.

↓

### Step 5

The search function filters the Excel dataset.

↓

### Step 6

Top matching caterers are returned.

↓

### Step 7

The LLM converts structured data into a natural language response.

---

# 🔧 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/AI-Catering-Assistant.git

cd AI-Catering-Assistant
```

Create virtual environment

```bash
python -m venv .venv
```

Activate environment

Linux / Mac

```bash
source .venv/bin/activate
```

Windows

```bash
.venv\Scripts\activate
```

Install Ollama

Download from:

https://ollama.com

Pull Llama 3

```bash
ollama pull llama3
```

Run Ollama

```bash
ollama serve
```

Run the application

```bash
python main.py
```

---

# 💬 Example Queries

```
Find premium caterers in South Delhi.

Show wedding caterers.

List budget-friendly caterers.

Provide contact details of Royal Caterers.

Estimate catering cost for 300 guests at ₹800 per plate.

What regions do you cover?
```

---

# 📊 Dataset

The project uses an zip dataset containing:

- Caterer Name
- State / Area
- Region / Zone
- Contact Number
- Email Address
- Website
- Budget Tier
- Guest Capacity
- Rating
- Specialization

---

# 🎯 Future Improvements

- Database Integration (PostgreSQL / MongoDB)
- Real-Time Caterer Availability
- Menu Recommendation
- Booking System
- Google Maps Integration
- Customer Reviews & Sentiment Analysis
- Vector Database for Semantic Search
- RAG-based Knowledge Retrieval
- Multi-language Support
- Admin Dashboard
---

# 📚 Learning Outcomes

This project demonstrates:

- Agentic AI
- LangChain Tools
- Tool Calling
- LLM Integration
- Data Processing using Pandas
- Prompt Engineering
- Modular Project Design
- AI Workflow Architecture

---


# 👨‍💻 Contributors

- Archita Garg
- Gouransh
- Dheeraj Sharma

---


# 📄 License

This project is developed for learning and educational purposes.
