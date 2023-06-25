# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the React application
RUN npm run build

# Set the environment variable
ENV PORT=3000

# Expose the container port
EXPOSE $PORT

# Define the command to run the application
CMD ["npm", "run", "dev"]