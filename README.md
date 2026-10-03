# secure-login-form-csce-477

A basic HTML/JS frontend and Node.js backend demonstrating dual-layer input validation to prevent common web vulnerabilities like malformed data entry and backend exploitation.

## Features
- **Client-Side Validation:** JavaScript prevents form submission if fields are empty, lack an "@" symbol, or if the password is under 8 characters.
- **Server-Side Validation:** An Express.js backend mirrors these checks to ensure attackers cannot bypass the browser UI.

## How to Run Locally

1. **Install Node.js**: Ensure Node.js is installed on your machine.
2. **Clone the repository**: Download these files to a local folder.
3. **Install Dependencies**: Open your terminal, navigate to the folder, and run:
   ```bash
   npm install express