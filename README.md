# GitHub MCP Server Dojo 🥋

A playground repository for experimenting with the [GitHub MCP Server](https://github.com/github/github-mcp-server) - exploring its powerful tools, testing workflows, and discovering creative automation possibilities.

## About

This repository serves as a testing ground and learning environment for the GitHub Model Context Protocol (MCP) Server. The GitHub MCP Server provides seamless integration with GitHub APIs, enabling advanced automation and interaction capabilities through AI tools.

## What's Inside

- **`.docs/prompts.md`** - Comprehensive collection of example prompts and workflows showcasing the full capabilities of the GitHub MCP Server
- **Experimental playground** - Space for testing various GitHub MCP Server features and toolsets
- **Workflow examples** - Real-world automation scenarios and use cases

## GitHub MCP Server Overview

The GitHub MCP Server offers several powerful toolsets:

| Toolset | Description |
|---------|-------------|
| **repos** | Repository operations (files, branches, commits) |
| **issues** | Issue management and tracking |
| **pull_requests** | PR creation, reviews, and management |
| **actions** | GitHub Actions workflows and CI/CD |
| **code_security** | Code scanning and security alerts |
| **notifications** | GitHub notifications management |
| **users** | User and account operations |
| **secret_protection** | Secret scanning and protection |
| **context** | Current user and GitHub context |
| **experiments** | Experimental features |

## Quick Start

### Remote Server (Easiest)

The remote GitHub MCP Server is hosted by GitHub and provides the easiest setup method:

1. **VS Code**: Use the one-click install button from the [official repo](https://github.com/github/github-mcp-server)
2. **Manual configuration**: Add to your MCP settings:
   ```json
   {
     "servers": {
       "github": {
         "type": "http",
         "url": "https://api.githubcopilot.com/mcp/"
       }
     }
   }
   ```

### Local Server (Docker)

For local development or custom configurations:

```bash
docker run -i --rm \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=<your-token> \
  ghcr.io/github/github-mcp-server
```

## Example Workflows

Check out [`.docs/prompts.md`](.docs/prompts.md) for detailed examples including:

- **Repository Management** - File operations, branch management, bulk operations
- **Issue Automation** - Smart triage, analytics, batch operations
- **PR Workflows** - Automated reviews, merge management, analytics
- **CI/CD Integration** - Workflow monitoring, failure analysis, deployment automation
- **Security & Compliance** - Code scanning, secret detection, security reporting
- **Team Collaboration** - Notification management, user analytics, cross-repo operations

## Getting Started

1. **Set up the GitHub MCP Server** following the [official documentation](https://github.com/github/github-mcp-server)
2. **Explore the examples** in [`.docs/prompts.md`](.docs/prompts.md)
3. **Start experimenting** with your own workflows and automations
4. **Share your discoveries** - contributions welcome!

## Configuration Tips

- **Use specific toolsets**: Enable only what you need with `--toolsets` for better performance
- **Start with read-only**: Use `--read-only` flag for safe exploration
- **Enable context toolset**: Always include `context` for better AI understanding
- **Try experiments**: Enable `experiments` toolset for cutting-edge features

## Resources

- [GitHub MCP Server Official Repository](https://github.com/github/github-mcp-server)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/introduction)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [VS Code MCP Integration](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

## License

This project is licensed under the MIT License - see the 
[GitHub MCP Server license](https://github.com/github/github-mcp-server/blob/main/LICENSE) for details.

---

🚀 **Ready to explore?** Start with the examples in [`.docs/prompts.md`](.docs/prompts.md) 
and unleash the power of GitHub automation!
