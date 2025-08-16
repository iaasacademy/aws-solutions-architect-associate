# Use official Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies early (use cache)
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Expose dev server port
EXPOSE 3000

# Start dev server
CMD ["npm", "run", "dev"]
