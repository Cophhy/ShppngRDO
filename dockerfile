# Use the official Node.js image with version 18
FROM node:18.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Expose the port on which the Next.js app runs
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
