# Jarurat-Care Backend project

This is the backend service for the Jarurat-Care project.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Jarurat-Care.git
    ```
2. Navigate to the backend directory:
    ```sh
    cd Jarurat-Care/backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. The server will be running at `http://localhost:3000`.

## API Endpoints

### Authentication

* POST /api/v1/auth/register - Registers a new user
* POST /api/v1/auth/login - Authenticates a user and returns a JWT token

### Resource Management

* POST /api/v1/resource/create - Adds a new resource (Admin Only)
* GET /api/v1/resource/all - Retrieves all available resources
* GET /api/v1/resource/byId/:id - Fetches a specific resource by its ID
* PUT /api/v1/resource/update/:id - Updates an existing resource (Admin Only)
* DELETE /api/v1/resource/delete/:id - Removes a resource (Admin Only)

## Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.