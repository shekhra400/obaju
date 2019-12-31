# Use a lighter version of node as a parent image

FROM mhart/alpine-node:8.11.4

# Set the working directory to /
WORKDIR /server

#copy package.json into the container at /server
COPY package*.json /server/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /api
COPY . /server/

# Make port 6000 available to the world outside this container
EXPOSE 6000

# Run the app when the container launches
CMD ["npm", "run", "server"]
