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


# What is Git?

-> Git is a local open-source version tracking tool which is used to track changes in our code and manage different versions of our project.

# What is GitHub?

-> GitHub is a cloud platform which is used to host Git repositories and collaborate with team members.

# What is the difference between Git and GitHub?

-> Git is the version control tool which runs on our local machine, while GitHub is a cloud platform where we can store and collaborate on Git repositories.

# What is a repository?

-> A repository is a place where our project files and their version history are stored.

# What is a local repository?

-> A local repository is the Git repository which is stored on our own machine.

# What is a remote repository?

-> A remote repository is the repository stored on a remote platform like GitHub which can be accessed by multiple team members.

# What is a commit?

-> A commit is a snapshot of our staged project changes which is saved in the Git history with a commit message.

# What is a branch?

-> A branch is an isolated track in Git where we can make changes without directly changing the main branch.

# What is the main/master branch?

-> The main or master branch is the primary branch of a repository where the stable code is generally maintained.

# What is a pull request?

-> A pull request is a request to merge changes from one branch into another branch. It also allows team members to review the changes before merging.

# What is merge?

-> Merge is the process of combining changes from one branch into another branch.

# What is clone?

-> Clone is used to download an entire remote repository from GitHub to our local machine for the first time.

# What is pull?

-> Pull is used to download the latest changes from a remote repository and update our local branch with those changes.

# What is push?

-> Push is used to upload our local commits and changes to the remote repository like GitHub.

# What is fetch?

-> Fetch is used to download the latest changes and information from the remote repository without changing our local source code.

# What is checkout/switch?

-> Checkout or switch is used to move from one branch to another branch.

# What is merge conflict?

-> A merge conflict happens when two branches have changes in the same part of a file and Git cannot automatically decide which changes should be kept.

# How do we resolve a merge conflict?

-> To resolve a merge conflict we open the conflicted file, check the conflict indicators like <<<<<<<, ======= and >>>>>>>, keep the required changes, remove the conflict markers, save the file and then use git add and git commit.

# What is .gitignore?

-> .gitignore is a file which contains the files and folders that should not be tracked or committed by Git, like node_modules, logs and .env files.

# What should not be committed to GitHub?

-> We should not commit sensitive information like .env files, API keys, passwords, database credentials, private keys and other secrets. We should also avoid committing folders like node_modules.

# What is the basic Git workflow used in real projects?

-> The normal Git workflow is:

Clone repository -> Create branch -> Make changes -> Commit changes -> Push branch -> Create pull request -> Review -> Merge.

# What does git init do?

-> git init is used to initialize a new Git repository in our local project folder.

# What does git status show?

-> git status shows modified, staged and untracked files in our working directory and also shows the current branch status.

# What does git branch do?

-> git branch is used to view the existing branches in the repository and manage branches.

# What does git checkout -b feature/demo-health-app do?

-> It creates a new branch named feature/demo-health-app and switches to that branch.

# What does git add . do?

-> git add . moves all the new, modified and deleted files into the staging area so they can be included in the next commit.

# What does git commit do?

-> git commit saves the staged changes as a new snapshot in the Git repository history.

# What does git log do?

-> git log shows the commit history of the Git repository.

# What does git diff do?

-> git diff shows the changes made in files that have not yet been committed.

# What does git remote -v do?

-> git remote -v shows the remote repository URLs connected to our local repository.

# What does git push do?

-> git push uploads our local commits to the remote GitHub repository.

# What does git pull do?

-> git pull downloads the latest changes from the remote repository and updates our current local branch.

# What does git fetch do?

-> git fetch downloads the latest changes and metadata from the remote repository without automatically merging them into our current branch.

# What is the difference between git pull and git fetch?

-> git fetch only downloads the latest remote changes without modifying our current working files, while git pull downloads the changes and updates our current branch with those changes.

# What is the difference between cloning and pulling?

-> Cloning is used to download an entire repository to our machine for the first time, while pulling is used to get the latest changes into an already existing local repository.

# What is the /health API?

-> Health api is the endpoint which give response = {status:"ok"}.

# How to build the Docker image?

-> To build docker image we use docker build -t [image name].

# How to run the Docker container?

-> To run container we use docker run -p 8080:8080 [image name].

# What is a Docker registry?

