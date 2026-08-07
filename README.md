# 🍽️ AI Catering Assistant

An intelligent **Agentic AI-powered Catering Recommendation System** built using **LangChain** and **Python**. The assistant helps users discover suitable caterers based on their event requirements through a collaborative multi-agent workflow.

---

## 🚀 Features

- 🤖 Multi-Agent AI Architecture
- 🧠 LangGraph Supervisor for Intelligent Agent Orchestration
- 📋 Planner Agent for Intent Analysis and Workflow Routing
- 🔍 AI-Powered Caterer Search
- ⭐ Personalized Caterer Recommendations
- ⚖️ Caterer Comparison
- 💰 Catering Cost Estimation
- 💬 Conversational Requirement Gathering
- 🔗 MCP (Model Context Protocol) Integration
- 🚀 FastMCP Tool Server
- 🗄️ MongoDB Database Integration
- 🛠️ LangChain Tool Calling
- 📊 Structured Data Retrieval and Filtering
- 🔄 Modular & Scalable Agent-Oriented Design
- ⚡ Asynchronous Agent Execution
- 📦 Centralized Tool Management
  
---

# 🛠 Tech Stack

- Python
- LangChain
- LangGraph
- LangGraph Supervisor
- FastMCP (MCP Server)
- LangChain MCP Adapters
- MongoDB
- Ollama
- Llama 3
- uv

---

# 📂 Project Structure

```
AI-Catering-Assistant/
│
├── backend/
│   │
│   ├── agents/
│   │   ├── __init__.py
│   │   ├── planner_agent.py
│   │   ├── search_agent.py
│   │   ├── recommendation_agent.py
│   │   └── comparison_agent.py
│   │
│   ├── supervisors/
│   │   └── supervisor.py
│   │
│   ├── models/
│   │   └── model.py
│   │
│   ├── mcp_server/
│   │   ├── app.py
│   │   ├── client.py
│   │   ├── server.py
│   │   ├── test_mcp.py
│   │   └── tools/
│   │       ├── planner_tools.py
│   │       ├── search_tools.py
│   │       ├── recommendation_tools.py
│   │       └── comparison_tools.py
│   │
│   ├── database/
│   │   ├── config.py
│   │   ├── mongo_connection.py
│   │   ├── import_html.py
│   │   ├── search_service.py
│   │   ├── query.py
│   │   ├── create_indexes.py
│   │   ├── remove_duplicates.py
│   │   └── utils.py
│   │
│   └── data/
│       ├── data.zip
│       └── html/
│           ├── DELHI.html
│           ├── HARYANA.html
│           ├── MAHARASHTRA.html
│           ├── ...
│           └── (all HTML datasets)
│
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
                main.py
                   │
                   ▼
          LangGraph Supervisor
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
   Planner      Search      Comparison
    Agent         Agent          Agent
      │            │            │
      └──────┬─────┴────────────┘
             ▼
      Recommendation Agent
             │
             ▼
         MCP Client
             │
             ▼
        FastMCP Server
             │
             ▼
      MongoDB Database
             │
             ▼
          Response
```

---

# 📁 Module Explanation

## 1. data/

The `data/` folder contains the raw catering dataset used to populate the database.

Contents:

* `data.zip` – Original catering dataset
* `html/` – Extracted HTML files containing caterer information from different cities and regions

Responsibilities:

* Store the raw dataset
* Serve as the source for database import
* Organize catering data region-wise

---

## 2. database/

The `database/` module is responsible for managing all interactions with MongoDB.

### Responsibilities

* Connect to MongoDB
* Import caterer data from HTML files
* Create database indexes
* Execute search queries
* Remove duplicate records
* Provide reusable database services

### Main Files

* `mongo_connection.py` – Creates the MongoDB connection
* `import_html.py` – Imports HTML data into MongoDB
* `search_service.py` – Performs database searches
* `query.py` – Executes search queries
* `create_indexes.py` – Creates indexes for faster searching
* `remove_duplicates.py` – Cleans duplicate records
* `config.py` – Stores database configuration
* `utils.py` – Helper functions

The AI agents never access MongoDB directly.

Instead, every request follows this flow:

```text
Agent
   │
   ▼
MCP Tool
   │
   ▼
Database Service
   │
   ▼
MongoDB
```

This layered architecture improves modularity, maintainability, and scalability.


---

## 3. mcp_server/

The project uses **FastMCP** to expose database operations as reusable tools.

### Responsibilities

* Register MCP tools
* Handle tool execution requests
* Connect AI agents with MongoDB
* Return structured data to agents

### Main Files

* `server.py` – Starts the FastMCP server and registers tools
* `client.py` – Connects AI agents to the MCP server
* `app.py` – MCP application configuration
* `test_mcp.py` – Tool testing

### Available MCP Tools

#### Planner Tool

* `planner_tool`

Determines the workflow based on the user's intent.

#### Search Tool

* `search_caterers`

Searches caterers using filters such as:

* City
* Budget
* Rating
* Guest Capacity
* Cuisine
* Specialization

#### Recommendation Tool

* `recommend_caterers`

Ranks search results and recommends the best caterers.

#### Comparison Tool

* `compare_caterers`

Compares multiple caterers based on:

