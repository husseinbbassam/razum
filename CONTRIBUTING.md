# Contributing to Razum Website

Thank you for your interest in contributing to the Razum website! We welcome contributions from the community.

## Getting Started

1. **Fork the repository** and clone it locally
2. **Install dependencies**: `npm install`
3. **Create a branch** for your feature or fix: `git checkout -b feature/your-feature-name`
4. **Make your changes** following our coding standards

## Development Workflow

1. **Setup Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your Google Gemini API key to `.env`

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```

## Coding Standards

- **TypeScript**: Use TypeScript for all new code
- **React 19**: Follow React 19 best practices and hooks
- **Styling**: Use Tailwind CSS utility classes
- **Formatting**: Keep code clean and well-organized
- **Components**: Create reusable components when possible

## Commit Guidelines

- Use clear and descriptive commit messages
- Follow conventional commits format:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for code style changes
  - `refactor:` for code refactoring
  - `test:` for adding tests
  - `chore:` for maintenance tasks

## Pull Request Process

1. Ensure your code builds without errors: `npm run build`
2. Update documentation if needed
3. Create a pull request with a clear description of changes
4. Link any related issues in the PR description
5. Wait for review and address any feedback

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Contact us at info@razum.si

Thank you for contributing to Razum! 🚀
