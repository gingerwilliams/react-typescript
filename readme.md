    git init
    npm init -y
    tsc --init

# Folder Structure

    |- root

# Dependencies

    React
    Webpack
    Typescript

# HTML Template: HtmlWebpackPlugin

    -   src/index.html
    -   template: dynamic from Webpack config
    -   Where to inject the bundles
        `inject: "body"`
    -   title: dynamic from Webpack config
    `<title><%= htmlWebpackPlugin.options.title %></title>`
    -   version dynamic from Webpack config
    ```
        <script>
            window.appVersion = <%= htmlWebpackPlugin.options.version %>;
        </script>
    ```
    -

# Conflict: Multiple chunks emit assets to the same filename bundle.js (chunks app and vendor)

    -   webpack.config => output
    ```
    output: {
        - filename: "bundle.js",
        + filename: '[name].js'
    }

    - run script `npm run build-dev`

    returns dist > app.js bundle.js vender.js index.html

<!-- ERRORS -->

ERROR in /Users/gingerwilliams/source/tsBoilerplate/src/components/Context.tsx
[tsl] ERROR in /Users/gingerwilliams/source/tsBoilerplate/src/components/Context.tsx(12,24)
TS2339: Property 'Provider' does not exist on type '<T>(defaultValue: T, calculateChangedBits?: (prev: T, next: T) => number) => Context<T>'.

ERROR in /Users/gingerwilliams/source/tsBoilerplate/src/components/Context.tsx
[tsl] ERROR in /Users/gingerwilliams/source/tsBoilerplate/src/components/Context.tsx(14,25)
TS2339: Property 'Provider' does not exist on type '<T>(defaultValue: T, calculateChangedBits?: (prev: T, next: T) => number) => Context<T>'.
