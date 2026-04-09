# CLAUDE.md - Project Guide for Claude Code

## Project Overview

**Anna & Otto - Das Familiencafé** is a full-stack web platform for a German family café business. The project consists of a marketing/informational website and a content management system (CMS) for managing café content, menu items, events, and gallery images.

### Business Context
- **Services**: Family café, shop, consultations and courses for new parents
- **Language**: German (primary language for all UI and content)
- **Target Audience**: Families, parents, and parents-to-be
- **Brand**: Warm, family-friendly design with decorative illustrations

## Architecture

This is a **monorepo** using npm workspaces with two main applications:

```
anna-otto/
├── apps/
│   ├── website/          # Next.js frontend application
│   └── cms/              # Sanity Studio CMS
├── .github/
│   └── workflows/        # CI/CD automation
├── .vscode/             # VS Code settings
└── package.json         # Root workspace configuration
```

### 1. Website Application (`apps/website/`)

**Technology Stack:**
- **Framework**: Next.js 15.0.1 (App Router)
- **React**: 18.3.1
- **TypeScript**: 5.4.5 (strict mode)
- **Styling**: Tailwind CSS 3.4.4 + SCSS modules
- **Icons**: iconoir-react, react-icons
- **Testing**: Jest 29.7.0 + React Testing Library

**Key Directories:**
- `app/` - Next.js App Router pages (page.tsx, not-found.tsx, impressum, datenschutz)
- `components/` - Reusable React components (Button, Card, ExternalLink, Footer, Heading)
- `libs/` - Utility functions and constants
  - `constants.ts` - Design system constants (spacing, icon heights)
  - `metadata.ts` - Shared metadata configuration
  - `sanity/` - Sanity client types integration
- `__tests__/` - Jest test files for components and utilities
- `public/` - Static assets

**Custom Fonts:**
- `eldwin-script` - Used for headings (family-friendly, playful)
- `soleil` - Used for body text (readable, professional)

**Component Patterns:**
- All components use TypeScript with strict typing
- Components export both the component and its Props interface
- CSS Modules + Tailwind for styling
- Test IDs pattern: `{testId}-{component}` (e.g., `test-button`)

**Pages:**
- `/` - Home page with hero sections and service cards
- `/impressum` - Legal information (Impressum)
- `/datenschutz` - Privacy policy (Datenschutzerklärung)
- `/404` - Custom not-found page

### 2. CMS Application (`apps/cms/`)

**Technology Stack:**
- **CMS Platform**: Sanity Studio 3.65.1
- **Project ID**: ksdn393e
- **Workspaces**: Development and Production (selectable via UI)

**Content Schema:**
- `event` - Events/Veranstaltungen (café events, courses, etc.)
- `menu` - Café menu with product categories
- `cakeGallery` - Cake and product gallery images
- Custom fields: image, slug

**Features:**
- Vision tool for GROQ queries (development only)
- Organized desk structure by content type
- Separate datasets for development and production environments

## Development Workflow

### Getting Started

```bash
# Install dependencies
npm install

# Run both apps concurrently
npm run dev

# Run apps individually
npm run dev:website   # Website at http://localhost:3000
npm run dev:cms       # CMS at http://localhost:3333
```

### Building

```bash
# Build both applications
npm run build:website
npm run build:cms
```

### Testing

```bash
# Run tests in watch mode
cd apps/website && npm test

# Run tests in CI mode with coverage
npm run test:ci  # From root (runs website tests)
```

**Test Configuration:**
- Jest with jsdom environment
- Setup file: `jest.setup.js` with @testing-library/jest-dom
- Coverage reports generated for CI
- Tests focus on: component rendering, props, CSS classes, content validation

### Code Quality

**Linting:**
```bash
npm run lint          # Lint all workspaces
npm run eslint        # ESLint only (with auto-fix)
npm run stylelint     # Stylelint only (with auto-fix)
npm run prettier      # Format code with Prettier
```

**Pre-commit Hooks:**
- Husky + lint-staged configuration
- Auto-runs linting on staged files before commit
- Enforces code quality standards

**CI/CD Workflows:**
- `linting.yml` - Runs ESLint/Stylelint on push/PR to main
- `unit-tests.yml` - Runs Jest tests + SonarCloud scan
- `claude.yml` - Claude Code integration (responds to @claude mentions)
- `claude-code-review.yml` - Automated PR reviews

**SonarCloud:**
- Configured in `sonar-project.properties`
- Scans for code quality, test coverage, security issues
- Excludes: test files, node_modules, build artifacts

### Package Manager

- **Required**: npm 10.7.0 (specified in `packageManager` field)
- **Workspaces**: Configured for monorepo management
- All dependencies managed via npm workspaces