-> Docker registry is a centralized storage and distribution server which is used to store and distribute Docker images.

# What is a repository inside a Docker registry?

-> A repository inside a registry is a named location where Docker images of a particular application are stored with different versions or tags.

# What is an image tag?

-> An image tag is a version label like v1 or latest which is used to identify a particular version of a Docker image.

# Why do we tag Docker images?

-> We tag Docker images to identify different versions of an image and also to specify the registry and repository where the image belongs.

# What is a local Docker registry?

-> A local Docker registry is a Docker registry running on our own machine. In this task we use localhost:5000 as a local version of AWS ECR.

# How to run the local Docker registry?

-> To run the local Docker registry we use docker run -d -p 5000:5000 --name local-registry registry:2.

# How to check whether the local registry is running?

-> To check the local registry we use docker ps.

# How to tag the Docker image for the local registry?

-> To tag the image we use docker tag health-checker localhost:5000/health-checker:v1.

# What does localhost:5000/health-checker:v1 mean?

-> localhost:5000 is the registry address, health-checker is the repository name and v1 is the image tag.

# What does docker push do?

-> docker push uploads the Docker image layers from our local machine to the Docker registry.

# How to push the image to the local registry?

-> To push the image we use docker push localhost:5000/health-checker:v1.

# How to remove the local registry image?

-> To remove the local image we use docker rmi localhost:5000/health-checker:v1.

# What does docker pull do?

-> docker pull downloads a Docker image from a Docker registry to our local machine.

# How to pull the image from the local registry?

-> To pull the image we use docker pull localhost:5000/health-checker:v1.

# How to run the image pulled from the local registry?

-> To run the pulled image we use docker run -d -p 8080:8080 --name health-app-released localhost:5000/health-checker:v1.

# How to test the application after pulling the image?

-> To test the application we use curl http://localhost:8080/health.

# What is the difference between localhost:5000 and AWS ECR?

-> localhost:5000 is our local Docker registry which runs on our own machine and does not require authentication. AWS ECR is a managed AWS Docker registry which uses AWS authentication and access policies to store and distribute Docker images.

# How is localhost:5000 similar to ECR?

-> Both are Docker registries where we can store Docker images and pull them when we need to run the application. Both also use the format registry/repository:tag.

# Why should we avoid blindly using the latest tag in production?

-> latest is a mutable tag and can point to different images when a new image is pushed. This can make it difficult to know exactly which version is running and can make rollback difficult. Using specific version tags helps us identify the exact image version.

# What happens if we push a new image with the same tag?

-> When we push a new image with the same tag, the tag points to the new image. The previous image can become untagged or dangling in the registry if it is no longer referenced by another tag.

# What is the local ECR flow?

-> The local flow is:

Code -> Docker image -> Local registry -> Pull image -> Run container.

# What is the AWS ECR and ECS flow?

-> The AWS flow is:

Code -> Docker image -> ECR repository -> ECS task definition -> ECS service -> Running container.

# How would ECS use the image from ECR?

-> ECS uses the Docker image stored in ECR through the image reference provided in the ECS task definition and runs a container using that image.

# What is an ECS service?

-> ECS service is used to manage and maintain the required number of running tasks based on an ECS task definition.

# Where would we check logs if the container fails in ECS?

-> To check the container logs we can check CloudWatch when ECS container logging is configured.

# Why should we not directly push to the main branch?

-> We should not directly push to the main branch because changes should normally be reviewed and tested through a pull request before they are merged into the main branch.

# What is the usual Git feature flow?

-> The usual Git feature flow is:

git checkout -b feature/name -> Make changes -> git add . -> git commit -m "message" -> git push origin feature/name -> Create Pull Request -> Review -> Merge.

# What should be checked before merging a pull request?

-> Before merging a pull request we should check the code changes, automated tests, build status, merge conflicts and required code reviews.

# How does GitHub help in team collaboration?

-> GitHub helps teams by providing remote repositories, branches, pull requests, code reviews, issue tracking and CI/CD integrations.

# How does GitHub connect with CI/CD pipelines?

-> GitHub can connect with CI/CD pipelines through tools such as GitHub Actions and other automation systems. These systems can automatically test, build and deploy applications when changes are pushed or pull requests are merged.
