### Best Practices for Windsurf Workspace Rules: Investim Landing Page

Your project structure already follows a solid Next.js convention, so I’ll build on it to create Windsurf-specific rules that maximize efficiency for the Investim landing page. These rules will help you leverage Windsurf’s AI (e.g., Cascade) effectively while maintaining compatibility with Vercel and your existing tech stack.

---

#### 1. Project Structure and Organization
Your current structure is well-organized for a Next.js project. Here’s how to maintain and enhance it for Windsurf:

- **Root Directory**: `landing-page`
  - `/app`: Next.js App Router directory for pages and layouts (e.g., `page.tsx` for the homepage).
  - `/components`: Reusable React components (e.g., `HeaderSection.tsx`, `PortfolioChart.tsx`, `CallToActionButton.tsx`) for the Investim landing page features.
  - `/hooks`: Custom hooks for logic (e.g., `useInvestmentData.ts` for portfolio calculations).
  - `/lib`: Utility functions or shared logic (e.g., `formatPortfolioData.ts`).
  - `/node_modules`: Managed by `package.json`, excluded from AI analysis for performance.
  - `/public`: Static assets (e.g., the beach background image from the landing page) for Vercel deployment.
  - `/styles`: CSS or Tailwind-related styles (e.g., global styles or component-specific styles).
  - **Additional Recommended Folders**:
    - `/tests`: Add this for unit tests (e.g., `PortfolioChart.test.tsx`) using Jest and React Testing Library.
    - `/docs`: Include project documentation (`README.md`, `design-specs.md`, `v0-notes.md`) to aid Windsurf’s AI context.

**Why**: Your current structure is Vercel-friendly and Next.js-compliant, but adding `/tests` and `/docs` will help Windsurf’s Cascade understand the Investim project better, especially for multi-file edits like updating the portfolio chart or CTA buttons.

---

#### 2. File and Folder Naming Conventions
Your structure already uses descriptive names (e.g., `page.tsx`, `tailwind.config.js`). Continue this practice and extend it for Windsurf:

- Files: Name files based on their purpose, e.g., `PortfolioChart.tsx` for the pie chart, `RiskSlider.tsx` for the risk slider, `InvestimHero.tsx` for the "Investim pentru viitorul nostru!" section.
- Folders: Keep `/components`, `/hooks`, `/lib`, etc., as they are clear and logical for AI context.
- Avoid generic names—ensure names reflect Investim’s functionality, like `InvestmentPortfolio.tsx` instead of `DataDisplay.tsx`.

**Why**: Descriptive names help Windsurf’s AI provide accurate suggestions, especially for real-time collaboration on the landing page’s visual elements (e.g., pie chart, risk slider, blue buttons).

---

#### 3. Managing AI Interactions with Cascade
Configure Windsurf’s AI to focus on your Investim project, excluding unnecessary files:

- **Use `.codeiumignore`**: Create or update this file at the root to exclude build artifacts and sensitive data. Example:
  ```
  /.next
  /node_modules
  /.env
  /build
  /dist
  ```
  This ensures Cascade focuses on source code in `/app`, `/components`, `/hooks`, etc., rather than transient or sensitive files.
- **Model and Mode Selection**: Use Write mode for generating or refactoring code (e.g., updating `PortfolioChart.tsx` to reflect a 5.5% annual return). Switch to Chat mode for questions like, "How can I optimize `RiskSlider.tsx` for mobile responsiveness in Next.js?" Choose a model (e.g., Claude 3.5) optimized for TypeScript/React.
- **Real-time Context**: Prompt Cascade with specific instructions, e.g., "Update `CallToActionButton.tsx` to match the blue theme in `/docs/design-specs.md`." Use step-by-step prompts if context is lost, referencing key files like `page.tsx` or `/components`.

**Why**: This keeps Windsurf’s AI focused on your landing page’s core features (e.g., investment portfolio visualization, CTA buttons) and integrates with your Next.js/Tailwind setup.

---

#### 4. Tech Stack Integration with Vercel
Your project uses Next.js, TypeScript, Tailwind CSS, and Vercel (as inferred from `next.config.mjs`, `tailwind.config.js`, and `tsconfig.json`). Configure Windsurf to work seamlessly:

- **Vercel Configuration**: Ensure `next.config.mjs` is optimized for Vercel deployment (e.g., SSR for the landing page). Reference it in prompts, e.g., "Optimize `page.tsx` for Vercel SSR."
- **Dependencies**: Your `package.json` and `package-lock.json` likely include `next`, `react`, `typescript`, `tailwindcss`, and testing libraries. Use Cascade to manage dependencies, e.g., "Install `@testing-library/react` and configure it for Next.js."
- **Environment Variables**: Store sensitive data (e.g., API keys for portfolio data) in `.env.local`, excluded via `.codeiumignore`, and reference them in prompts if needed (e.g., "Fetch real-time investment data using this API key").

**Why**: This ensures compatibility with Vercel’s deployment pipeline and leverages Windsurf’s AI for frontend optimization, critical for the Investim landing page.

---

#### 5. Customizing Your Windsurf Experience
Tailor Windsurf to your workflow for the Investim project:

- **Key Bindings and Themes**: Choose VS Code-style key bindings (or Vim if preferred) and a theme with high contrast (e.g., a blue-based theme matching Investim’s branding) for readability during long coding sessions.
- **Extensions**: Install only essential extensions, such as:
  - Tailwind CSS IntelliSense for styling support.
  - ESLint and Prettier for code formatting, consistent with Vercel’s best practices.
  - Vercel Toolkit for deployment insights.
  Avoid overloading Windsurf with unnecessary extensions to maintain performance.
