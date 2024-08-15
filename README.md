This is a search stock price web app project where you can input stock symbol and you will get the realtime price result

### Prerequisites

To use the finhub api you need to register or login to [https://finnhub.io/] to get the api key which will be use in api integration

# Overview

The Stock price web app project is built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Chadcn](https://ui.shadcn.com/)

# Quickstart

### Setting up the environment variables

Navigate into your projects directory and get your environment variables ready:

```bash
cd stock-price-web-app/
mv .env.template .env.local
```

### Install dependencies

Use yarn to install all dependencies.

```bash
yarn install
```

### Start developing

You are now ready to start up your project.

```bash
yarn dev
```

### Open the code and start exploring or customizing

Your site is now running at http://localhost:3000

# Finhub api integrations

To enable the integrations you need to add the following to your `.env.local` file:

```bash
NEXT_PUBLIC_FINHUB_KEY=<your-finhub-api-key>
```


## App structure

```
.
└── src
    ├── app
    ├── components
    ├── lib
    └── types
```

### `/app` directory

The app folder contains all Next.js App Router pages and layouts, and takes care of the routing.

### `/components` directory

The components folder contains all reusable components to be use in entire application

### `/lib` **directory**

The lib directory contains all utilities like the Finhub Js client functions, util functions, config, hooks and constants. 

### `/types` directory

Contains global TypeScript type defintions.

# Resources

## Learn more about Next.js

- [Website](https://nextjs.org/)
- [GitHub](https://github.com/vercel/next.js)
- [Documentation](https://nextjs.org/docs)

## Learn more about Chadcn

- [Website](https://ui.shadcn.com/)
- [GitHub](https://github.com/shadcn-ui/ui)
- [Documentation](https://ui.shadcn.com/docs)

