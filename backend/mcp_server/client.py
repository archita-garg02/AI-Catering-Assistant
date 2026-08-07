import sys
from pathlib import Path

from langchain_mcp_adapters.client import MultiServerMCPClient

BACKEND_DIR = Path(__file__).resolve().parent.parent

client = MultiServerMCPClient(
    {
        "catering": {
            "command": sys.executable,
            "args": ["-m", "mcp_server.server"],
            "transport": "stdio",
            "cwd": BACKEND_DIR,
        }
    }
)

# Cache for discovered tools
_cached_tools = None


async def get_mcp_tools():
    """
    Discover all tools exposed by the MCP server.
    This runs only once.
    """
    global _cached_tools

    if _cached_tools is None:
        print("\nLoading MCP tools from server...")
        _cached_tools = await client.get_tools()

        print("\n========== AVAILABLE MCP TOOLS ==========")
        for tool in _cached_tools:
            print(tool.name)

    return _cached_tools


async def get_tools_by_name(tool_names: list[str]):
    """
    Return only the requested MCP tools.
    """
    all_tools = await get_mcp_tools()

    filtered = [
        tool
        for tool in all_tools
        if tool.name in tool_names
    ]

    print("\n========== SELECTED TOOLS ==========")
    for tool in filtered:
        print(tool.name)

    return filtered
    
# async def get_tools_by_name(tool_names: list[str]):
#     """
#     Return only the MCP tools whose names are in tool_names.
#     """
#     all_tools = await client.get_tools()

#     print("\nAvailable Tools:")
#     for tool in all_tools:
#         print(tool.name)

#     filtered = [
#         tool
#         for tool in all_tools
#         if tool.name in tool_names
#     ]

#     print("\nFiltered Tools:")
#     for tool in filtered:
#         print(tool.name)

#     return filtered