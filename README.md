<h1 align="center">Mini-paint</h1>

## Task

<a href="https://drive.google.com/file/d/19cb4whI_HUVPzuaPyaj5r6hGotIVnhho/view">Watch task</a>

## How to run the app

**Install**

```sh
npm install
```

**Usage**

```sh
npm start
```

**Build**

```sh
npm build
```

### Database snapshot

![Снимок](https://user-images.githubusercontent.com/101280736/215034298-79b163f6-5d53-4b2a-bd13-6ce90fac7f52.JPG)


## Application stack

- React
- redux
- typescript
- Firebase
- react-router-dom
- react-dotenv
- react-hook-form
- react-spinners-kit
- sweetalert2
- mui/material
- mui/icons-material
- styled-components
- yup
- dayjs
- Prettier
- ESLint
- husky

### Folder structure

```
├── husky
│   ├── _
│   └── pre-commit
├── node_modules
├───public
└───src
│    ├───api
│    ├───components
│    │   ├───containers
│    │   │   ├───Canvas
│    │   │   ├───Gallery
│    │   │   |   └───PaintingContainer
│    │   │   ├───Header
│    │   │   ├───SignIn
│    │   │   ├───SignUp
│    │   │   └───ToolBar
│    │   └───views
│    │   │   ├───Loader
│    │   │   └───toasts
│    ├───constants
│    ├───hooks
│    ├───pages
│    │   ├───GalleryPage
│    │   ├───PaintPage
│    │   ├───SignInPage
│    │   └───SignUpPage
│    ├───router
│    ├───store
│    │   └───slice
│    ├───types
│    └───utils
├── .env
├── .eslintrc
├── .gitignore
├── .prettierrc
├── .craco.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── tsconfig.paths.json
```