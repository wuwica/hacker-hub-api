FROM node:10.16.0-alpine

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install 
RUN npm install react-scripts@3.0.1 -g 

# start app
CMD ["npm", "start"]