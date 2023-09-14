# Example Project

Just a simple example on how to use the 'ministry-platform-api-wrapper' package I built. This web application will grab your top 10 users from your Ministry Platform activity log and display them in a table. Please follow the guide below.

## Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari)
- [Node.js](https://nodejs.org/)

### Installing Node.js

1. Visit the official [Node.js website](https://nodejs.org/).
2. Download the version appropriate for your OS.
3. Install Node.js and npm.

## Setting Up and Running the Project

### 1. Install Dependencies

Navigate to the project root:

```bash
npm install
```

### 2. Setup Environment Variables

Fill out the variables in the `.env` file:

```
OAuthClientID={client_id}
OAuthClientSecret={client_secret}
OAuthBaseAddress={oauth discovery url}
ServiceAddress={platform api url}
```

### 3. Start the Application

```bash
npm start
```
Open `http://localhost:3000` to see the web application.

## Contact

Reach me at `jblackman@pureheart.org` with any questions or comments.
