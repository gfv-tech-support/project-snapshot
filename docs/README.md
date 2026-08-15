# GFV Training — Agent Knowledge Base

This directory is the project's persistent knowledge base for agentic
development. It is committed to the repo so it survives across sessions and
environments.

## Read first

**[PROJECT_RULES.md](./PROJECT_RULES.md)** — the source of truth for all
development and design rules. Read it in full before any implementation work.

## Structure

| Folder / File        | Purpose                                                          |
| -------------------- | ---------------------------------------------------------------- |
| `PROJECT_RULES.md`   | The 13 development & design rules. Always read first.            |
| `plans/`             | Saved plan records for future reference and recall.              |
| `chat-history/`      | Conversation summaries — token-saving recall of past decisions.  |
| `learning/`          | Lessons learned and mistakes to avoid repeating.                 |
| `knowledge/`         | Reusable patterns, solutions, and reference material.           |

## How to use

- **Before implementing:** read `PROJECT_RULES.md`.
- **Before designing a feature:** check `knowledge/` for existing patterns
  and `plans/` for prior decisions.
- **After making a mistake:** record it in `learning/` so it is not repeated.
- **After a significant session:** save a short summary to `chat-history/`.
- **When settling on a reusable approach:** document it in `knowledge/`.

Keep entries concise — the goal is to save tokens in future sessions, not
to duplicate the codebase.
