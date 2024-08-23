# To run the application locally

1. Run `npm i` to install npm modules
2. Create a `.env` file with contents from `.env.example`, then fill out required environment variables
3. If on Linux, run 
    ```bash
    export NODE_OPTIONS=--openssl-legacy-provider
    ```
    If on Windows, run: 
    
    ```bash
    set NODE_OPTIONS=--openssl-legacy-provider
    ```
    Source: https://stackoverflow.com/a/75961537
4. Run `npm run start`

# To build and deploy the application

1. `npm run build`
2. `firebase deploy`
