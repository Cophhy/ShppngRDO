# Use the official Node.js image with version 18
FROM node:18.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Install nodemon globally to watch for changes
RUN npm install -g nodemon

# Expose the port on which the Next.js app runs
EXPOSE 3000

# Start the Next.js development server using nodemon
CMD ["npx", "nodemon", "-L", "--watch", ".", "--exec", "npm", "run", "dev"]