- **Updates**: Regularly update Windsurf via the menu bar or Command Palette to access new features for Next.js/TypeScript development.

**Why**: A personalized setup enhances productivity and aligns with the visual identity of the Investim landing page (e.g., blue buttons, clean design).

---

#### 6. Documentation and Collaboration
Enhance Windsurf’s AI context with documentation:

- **Create `/docs`**: Add:
  - `README.md`: Overview of the Investim project, tech stack (Next.js, Tailwind, Vercel), and Windsurf setup instructions.
  - `design-specs.md`: Details on the landing page design (e.g., blue CTA buttons, 5.5% return pie chart, risk slider), referencing the image you provided earlier.
  - `v0-notes.md`: Notes on the v0 version, including any legacy code or issues to avoid.
- **Prompt with Docs**: Start Cascade prompts with, "Refer to `/docs/design-specs.md` for the Investim branding and update `CallToActionButton.tsx` to match the blue theme."

**Why**: Documentation helps Windsurf’s AI maintain context, especially for multi-file changes like updating the portfolio visualization or CTA buttons across the landing page.

---

#### 7. Testing and Quality Assurance
Ensure quality for the Investim landing page:

- **Test Components**: Add `/tests` (if not already present) and write unit tests for key components (e.g., `PortfolioChart.test.tsx`, `CallToActionButton.test.tsx`) using Jest and React Testing Library, common in Next.js projects.
- **Review AI Output**: Always review Cascade’s suggestions (e.g., for `PortfolioChart.tsx` or `RiskSlider.tsx`) to ensure they align with Investim’s design and functionality. Use "Explain and Fix" if errors occur.
- **Vercel Deployment Testing**: Test locally with `vercel dev` and deploy to Vercel to verify responsiveness (e.g., mobile view of the portfolio chart).

**Why**: This ensures the landing page remains functional and visually appealing, critical for user trust in an investment platform like Investim.

---

#### 8. Version Control and Context Management
Manage context loss in Windsurf with version control:

- **Git Integration**: Use Git for version control, committing frequently (e.g., after each major change to `PortfolioChart.tsx` or `CallToActionButton.tsx`). Initialize a repository in the root directory and push to GitHub or GitLab, integrated with Vercel for CI/CD.
- **Prompt Strategy**: If Cascade loses context, provide step-by-step prompts, e.g., "Update `InvestmentPortfolio.tsx` to include a 3.5% deposit rate card, referencing the design in `/docs/design-specs.md`."
- **Commit Messages**: Use descriptive messages like "Add portfolio chart with 5.5% return" to help Windsurf track changes.

**Why**: This prevents context loss and ensures Vercel deployments remain stable.

---

#### 9. Performance Optimization
Optimize the Investim landing page for Vercel and user experience:

- **Prompt for Optimization**: Ask Cascade, "Optimize `PortfolioChart.tsx` for mobile responsiveness and Vercel SSR," ensuring fast load times for the pie chart and risk slider.
- **Asset Management**: Store images (e.g., the beach background) in `/public` and optimize them with tools like ImageMagick or Vercel’s asset optimization features.
- **Code Splitting**: Use Next.js code splitting for the landing page components (e.g., `page.tsx`, `PortfolioChart.tsx`) to improve performance, guided by Cascade prompts like, "Implement code splitting for `CallToActionButton.tsx`."

**Why**: A fast, responsive landing page builds trust for potential investors visiting Investim.

---

### Summary Table of Windsurf Workspace Rules for Investim (Based on Your Tree)

| **Category**               | **Best Practice**                                                                 | **Details**                                                                 |
|----------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Project Structure**      | Maintain Next.js structure (/app, /components, /hooks, /lib, /public, /styles)    | Add /tests and /docs for AI context, align with Vercel deployment.          |
| **File Naming**            | Use descriptive names (e.g., `PortfolioChart.tsx`, `RiskSlider.tsx`)              | Helps AI understand Investim’s functionality and design.                    |
| **AI Configuration**       | Exclude irrelevant files with `.codeiumignore`, use Write/Chat modes              | Focus AI on `/app`, `/components`, etc., optimize for Next.js/TypeScript.   |
| **Vercel Integration**     | Maintain `next.config.mjs`, use Next.js/TypeScript, manage `.env.local`           | Ensures compatibility with existing tech stack and deployment.              |
| **Customization**          | Set blue-themed UI, install Tailwind/ESLint extensions                           | Matches Investim branding, enhances productivity for frontend tasks.        |
| **Documentation**          | Create `/docs` with design specs, v0 notes, README                               | Aids AI context, supports multi-file edits for landing page updates.        |
| **Testing**                | Write tests in `/tests`, review AI output, test on Vercel                       | Ensures quality for pie chart, risk slider, and CTA buttons.                |
| **Version Control**        | Use Git, commit frequently, prompt step-by-step for context                      | Prevents context loss, supports Vercel CI/CD integration.                   |
| **Performance**            | Optimize for mobile, use code splitting, manage assets in `/public`              | Ensures fast, responsive Investim landing page for users.                   |

---

### Notes on Your Specific Structure
- Your project already includes key files like `next.config.mjs`, `tailwind.config.js`, and `tsconfig.json`, which are ideal for a Next.js/Tailwind project. The `v0-user-next.config.js` suggests customization from a v0 setup—document its purpose in `/docs/v0-notes.md` to aid Windsurf’s AI.
- The `.next` folder (build output) should be excluded via `.codeiumignore` to avoid AI confusion.
- The `components.json` file is unusual—clarify its purpose (e.g., component metadata) in documentation or prompts to ensure Cascade understands it.

If you need help refining any specific part of this setup or want to explore advanced Windsurf features for your Investim project, feel free to ask!