# omdb-frontend

## Getting started

### Install Node.js

-   Install the latest version of [Node.js](https://nodejs.org/en/download/package-manager/) (18.x+)

### Clone from GitHub

-   Using SSH:

    ```shell
    git clone git@github.com:sergeyd108/omdb-frontend.git
    ```

-   Using HTTPS:
    ```shell
    git clone https://github.com/sergeyd108/omdb-frontend.git
    ```

### Pull in dependencies

-   Fetch required node_modules:
    ```
    cd omdb-frontend
    yarn install
    ```

## Running dev server

-   Run `yarn dev` to enable live reload.

Navigate to `http://localhost:5173/`.

## Running tests

- Run `yarn test` to run all tests.

## Build dist package

-   Run `yarn build` to build for production.

## Configuration

If you want to set custom API URL, edit `.env` file:
```
VITE_API_URL=<API_URL>
```