* Rating
* Budget
* Capacity
* Specialization
* Contact Information

---

## 4. models/model.py

Initializes the Large Language Model used by all AI agents.

Example:

```python
from langchain.chat_models import init_chat_model

model = init_chat_model("ollama:llama3")
```

Responsibilities:

* Load the LLM
* Provide a shared model instance
* Handle reasoning and tool calling

---

# 🤖 Multi-Agent Workflow

The project follows a **Supervisor-Based Multi-Agent Architecture**.

---

## 1. Supervisor Agent

The Supervisor is the central controller of the application.

Responsibilities:

* Understand user requests
* Decide which specialist agent should execute the task
* Coordinate multiple agents
* Route requests intelligently

The Supervisor never accesses the database directly.

---

## 2. Planner Agent

Responsibilities:

* Analyze user intent
* Extract search requirements
* Decide the execution workflow

Example:

User:

> Find wedding caterers in Delhi under ₹1000.

Planner extracts:

* City = Delhi
* Budget = Under ₹1000
* Event = Wedding

The Planner then routes the request to the Search Agent.

---

## 3. Search Agent

Responsible for retrieving caterers from MongoDB.

Search Filters:

* City
* Budget
* Rating
* Guest Capacity
* Cuisine
* Specialization

Workflow:

```text
Search Agent
      │
      ▼
search_caterers Tool
      │
      ▼
MongoDB
```

The Search Agent only retrieves data; it does not rank or recommend caterers.

---

## 4. Recommendation Agent

After the Search Agent returns results, the Recommendation Agent:

* Ranks caterers
* Selects the best matches
* Explains why they are recommended

Ranking Factors:

* Rating
* Budget Match
* Capacity Match
* Cuisine
* Specialization

Returns:

* Best Caterers
* Explanation of recommendations

---

## 5. Comparison Agent

Used only when the user requests a comparison.

Compares caterers using:

* Rating
* Budget
* Capacity
* Cuisine
* Contact Information
* Website
* Specialization

Returns a structured comparison table.

---

# 🔄 Complete Execution Flow

```text
User
   │
   ▼
main.py
   │
   ▼
Supervisor
   │
   ├──────────────┐
   ▼              ▼
Planner      Comparison
   │
   ▼
Search Agent
   │
   ▼
MCP Search Tool
   │
   ▼
MongoDB
   │
   ▼
Recommendation Agent
   │
   ▼
Final Response
```


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
# 🗄️ Database Setup

## 1. Start MongoDB

Make sure MongoDB is running.

### Linux

```bash
sudo systemctl start mongod
```

### Verify MongoDB

```bash
mongosh
```

---

## 2. Create the Database

Inside MongoDB Shell:

```javascript
use CateringDB
```

Check the current database:

```javascript
db
```

---

## 3. Import Catering Dataset

Navigate to the backend directory:

```bash
cd backend
```

Run the data import script:

```bash
python database/import_html.py
```

This imports all HTML files from the `data/html/` directory into MongoDB.

---

## 4. Create Database Indexes

```bash
python database/create_indexes.py
```

Indexes improve search performance.

---

## 5. Remove Duplicate Records (Optional)

```bash
python database/remove_duplicates.py
```

---

## 6. Verify Imported Data

Open MongoDB Shell:

```bash
mongosh
```

Switch to the database:

```javascript
use CateringDB
```

Check available collections:

```javascript
show collections
```

Count total records:

```javascript
db.caterers.countDocuments()
```

View sample records:

```javascript
db.caterers.find().limit(5)
```

---

## 7. Search Records

Example query:

```javascript
db.caterers.find({
    state_area: /Delhi/i
})
```

Search by specialization:

```javascript
db.caterers.find({
    specialization: /Wedding/i
})
```

---

## 8. Run the Application

Start the AI Catering Assistant:

```bash
python main.py
```

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
- Real-Time Caterer Availability
- Booking Management
- Menu Recommendation Engine
- AI-based Dynamic Ranking
- Google Maps Integration
- Customer Review Analysis
- Vector Database Integration
- RAG-based Knowledge Retrieval
- Multi-language Support
- React Dashboard
- Admin Portal
- Authentication & Authorization

---

# 📚 Learning Outcomes

This project demonstrates:

- 🤖 Agentic AI and Multi-Agent Systems
- 🧠 LangChain Agent Development
- 🔄 LangGraph Supervisor for Agent Orchestration
- 🛠️ Model Context Protocol (MCP) Integration
- ⚡ FastMCP Server Development
- 🔧 LangChain Tool Calling
- 🦙 LLM Integration with Ollama (Llama 3)
- 🗄️ MongoDB Database Integration
- 🔍 Structured Data Retrieval and Filtering
- 📝 Prompt Engineering
- ⚙️ Asynchronous Programming with Python (`asyncio`)
- 🏗️ Modular and Scalable Project Architecture
- 💬 Conversational AI Workflow Design
- 🚀 AI Workflow Orchestration and Routing
- 📦 Dependency Management using `uv`
- 🌐 End-to-End AI Application Development
---


# 👨‍💻 Contributors

- Archita Garg
- Gouransh
- Dheeraj Sharma

---


# 📄 License

This project is developed for learning and educational purposes.