## Key Technologies & Tools

| Category | Tools |
|----------|-------|
| **Frontend** | Next.js 15, React 18, TypeScript 5 |
| **Styling** | Tailwind CSS, SCSS, PostCSS |
| **CMS** | Sanity Studio 3 |
| **Testing** | Jest, React Testing Library |
| **Linting** | ESLint, Stylelint, Prettier |
| **Automation** | Husky, lint-staged, concurrently |
| **CI/CD** | GitHub Actions, SonarCloud |
| **Package Manager** | npm 10.7.0 workspaces |

## Code Conventions

### TypeScript
- Strict mode enabled
- All components and utilities fully typed
- No `any` types unless absolutely necessary
- Export interfaces for component props

### Styling
- Tailwind CSS for utility-first styling
- SCSS modules for complex components
- Custom theme colors defined in `tailwind.config.js`
- Responsive design with mobile-first approach

### Testing
- Component tests verify rendering, props, and content
- Test IDs for accessibility and testability
- Consistent test file naming: `ComponentName.test.tsx`
- Mock external dependencies (Sanity client, Next.js features)

### Git Commits
- Conventional commit style preferred
- Pre-commit hooks enforce linting
- Descriptive commit messages

### Component Structure
```typescript
// Example component pattern
import styles from './ComponentName.module.scss';

export interface ComponentNameProps {
  prop1: string;
  prop2?: boolean;
}

export const ComponentName = ({ prop1, prop2 = false }: ComponentNameProps) => {
  return (
    <div className={styles.container} data-testid="componentname-container">
      {/* Component content */}
    </div>
  );
};
```

## Important Notes

### Language Considerations
- All user-facing content is in German
- Code comments and documentation can be in English
- Variable names and function names should be in English
- Content schema and data are in German

### Headless CMS Architecture
- Content is managed separately in Sanity CMS
- Website fetches content via Sanity client
- Two environments: Development and Production
- Content changes require type regeneration: `npm run typegen` in cms workspace

### Responsive Design
- Mobile-first approach
- Desktop and mobile variants for some components (Footer, Heading)
- Tailwind breakpoints for responsive behavior

### Environment Setup
- VS Code recommended with Tailwind CSS IntelliSense
- Auto-import organization on save
- ESLint and Stylelint extensions recommended

## Common Tasks

### Adding a New Component
1. Create component file in `apps/website/components/`
2. Export component and Props interface
3. Add styles using Tailwind or SCSS module
4. Create test file in `apps/website/__tests__/components/`
5. Run tests to verify: `npm test`
6. Run linting: `npm run lint`

### Adding a New Page
1. Create route in `apps/website/app/` using App Router conventions
2. Use `metadata.ts` helper for consistent meta tags
3. Import and use existing components
4. Add responsive design for mobile/desktop
5. Test the page manually in development mode

### Adding New Content Type to CMS
1. Create schema definition in `apps/cms/schemaTypes/`
2. Register in `apps/cms/schemaTypes/index.ts`
3. Add to desk structure if needed
4. Run type generation: `cd apps/cms && npm run typegen`
5. Update website to consume new content type

### Debugging
- Website runs on http://localhost:3000
- CMS Studio runs on http://localhost:3333
- Check console for build/runtime errors
- Use React DevTools for component inspection
- Check network tab for Sanity API calls

### Running Quality Checks Before PR
```bash
# Run all quality checks
npm run lint          # Lint all code
npm run test:ci       # Run tests with coverage
npm run build:website # Ensure build succeeds
npm run build:cms     # Ensure CMS builds
```

## Troubleshooting

### Build Failures
- Ensure npm version is 10.7.0: `npm --version`
- Clear caches: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npx tsc --noEmit`

### Test Failures
- Verify Jest setup: Check `jest.setup.js` and `jest.config.js`
- Ensure test dependencies are installed
- Clear Jest cache: `npx jest --clearCache`

### Linting Errors
- Auto-fix ESLint: `npm run eslint`
- Auto-fix Stylelint: `npm run stylelint`
- Format with Prettier: `npm run prettier`

### Sanity Issues
- Verify Sanity CLI is installed: `npm list sanity`
- Check project ID in `sanity.config.ts`
- Regenerate types: `npm run typegen` in cms workspace

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Project Status

This is an active project with:
- Automated CI/CD via GitHub Actions
- SonarCloud integration for code quality
- Claude Code integration for AI-assisted development
- Regular updates to dependencies and features

When making changes, always:
1. Read existing code to understand patterns
2. Follow established conventions
3. Write tests for new functionality
4. Run linting and tests before committing
5. Ensure builds succeed for both apps
