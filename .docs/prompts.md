# GitHub MCP Server - Example Prompts & Workflows

This document provides example prompts and workflows showcasing the powerful capabilities of the GitHub MCP Server. The server provides comprehensive GitHub API integration with organized toolsets for different use cases.

## Quick Reference

### Available Toolsets
- **repos** - Repository operations (files, branches, commits)
- **issues** - Issue management and tracking
- **pull_requests** - PR creation, reviews, and management
- **actions** - GitHub Actions workflows and CI/CD
- **code_security** - Code scanning and security alerts
- **notifications** - GitHub notifications management
- **users** - User and account operations
- **secret_protection** - Secret scanning and protection
- **context** - Current user and GitHub context (recommended)
- **experiments** - Experimental features

## Repository Management

### Basic Repository Operations

**Create and initialize a new repository:**
```
Create a new repository called "my-awesome-project" with a README file and make it public
```

**Explore repository contents:**
```
Show me the file structure of the main branch in microsoft/vscode repository
```

**File operations:**
```
Create a new file called "CONTRIBUTING.md" in my repository with standard contribution guidelines
```

**Branch management:**
```
Create a new feature branch called "feature/user-authentication" from the main branch in my repo
```

### Advanced Repository Workflows

**Bulk file operations:**
```
Push multiple files to create a basic Node.js project structure with package.json, index.js, and README.md
```

**Repository analysis:**
```
Analyze the commit history of the main branch for the last 30 commits and summarize the changes
```

**Search across repositories:**
```
Search for React components that implement authentication across all public repositories
```

## Issue Management

### Basic Issue Operations

**Create comprehensive issues:**
```
Create a bug report issue with the title "Login form validation not working" including steps to reproduce, expected behavior, and labels
```

**Issue tracking and management:**
```
List all open issues labeled "bug" and "high-priority" in my repository and sort them by creation date
```

**Automated issue workflows:**
```
For all issues labeled "needs-triage", add a comment asking for more details and assign them to the project maintainer
```

### Advanced Issue Workflows

**Issue analytics:**
```
Analyze all closed issues from the past month to identify common patterns and create a summary report
```

**Copilot integration:**
```
Assign GitHub Copilot to work on issue #42 to automatically generate code solutions
```

## Pull Request Management

### Basic PR Operations

**Create pull requests:**
```
Create a pull request from feature/user-auth to main with a detailed description of the authentication implementation
```

**PR review workflows:**
```
Review the changes in PR #123, check for potential security issues, and leave detailed feedback
```

**Merge management:**
```
Check the status of all open pull requests and merge any that are approved and have passing CI
```

### Advanced PR Workflows

**Automated code review:**
```
For PR #456, create a pending review, add comments on any lines with TODO comments, then submit the review requesting changes
```

**PR analytics:**
```
Analyze the last 10 merged pull requests to calculate average review time and identify bottlenecks
```

**Batch PR operations:**
```
Update all open pull requests with the latest changes from their base branches
```

## GitHub Actions & CI/CD

### Workflow Management

**Monitor workflow runs:**
```
Show me the status of all workflow runs for the main branch in the last 24 hours
```

**Troubleshoot failures:**
```
Get the logs for all failed jobs in the latest workflow run and identify the root cause
```

**Trigger workflows:**
```
Run the deployment workflow on the production branch with the staging environment parameter
```

### Advanced CI/CD Workflows

**Automated failure analysis:**
```
For any failed workflow runs in the past week, download the logs and create a summary of common failure patterns
```

**Workflow optimization:**
```
Analyze workflow run durations and usage metrics to identify optimization opportunities
```

## Security & Code Quality

### Code Security Management

**Security alert monitoring:**
```
List all open code scanning alerts with high severity and create issues for each one with remediation suggestions
```

**Secret scanning:**
```
Check for any secret scanning alerts and help me understand the security implications
```

### Security Workflows

**Automated security reviews:**
```
Review the security posture of my repository by checking code scanning alerts, secret scanning results, and dependency vulnerabilities
```

**Security compliance:**
```
Generate a security report for my repository including all scanning results and remediation recommendations
```

## Notifications & Team Management

### Notification Management

**Inbox management:**
```
Show me all my unread GitHub notifications and categorize them by type (mentions, reviews, issues, etc.)
```

**Selective notification handling:**
```
Mark all notifications from archived repositories as read and unsubscribe from repositories I'm no longer working on
```

### Team Collaboration

**User and team operations:**
```
Find all GitHub users who contributed to the project in the last 6 months and create a contributors list
```

**Collaboration analytics:**
```
Analyze notification patterns to understand team collaboration frequency and response times
```

## Advanced Automation Workflows

### Cross-Repository Operations

**Multi-repo maintenance:**
```
For all repositories I own, check for outdated dependencies and create issues to track necessary updates
```

**Organization-wide analysis:**
```
Analyze all repositories in my organization to identify common patterns, popular technologies, and maintenance needs
```

### Intelligent Automation

**Smart issue triage:**
```
For all new issues without labels, analyze their content and automatically apply appropriate labels and assign relevant team members
```

**Automated project health checks:**
```
Perform a comprehensive health check on my repository including CI status, security alerts, outdated dependencies, and documentation quality
```

**Intelligent code review:**
```
For all open pull requests, analyze the changes and provide automated feedback on code quality, security, and best practices
```

### Development Workflow Automation

**Feature branch automation:**
```
Create a complete feature development workflow: create branch, implement basic structure, create PR with draft status, and set up required reviewers
```

**Release preparation:**
```
Prepare for a new release by checking all merged PRs since last release, updating changelog, and creating release notes
```

## Tips for Effective Usage

### Best Practices

1. **Use specific toolsets**: Enable only the toolsets you need using `--toolsets` flag for better performance
2. **Leverage context tools**: Always use context toolset to understand your current GitHub environment
3. **Combine operations**: Chain multiple operations together for complex workflows
4. **Use read-only mode**: For analysis and reporting tasks, use `--read-only` flag for safety

### Prompt Engineering Tips

1. **Be specific**: Include repository names, issue numbers, and specific criteria
2. **Set clear expectations**: Specify desired output format and level of detail
3. **Use progressive complexity**: Start with simple operations and build up to complex workflows
4. **Leverage AI analysis**: Ask for insights, patterns, and recommendations based on data

### Common Patterns

1. **Analysis → Action**: First analyze the situation, then take appropriate action
2. **Batch operations**: Process multiple items with similar operations
3. **Conditional logic**: "If condition X, then action Y"
4. **Reporting and summaries**: Regular status reports and trend analysis

## Experimental Features

The `experiments` toolset includes cutting-edge features:

- Advanced PR analysis
- AI-powered code suggestions
- Predictive issue categorization
- Intelligent workflow optimization

Enable experiments with caution in production environments:
```
--toolsets repos,issues,pull_requests,experiments
```

## Configuration Examples

### VS Code Setup
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

### Docker with Specific Toolsets
```bash
docker run -i --rm \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=<your-token> \
  -e GITHUB_TOOLSETS="repos,issues,pull_requests,actions,code_security" \
  ghcr.io/github/github-mcp-server
```

---

*This document serves as your guide to unlocking the full potential of the GitHub MCP Server. Experiment with these examples and adapt them to your specific workflow needs.*