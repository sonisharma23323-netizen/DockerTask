# What the /health API does?

-> Health api is the endpoint which give response = {status:"ok"}.

# How the app runs locally without Docker?

-> To run app locally first we need to install dependency use npm install and then we use npm start to run this app.

# What each line in the Dockerfile does?

-> FROM node:24-alpine this line is used to build node image in our virtual machine here we use alpine because it is light weighted linux distribution than ubuntu distribution or slim.

-> WORKDIR /usr/src/app this line is for to give working directory where our application acutally run in the container.

-> COPY package*.json ./ this line is for copy all the package.json files.

-> RUN npm install this line is use for install all the node dependencies for our appliction.

-> COPY . . this line is use for copy our application.

-> EXPOSE 8080 this line is use to assign the port number to our application.

-> CMD ["npm","start"] this line is use for starting application.

# How to build the Docker image?

-> To build docker image we use docker build -t [image name].

# How to run the Docker container?

-> To run container we use docker run -p 8080:8080 [image name].

# How port mapping works in Docker?

-> we can map port while running the container like this docker run -p 8080(this is the port number of our application):8080(this port number is for our container).

# Explain ECR flow?

-> To push our image in ECR we need to connect ECR registry with the our ec2 instance or with our local terminal using ssh key after ECR connected with our terminal we use push command to push our images in ECR.

# How ECS would use this image in a task definition?

-> We pull our image from ECR or any other image registry plateform and run container in ECS.

# What an ECS service would do with this task definition?

-> It is blue print to manage and build container.

# Where we would check logs if the container fails in ECS?

-> To check the container logs we can check from cloud watch.
