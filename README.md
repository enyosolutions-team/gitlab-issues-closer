# Issues Cleaner

This script is able to close old issues on GitLab. In each issue closed, a comment will be posted.

## Setup

Firstly, install the npm packages and create a .env file.

```shell
# Install npm packages
yarn install

# Create a .env file from example
cp src/config/.env.example src/config/.env
```

Then, fill the fields found in `src/config/.env`.

```shell
API_URL=https://gitlab.com/api/v4/projects # Gitlab API URL
THRESHOLD=60 # Set the minimum age (in days) to delete the issues
PERSONAL_TOKEN= # Get your personal token from GitLab
PROJECT_ID= # Get your repo ID from your GitLab repository
MESSAGE=This issue has been automatically closed because it is older than $THRESHOLD days # Message posted on the issue
```

Finally, run the script.

```shell
yarn start
```