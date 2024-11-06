# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application files to the container
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Compile TypeScript code to JavaScript
RUN tsc

# Set the entrypoint to run the Node.js application
ENTRYPOINT ["node", "dist/pizza.js"]

# By default, run the application with no arguments
CMD []
