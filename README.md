# 🍽️ AI Catering Assistant

An **Agentic AI-powered Catering Assistant** built using **LangChain**, **Ollama (Llama 3)**, and **Python**. The assistant helps users discover suitable catering services by searching a curated dataset based on location, budget, specialization, rating, and other preferences.

This project demonstrates how **AI Agents** can use tools to interact with structured data instead of relying only on the LLM's knowledge.

---

## 🚀 Features

- 🤖 AI-powered conversational assistant
- 📍 Search caterers by location
- 💰 Filter by budget tier
- 🎉 Search by specialization (Wedding, Corporate, Birthday, etc.)
- ⭐ Filter using minimum rating
- 📞 Retrieve contact information
- 🧮 Estimate catering cost
- 📊 Excel-based dataset (100+ verified caterers)
- 🔧 Built using LangChain Tools

---

# 🛠 Tech Stack

- Python
- LangChain
- Ollama
- Llama 3
- Pandas
- OpenPyXL

---

# 📂 Project Structure

```
CateringService/
│
├── data/
│   └── North_India_Caterers_Plus_100_No_Duplicates.xlsx
│
├── data_loader.py
├── search.py
├── tools.py
├── model.py
├── agent.py
├── main.py
├── requirements.txt
└── README.md
```

---

# 📖 Project Workflow

```
                User Query
                     │
                     ▼
                LangChain Agent
                     │
                     ▼
          Understand User Intent
                     │
                     ▼
         Decide Which Tool to Call
                     │
                     ▼
                 LangChain Tool
                     │
                     ▼
                Search Functions
                     │
                     ▼
              Excel Dataset Search
                     │
                     ▼
            Matching Caterer Results
                     │
                     ▼
           LLM Generates Response
                     │
                     ▼
                    User
```

---

# 📁 Module Explanation

## 1. data_loader.py

Responsible for loading the Excel dataset.

Functions:
- Reads Excel file
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

Contains LangChain tools.

Responsibilities:

- Wrap Python functions using `@tool`
- Expose functions to the AI Agent
- Connect LangChain with business logic

Example tools:

- search_caterers
- get_contact_details
- calculate_total_cost
- list_all_regions
- list_budget_categories

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

## 5. agent.py

Creates the AI Agent.

The agent combines:

- LLM
- Tools
- System Instructions

The agent decides which tool should be called based on the user's request.

---

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

The project uses an Excel dataset containing:

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

- FastAPI Backend
- React Frontend
- MongoDB Database
- Online Caterer APIs
- Menu Recommendation
- Availability Checking
- Price Prediction
- AI-Based Ranking System
- User Authentication
- Booking Management
- Persistent Conversation Memory
- Multi-city Support

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

# 📄 License

This project is developed for learning and educational purposes.
