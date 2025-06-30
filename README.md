# GitHub Label Generator

This project provides Node.js scripts to bulk-create a predefined list of labels in a GitHub repository.

## Features

- Creates commonly used labels (e.g., bug, feature, documentation) all at once.
- Uses the GitHub API to create labels.

## Prerequisites

- [Node.js](https://nodejs.org/) installed.

```bash
npm install
```

## Usage

This project includes two versions of the script.

### 1. `create-labels-input-github-token.js` (Recommended)

This script prompts for the GitHub repository URL and a Personal Access Token at runtime to create labels. This method is recommended for security.

**How to run:**

```bash
node create-labels-input-github-token.js
```

When you run the script, you will be prompted to enter the GitHub repository URL and your token in the terminal.

```
Enter GitHub repository URL: https://github.com/your-username/your-repository
Enter GitHub Token: ghp_xxxxxxxxxxxxxxxxxxxx
```

### 2. `create-labels.js`

> **⚠️ Warning:** This script requires you to hardcode your GitHub Personal Access Token directly into the source code. Be cautious, as this can expose your token.

You can run the script after entering your token in the `TOKEN` constant at the top of the `create-labels.js` file.

```javascript
// create-labels.js
const TOKEN = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'; // Enter your token here.
```

**How to run:**

```bash
node create-labels.js
```

## Customization

You can add, remove, or modify the list of labels by editing the `labels` array within the script.

```javascript
const labels = [
  { name: 'feature', color: '6a5acd', description: 'Adds a new feature.' },
  { name: 'bug fix', color: 'dc143c', description: 'Fixes a discovered bug.' },
  // ... Add or modify labels as needed.
];
``` 