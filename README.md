# 🍽️ AI Catering Assistant

An intelligent **Agentic AI-powered Catering Recommendation System** built using **LangChain** and **Python**. The assistant helps users discover suitable caterers based on their event requirements through a collaborative multi-agent workflow.

---

## 🚀 Features

- 🤖 Multi-Agent AI Architecture
- 🧠 Intelligent Planning Agent
- 🔍 AI-Powered Caterer Search
- ⭐ Personalized Recommendations
- ⚖️ Caterer Comparison
- 💰 Cost Estimation
- 💬 Conversational Requirement Gathering
- 🗄️ Centralized Database Integration
- 🔧 Modular LangChain Tools
- 📊 Structured Data Retrieval
- 🔄 Scalable Agent-Oriented Design
  
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
├── database/
│   ├── main.py
│   ├── pyproject.toml
│   ├── uv.lock
│   ├── db_client.py
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

```text
                            User
                              │
                              ▼
                 Interaction Agent
        (Collects Event Requirements)
                              │
                              ▼
                    Planner Agent
       (Determines User Intent & Workflow)
                              │
      ┌───────────────────────┼────────────────────────┐
      ▼                       ▼                        ▼
 Search Agent         Comparison Agent       Cost Estimation Agent
      │                       │                        │
      ▼                       ▼                        ▼
 Search Tools         Comparison Tools      Estimation Tools
      │                       │                        │
      └───────────────┬───────┴───────────────┬────────┘
                      ▼
             Database Service Layer
                      │
                      ▼
             Catering Database
                      │
                      ▼
         Recommendation Agent
     (Ranks & Explains Results)
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

## 2. Database Layer

The project uses a dedicated database layer to store and retrieve catering information.

Responsibilities:

- Store caterer information
- Query caterers using filters
- Retrieve caterer details
- Support future database migration (PostgreSQL, MongoDB, etc.)
- Provide a centralized data access layer for all AI tools

The AI agents never communicate directly with the database.

Instead, every request follows this flow:

```
Agent
   ↓
Tool
   ↓
Database Layer
   ↓
Database
```

This separation keeps the project modular and scalable.

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

## 5. Multi-Agent Workflow

### 1. Interaction Agent

Responsible for communicating with users.

Responsibilities:

- Understand user requests
- Ask follow-up questions
- Maintain conversation context
- Collect:
  - Event Type
  - City
  - Guest Count
  - Budget
  - Cuisine Preference

---

### 2. Planner Agent

Acts as the orchestrator of the system.

Responsibilities:

- Detect user intent
- Decide which specialist agent should execute the request
- Coordinate the complete workflow

Possible workflows:

Find Caterer

Interaction Agent

↓

Planner Agent

↓

Search Agent

↓

Recommendation Agent

Compare Caterers

Interaction Agent

↓

Planner Agent

↓

Comparison Agent

Estimate Cost

Interaction Agent

↓

Planner Agent

↓

Cost Estimation Agent

---

### 3. Search Agent

Searches the catering database using filters such as:

- City
- Budget
- Guest Capacity
- Rating
- Specialization
- Cuisine

Uses:

- Search Tools
- Database Layer

---

### 4. Recommendation Agent

Ranks search results using:

- Rating
- Budget Match
- Capacity Match
- Specialization
- Verification Status

Returns:

- Top Recommendations
- Explanation of rankings

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

Calculates estimated catering costs.

Formula:

Estimated Cost = Guests × Price Per Plate

Example:

500 Guests × ₹900

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

# 🗄️ Database Integration

The project includes a dedicated database layer that serves as the single source of truth for all catering information.

Architecture:

```text
User
   │
   ▼
Interaction Agent
   │
   ▼
Planner Agent
   │
   ▼
Specialized Agents
   │
   ▼
LangChain Tools
   │
   ▼
Database Service Layer
   │
   ▼
Catering Database
```

The database layer is responsible for:

- Fetching caterer information
- Filtering results
- Returning structured data
- Supporting future migration to SQL or NoSQL databases

Each AI agent interacts with the database only through LangChain tools, ensuring loose coupling and better maintainability.

---

# 🎯 Future Improvements

- PostgreSQL Integration
- MongoDB Support
- Real-Time Caterer Availability
- Booking Management
- Menu Recommendation Engine
- AI-based Dynamic Ranking
- Google Maps Integration
- Customer Review Analysis
- Vector Database Integration
- RAG-based Knowledge Retrieval
- Multi-language Support
- FastAPI Backend
- React Dashboard
- Admin Portal
- Authentication & Authorization

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
