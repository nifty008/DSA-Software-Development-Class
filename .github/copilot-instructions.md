# Copilot Instructions for this repository

## Project shape

This repository is a small collection of standalone Node.js practice scripts rather than a framework-based application. Each file in the repository root is meant to be run independently and demonstrates a specific JavaScript concept.

- `app.js`: interactive calculator that reads two numbers from stdin and prints addition, subtraction, multiplication, and division results.
- `example.js`: introductory JavaScript examples covering variables, comparisons, conditionals, and console output.
- `practice.js`: minimal script used as a quick learning or smoke-test file.

The repository does not have a package structure, application server, shared library, or multi-file runtime architecture. Treat changes as educational, single-file exercises unless the task explicitly calls for a larger structure.

## Build, test, and lint commands

There is no `package.json`, no test framework, and no lint configuration in this repository.

Use Node.js directly to run a script:

```bash
node app.js
node example.js
node practice.js
```

For a focused verification of a single script, run that exact file with Node and compare the printed output against the behavior being taught in that exercise.

## Key conventions

- Keep examples self-contained. Most files are intentionally standalone and do not share state or dependencies.
- Prefer plain JavaScript and CommonJS syntax (`require(...)`) when editing existing files, because the current code uses that pattern.
- Use `console.log(...)` for output; this repository is built around console-based learning examples rather than UI or API output.
- Preserve the file’s educational intent. Small scripts are usually written to make one concept easy to observe, so avoid refactoring them into a larger app structure unless the task specifically requires it.
- Follow the file’s existing naming and style when making edits. This repo mixes camelCase and snake_case identifiers in examples, so do not normalize unrelated code just for style.

## Working expectations

- Prefer small, surgical changes in the file being edited.
- Do not introduce dependencies, frameworks, or build tooling unless the request clearly requires them.
- When adding new examples, keep them runnable with `node <file>.js` and maintain the repository’s simple, beginner-focused style.
