# Agent Guidelines for Kiogreo Wiki

This document provides essential context for AI coding agents operating in this repository.

---

## Build/Test Commands

```bash
# Development
npm run dev          # Start VitePress dev server (hot reload)
npm run build        # Build documentation site for production
npm run preview      # Preview built site locally
```

**Note**: No test framework or lint commands currently installed.

---

## Project Structure

```
wiki/
├── src/                    # Documentation source (Markdown files)
├── .vitepress/             # VitePress configuration
│   ├── config.mts          # Main config
│   ├── theme.config.mts    # Theme settings
│   └── *.config.mts        # Other configs
├── .opencode/              # OpenCode context system
└── .github/                # GitHub workflows
```

---

## Code Style Guidelines

### Core Philosophy

**Modular, Functional, Maintainable** — If you can't easily test it, refactor it.

### Critical Patterns (USE)

- ✅ Pure functions (same input = same output, no side effects)
- ✅ Immutability (create new data, don't modify)
- ✅ Composition (build complex from simple)
- ✅ Small functions (<50 lines)
- ✅ Explicit dependencies (dependency injection)

### Anti-Patterns (AVOID)

- ❌ Mutation, side effects, deep nesting
- ❌ God modules, global state, large functions

---

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Files | `lowercase-with-dashes.js` | `user-service.js` |
| Functions | `verbPhrases` | `getUser`, `validateEmail` |
| Predicates | `is/has/can` prefix | `isValid`, `hasPermission` |
| Variables | Descriptive names | `userCount` (not `uc`) |
| Constants | `UPPER_SNAKE_CASE` | `MAX_RETRIES` |

---

## Imports & Exports

```typescript
// ✅ Prefer named exports
export function calculateTotal(price: number, tax: number): number {
  return price * (1 + tax);
}

// ✅ Explicit dependency injection
function createUserService(database: Database, logger: Logger) {
  return { getUser: (id) => database.findById('users', id) };
}

// ❌ Avoid hidden dependencies
import db from './database.js'; // Hidden dependency
```

---

## Error Handling

```typescript
// ✅ Explicit error handling with Result pattern
function parseJSON(text: string) {
  try {
    return { success: true, data: JSON.parse(text) };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// ✅ Validate at boundaries, use early returns
function processData(data: Data | null) {
  if (!data) return { success: false, error: 'No data provided' };
  if (!isValid(data)) return { success: false, error: 'Invalid data' };
  return { success: true, data: transform(data) };
}
```

---

## TypeScript Guidelines

```json
// tsconfig.json
{
  "module": "nodenext",           // ES modules
  "forceConsistentCasingInFileNames": true,
  "allowImportingTsExtensions": true,
  "noEmit": true
}
```

- Use strict type checking, prefer explicit types over `any`
- Use `nodenext` module resolution for ES modules

---

## Testing Approach

**Note**: No test framework currently installed. When tests are added:

### AAA Pattern

```typescript
test('calculateTotal returns sum', () => {
  // Arrange
  const items = [{ price: 10 }, { price: 20 }];
  // Act
  const result = calculateTotal(items);
  // Assert
  expect(result).toBe(30);
});
```

### Coverage Goals

- **Critical**: 100% (business logic)
- **High**: 90%+ (public APIs)
- **Medium**: 80%+ (utilities)

---

## Documentation Standards

```typescript
// ✅ Document WHY, not WHAT
/**
 * Calculate total with tax
 * @param price - Base price
 * @param taxRate - Tax rate (0-1)
 * @returns Total with tax
 */
function calculateTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}
```

### Document / Don't Document

- ✅ WHY decisions, complex logic, public APIs
- ❌ Obvious code, what code does

---

## Golden Rules

1. **If you can't easily test it, refactor it**
2. **If users ask the same question twice, document it**
3. **Explain WHY, not WHAT**
4. **Keep functions under 50 lines**
5. **Explicit over implicit**

---

## Context Files

This project uses an OpenCode context system:

- `.opencode/context/core/standards/code-quality.md` — Code patterns
- `.opencode/context/core/standards/test-coverage.md` — Testing standards
- `.opencode/context/core/standards/documentation.md` — Documentation guidelines
- `.opencode/context/core/workflows/code-review.md` — Review checklist