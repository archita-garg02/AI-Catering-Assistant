# 🍽️ AI Catering Assistant

An intelligent **Agentic AI-powered Catering Recommendation System** built using **LangChain** and **Python**. The assistant helps users discover suitable caterers based on their event requirements through a collaborative multi-agent workflow.

---

## 🚀 Features

- 🤖 Multi-Agent AI Architecture
- 💬 Conversational Interaction Agent
- 🧠 Intelligent Planning Agent
- 🔍 MongoDB-Powered Caterer Search
- ⭐ AI-Based Caterer Recommendations
- 🗄️ Centralized MongoDB Database
- 🛠️ LangChain Tool Calling
- 📊 Structured Data Retrieval
- 🔎 Dynamic Filtering (City, Budget, Rating, Capacity, Specialization)
- ⚡ MongoDB Indexing for Faster Search
- 🧹 Duplicate Data Removal Utilities
- 🔄 Modular & Scalable Architecture
  
---

## 🛠 Tech Stack

- Python
- LangChain
- MongoDB
- MongoDB Compass
- PyMongo
- Pandas
- BeautifulSoup4
- FastAPI (Upcoming)
- React (Upcoming)
- Ollama (Configurable LLM)

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
│   
│
├── tools/
│   ├── search_tools.py
│   ├── recommendation_tools.py
│   ├── comparison_tools.py
│   
│
├── database/
│   ├── __init__.py
│   ├── config.py
│   ├── mongo_connection.py
│   ├── import_html.py
│   ├── query.py
│   ├── create_indexes.py
│   ├── remove_duplicates.py
│   └── utils.py
│   
│
├── data/
│   ├── html/
│   └── data.zip
│
│
├── model.py
├── app.py
├── main.py
├── pyproject.toml
├── uv.lock
└── README.md

```

---

# 📖 Project Workflow

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
                      Search Agent
                              │
                              ▼
                     Search LangChain Tool
                              │
                              ▼
                     Database Query Layer
                              │
                              ▼
                           MongoDB
                              │
                              ▼
                  Matching Caterer Documents
                              │
                              ▼
                 Recommendation Agent
                              │
                              ▼
                         Final Response

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

The project uses MongoDB as the primary database.

The database layer is responsible for:

- Importing HTML datasets
- Cleaning and normalizing data
- Storing caterer documents
- Creating indexes
- Removing duplicate records
- Searching caterers using filters
- Returning structured documents

Agents never communicate directly with MongoDB.

Instead they follow:

Agent

↓

LangChain Tool

↓

Database Query Layer

↓

MongoDB

### config.py

Stores MongoDB configuration.

---

### mongo_connection.py

Creates a reusable MongoDB connection.

---

### import_html.py

Reads every HTML file.

Extracts tables.

Normalizes columns.

Inserts data into MongoDB.

---

### query.py

Provides reusable search functions:

- search_by_city()
- search_by_budget()
- search_by_rating()
- search_by_specialization()
- search_by_guest_capacity()

---

### create_indexes.py

Creates MongoDB indexes for faster searching.

---

### remove_duplicates.py

Removes duplicate caterer records.

---

### utils.py

Contains helper functions for:

- cleaning text
- rating conversion
- guest capacity parsing
- budget normalization

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

Searches MongoDB using:

- City
- Budget
- Rating
- Guest Capacity
- Specialization
- Status

Uses:

- Search Tool
- Query Layer

---

### 4. Recommendation Agent

Uses MongoDB search results to:

- Rank caterers
- Explain recommendations
- Summarize strengths

Never queries MongoDB directly.

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

The Search Tool queries MongoDB.

↓

MongoDB returns matching caterers.

↓

Recommendation Agent prepares the final response.
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

## Future Improvements

- Comparison Agent
- Cost Estimation Agent
- Booking Agent
- Menu Recommendation Agent
- Website Data Extraction
- AI Menu Parsing
- MongoDB Atlas Deployment
- Vector Search
- RAG Pipeline
- FastAPI Backend
- React Dashboard
- Authentication
- Google Maps Integration
- Customer Reviews
---

## 📚 Learning Outcomes

- Agentic AI
- LangChain Agents
- LangChain Tools
- Tool Calling
- MongoDB
- PyMongo
- Database Design
- HTML Data Parsing
- Prompt Engineering
- AI Workflow Design
- Modular Software Architecture
- Retrieval-Augmented Generation (RAG) Fundamentals
---


# 👨‍💻 Contributors

- Archita Garg
- Gouransh
- Dheeraj Sharma

---


# 📄 License

This project is developed for learning and educational purposes.
