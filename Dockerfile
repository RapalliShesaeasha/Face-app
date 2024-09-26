# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application (if needed)
RUN npm run build --if-present

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD [ "npm", "start" ]
