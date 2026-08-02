from mcp_server.app import mcp

# Import all tools so they register with the server
from mcp_server.tools.search_tools import search_caterers
from mcp_server.tools.comparison_tools import compare_caterers
from mcp_server.tools.recommendation_tools import recommend_caterers
from mcp_server.tools.planner_tools import planner_tool

if __name__ == "__main__":
    mcp.run()