# Step 1: Use the official Node.js image from Docker Hub
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project files to the container
COPY . .

# Step 6: Expose the application port
EXPOSE 3000

# Step 7: Set the command to run the app
CMD ["npm", "run", "dev"]
