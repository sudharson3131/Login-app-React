# Full-Stack Authentication App

This is a full-stack application that provides a simple login and signup system. It allows users to register with a username and password, then log in using the same credentials. The application consists of two main parts:

- **Frontend**: A React application that handles user interface, form submissions, and interactions with the backend.
- **Backend**: A Node.js Express server with REST APIs for handling user authentication (signup and login).

## Features

- **User Signup**: Allows users to create an account by entering a unique username and password.
- **User Login**: Authenticated users can log in with their registered credentials.
- **SweetAlert2**: Used to show success or error messages during login and signup.

## Tech Stack

- **Frontend**:
  - React
  - Axios (for HTTP requests)
  - Tailwind CSS (for styling)
  - SweetAlert2 (for pop-up messages)
  
- **Backend**:
  - Node.js
  - Express
  - Body-parser (to parse incoming request bodies)
  - CORS (Cross-Origin Resource Sharing)

## Setup Instructions

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Frontend Setup (React)

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/full-stack-authentication.git
    cd full-stack-authentication/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

4. Open your browser and visit `http://localhost:3000` to access the frontend.

### Backend Setup (Node.js and Express)

1. Navigate to the backend directory:
    ```bash
    cd full-stack-authentication/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    node server.js
    ```

4. The backend server will run on `http://localhost:5000`. This will handle the requests from the frontend.


