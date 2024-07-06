# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the React application
RUN npm run build

# Install a lightweight web server to serve the React application
RUN npm install -g serve

# Expose the port the application will run on
EXPOSE 3000

# Command to serve the React application
CMD ["serve", "-s", "build", "-l", "3000"]