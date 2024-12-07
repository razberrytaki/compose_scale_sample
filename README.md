# Compose Scale Sample

## Description

`compose_scale_sample` is a simple Express.js application designed to demonstrate how to **Dockerize** an Express.js app and **scale** it using **Docker Compose** with **NGINX** as a reverse proxy. The application responds with a "Hello World" message along with a unique UUID to identify each container instance.

## Features

- **Express.js:** Lightweight web framework for Node.js.
- **Docker:** Containerizes the application for consistent environments.
- **Docker Compose:** Orchestrates multiple containers, enabling easy scaling.
- **NGINX:** Acts as a reverse proxy and load balancer to distribute traffic across multiple app instances.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/razberrytaki/compose_scale_sample.git
cd compose_scale_sample
```

### 2. Build and Run with Docker Compose

```bash
docker-compose up --build
```

This command will:

- Build the Express.js application Docker image.
- Start three replicas of the app service.
- Start the NGINX service to load balance requests across app instances.
- Map port 80 on your host to port 80 of the NGINX container.

### 3. Access the Application

Open your web browser and navigate to http://localhost. You should see the "Hello World" message along with a unique UUID for each request.

## Scaling the Application

To scale the number of app instances, modify the replicas value in the docker-compose.yml file under the app service:

```bash
deploy:
  replicas: 5
```

After updating, apply the changes:

```bash
docker-compose up -d --scale app=5
```

## Stopping the Application

To stop all running containers:

```bash
docker-compose down
```

## Customization

- **Environment Variables**: You can modify environment variables in the docker-compose.yml to suit your needs.
- **NGINX Configuration**: Adjust the nginx.conf file to change proxy settings or add SSL support.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [NGINX](https://www.nginx.com/)

## Author

razberrytaki

---

### Additional Notes

- **Docker Compose Deploy Configuration:** The `deploy` key in `docker-compose.yml` is primarily used for Docker Swarm. If you're not using Docker Swarm, scaling can be managed using the `--scale` flag with `docker-compose up`. Adjust accordingly based on your deployment environment.

- **Graceful Shutdown:** In your `server.js`, you're handling the `SIGTERM` signal to gracefully shut down the server. Ensure that your Docker setup allows sending this signal for proper shutdown handling.

- **Production Considerations:**
  - **Environment Variables:** Use a `.env` file to manage environment-specific variables.
  - **Logging:** Implement proper logging mechanisms for better observability.
  - **Security:** Ensure NGINX is configured securely, especially if exposing to the internet (e.g., SSL/TLS).

Feel free to customize the configurations further to match your specific requirements!
