# Database config

You should first create a ".env" file at the root of the project(on the side of .env.example) and make the right configurations for you. The default user/pass for the database connection we use below is, username: "docker" and password: "docker"
Ater that, execute the below command for running the database through docker

```bash
docker run --name database -p 5432:5432 -d -t kartoza/postgis
```

# If the folowing comand is thrown, from the below code

docker: Error response from daemon: Conflict. The container name "/database" is already in use by container "a91aa90223818de9a12b1ddfac61b8a0030a5bace7d8fa396b0cc0aec275ed6a". You have to remove (or rename) that container to be able to reuse that name.See 'docker run --help'

```bash
docker start a91aa90223818de9a12b1ddfac61b8a0030a5bace7d8fa396b0cc0aec275ed6a
```

# Generating database model

```bash
adonis migration:run
```

# Redis Email Configuration

Go to /config/redis.js and setup the right configuration for you

```bash
docker run --name noderedis -p 6379:6379 -d -t redis:alpine
```

# Listening for Kue's jobs

```bash
adonis kue:listen
```

# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
