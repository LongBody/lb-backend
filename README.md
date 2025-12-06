# lb-backend

A Node.js Express backend API for user management.

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lb-backend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Local Development

Start the server:
```bash
node server.js
```

The server will start on `http://localhost:3000`.

### Docker

Build the Docker image:
```bash
docker build -t lb-backend .
```

Run the container:
```bash
docker run -p 3000:3000 lb-backend
```

The server will be available at `http://localhost:3000`.

## API Endpoints

- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Dependencies

- **express** - Web framework for Node.js
- **cors** - Enable CORS for API access