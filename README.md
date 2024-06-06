
# Authentication

This repository contains the authentication module designed to work within a microservice architecture built using NestJS. It provides methods for obtaining JWT (JSON Web Token) authentication tokens and verifying their validity. The module facilitates secure communication and token management, ensuring seamless integration with other microservices.

## Features

- Generate JWT authentication tokens
- Verify the validity of JWT tokens
- Seamless integration with NestJS microservice architecture

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
  - [Generate Token](#generate-token)
  - [Verify Token](#verify-token)
- [Configuration](#configuration)
- [License](#license)
- [Company Information](#company-information)
- [Developer](#developer)

## Getting Started

To get started with this module, clone the repository and follow the setup instructions below.

## Installation

1. **Clone the repository:**

   \`\`\`sh
   git clone https://github.com/your-username/authentication.git
   cd authentication
   \`\`\`

2. **Install dependencies:**

   \`\`\`sh
   npm install
   \`\`\`

3. **Set up environment variables:**

   Create a \`.env\` file in the root directory and add your environment variables. Refer to the \`.env.example\` file for required variables.

## Usage

### Generate Token

To generate a JWT token, use the \`generateToken\` method. Here's an example:

\`\`\`typescript
import { AuthService } from './auth/auth.service';

const authService = new AuthService();
const token = authService.generateToken({ userId: 123, username: 'exampleUser' });
console.log(token);
\`\`\`

### Verify Token

To verify the validity of a JWT token, use the \`verifyToken\` method. Here's an example:

\`\`\`typescript
import { AuthService } from './auth/auth.service';

const authService = new AuthService();
const isValid = authService.verifyToken(token);
console.log(isValid);
\`\`\`

## Configuration

Configure your environment variables in the \`.env\` file. The following variables are required:

- \`JWT_SECRET\` - Secret key used for signing JWT tokens
- \`JWT_EXPIRATION\` - Token expiration time (e.g., '1h' for 1 hour)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Company Information

**AlphaRages**  
A product engineering and digital transformation company based in Bengaluru, specializing in delivering custom software solutions and data-driven insights.

## Developer

**Khakan Ali**  
Director and Chief Technical Officer | Full Stack Engineer Lead  
[Khakan Ali](mailto:khakan.ali@alpharages.com)
