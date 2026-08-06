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


async def get_mcp_tools():
    """
    Discover all tools exposed by the MCP server.
    """
    return await client.get_tools()

async def get_tools_by_name(tool_names: list[str]):
    """
    Return only the MCP tools whose names are in tool_names.
    """
    all_tools = await client.get_tools()

    filtered = [
        tool
        for tool in all_tools
        if tool.name in tool_names
    ]

    return filtered