## Getting Started

Node version: 14.18.0

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Dependencies:
- [`react`]
- [`react-dom`]
- [`next`]
- [`husky`]
- [`axios`]
- [`prop-types`]
- [`axios`]
- [`lodash`]
- [`bluebird`]
- [`eslint`]
- [`eslint-config-next`]
- [`eslint-config-standard`]
- [`eslint-plugin-react`]
- [`eslint-plugin-node`]
- [`eslint-plugin-prettier`]
- [`eslint-plugin-promise`]
- [`eslint-plugin-react-hooks`]
- [`tailwindcss`]
- [`postcss`]
- [`autoprefixer`]
- [`@fontsource/poppins`]
- [`@tailwindcss/line-clamp`]
- [`body-scroll-lock`]
- [`framer-motion`]
- [`html-react-parser`]
- [`keen-slider`]
- [`framer-motion`]
- [`next-export-i18n`]
- [`prettier`]
- [`react-intersection-observer`]
- [`react-reveal`]
- [`tailwind-scrollbar-hide`]

Development dependencies:

- [`serve`]


Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Folder structure

This project uses a folder structure which was advocated by Vadorequest in the [dev.to](https://dev.to) forum. You can read more about the post [here](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472).

The current project folder structure can be summarized in the following terms:

- public: Assets will be placed in the public directory.

- src/modules: Files that are related to the same feature and can be grouped together will be placed within the **modules** folder.

- src/common: The common directory should be used for everything that isn't a module. This is where you will find the **components**, **utils**, **hooks** directory.

- src/layouts: This is where the components that are used across the application such as **navbar**, **footer** will be placed.

- src/pages: **Next.js** directory to place the route files.

- src/styles: Only css files will be placed.

