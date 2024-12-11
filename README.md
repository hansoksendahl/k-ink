# k-ink

**K-Ink**: an Artificial Intelligence (AI) Command Line Interface (CLI) tool
that’s as clever as it is chaotic. 🤖⚙️

K-Ink isn’t just another CLI tool—it’s a self-evolving genius. Built to automate
mundane tasks and solve complex problems, K-Ink empowers you to create tools on
the fly, adapt workflows, and let AI take over where you once toiled. Whether
you’re working with files, directories, or dreaming up entirely new features,
K-Ink is here to help—and maybe roast your inefficiencies along the way.

---

## Features

- **AI-Powered**: Let K-Ink generate, execute, and even rewrite code for you.
- **Extensible**: Use existing tools or create new ones dynamically within the
  CLI.
- **File and Directory Management**: Read, write, and manipulate your filesystem
  with ease.
- **Customizable**: Expand K-Ink’s capabilities by defining new tools to suit
  your needs.

---

## Learn More

Curious about how K-Ink works and what makes it tick? Check out the full article
for a step-by-step walkthrough, technical deep dives, and plenty of chaotic
genius:

[**Read the Article**](https://blog.hox.io/articles/2024-12-10)

---

## Getting Started

### Installation

Before diving in, ensure you have [Bun](https://bun.sh/) installed. Then clone
this repository and install the necessary dependencies:

```shell
bun install
```

Set up your environment variables for API access:

```env
# .env.local
OPENAI_API_KEY="your-api-key"
```

Now you’re ready to unleash K-Ink.

## Usage

run k-ink by passing a message to guide its behavior:

```shell
bun run k-ink -m "Describe your task here"
```

Example:

```shell
bun run k-ink -m "Read a file named 'example.txt' and display its contents."
```

K-Ink interprets your message, uses its built-in tools, and executes the action.
No scripting required—just plain language commands.

---

### Getting Help

Not sure what K-Ink is capable of? Don’t worry—K-Ink is self-aware and can guide
you through its own functionality. Simply ask for help:

```shell
bun run k-ink -m "help"
```

K-Ink will provide a rundown of the tasks it can handle and inspire you to
unleash its full potential.

---

## Built-in Tools

K-Ink comes equipped with powerful tools that form the foundation of its
functionality. Let’s explore them:

### File-Write Tool

The `file-write` tool lets K-Ink create or modify files on your filesystem.
Combine it with the `file-read` tool to build workflows that process and update
data.

#### Example Usage:

```shell
bun run k-ink -m "Write 'Hello, world!' into a file called 'output.txt'."
```

---

### File-Read Tool

The `file-read` tool allows K-Ink to read the contents of a file on your local
filesystem. Use this to retrieve file data and pass it into your workflows.

#### Example Usage:

```shell
bun run k-ink -m "Read the contents of 'example.txt'."
```

---

### Directory-Read Tool

The `directory-read` tool enables K-Ink to list the contents of a directory.
Perfect for inspecting files or preparing automated tasks across multiple files.

#### Example Usage:

```shell
bun run k-ink -m "List all files in the 'src' directory."
```

---

## Extending K-Ink

K-Ink isn’t limited to its built-in tools—you can extend its functionality by
creating new tools dynamically or by defining them directly in your codebase.

### Example: Creating a New Tool

One of the most powerful features of K-Ink is its ability to create new tools
dynamically. You can describe what you need in plain language, and K-Ink will
handle the rest—generating the code, updating the tools index, and integrating
the new functionality seamlessly.

Here’s an example of creating the `directory-read` tool, which lists the
contents of a directory. This is how the tool itself was originally created:

```shell
bun run k-ink -m "\
Read the tools in ./src/lib/langchain/tools and create a new tool called
directory-read that will read the contents of a directory. Update the exported
tools in ./src/lib/langchain/tools/index.ts"
```

Or define it manually by following the structure of the built-in tools. Once
defined, add it to the tools index for easy access:

```typescript
import fileRead from './file-read'
import fileWrite from './file-write'
import directoryRead from './directory-read'
// Add your new tools here

const tools = [fileRead, fileWrite, directoryRead /* , newTool */]

export default tools
```

---

## Why K-Ink?

K-Ink goes beyond being a simple tool—it’s an AI assistant that grows with you.
From file management to creating entirely new workflows, K-Ink empowers you to
offload tedious tasks and focus on the bigger picture. And with its
extensibility, there’s no limit to what you can build.

Ready to see genius in action? Fire up K-Ink and let the chaos begin. 🤖⚙️