# This is VERY SIMPLE Dockerfile for this sample.
# DO NOT USE IT FOR PRODUCTION!

# Use the official Node.js 18 image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY src ./src

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]