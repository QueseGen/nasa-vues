# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Install git so we can clone the repository
RUN apk add --no-cache git

# Clone the repository
RUN git clone https://github.com/QueseGen/nasa-vues .

# Install project dependencies
RUN npm install

#Navigate to views folder
RUN cd views

# Build the Vue.js project
RUN npm run build

# Expose the port used by the application
EXPOSE 8081

# Start the Vue.js server
CMD ["npm", "run", "serve"]


#cd kub
#docker build -t NASA-VUES
#docker run -p 8081:8081 NASA-VUES
