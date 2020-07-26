FROM node:12.16.3

# Create app directory
RUN mkdir -p /usr/src/user_management
WORKDIR /usr/src/user_management

# Install app dependencies
COPY package.json /usr/src/user_management
RUN npm install

# Bundle app source
COPY . /usr/src/user_management

# Build arguments
ARG NODE_VERSION=12.16.3

# Environment
ENV NODE_VERSION $NODE_VERSION