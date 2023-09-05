# Use the official Node.js 18 image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Set the command to start the React application in development mode
CMD ["npm", "start"]

# Expose the port for the frontend application
EXPOSE 4181