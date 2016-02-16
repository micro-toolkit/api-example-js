# API

This API is a example on how to use the [micro toolkit api generators](https://github.com/micro-toolkit/api-generator-js) to build a facade API that connects to micro toolkit microservices instances.

## Project structure

```
-- api-example-js
   |- configs -> web app configuration provided by convict module
      |- schema.js -> defines the configuration schema used by convict
      |- development.json -> development specific configurations, controlled by NODE_ENV
      |- test.json -> test specific configurations, controlled by NODE_ENV
   |- initializers-> module that will load all the modules that need initialization when app starts
   |- middlewares -> contains all custom middlewares used on the application
   |- config.js   -> configuration module loader
   |- index.js    -> entry point script for the application
   |- logger.js   -> logger module loader, create an abstraction of the logger used on the application
   |- routes.js   -> API specific routes declaration
```
## Running the API

Execute the following commands to get API running.

**Install API module**

    $ npm install

**Start API**

    $ npm start

    > api-example-js@1.0.0 start /dev/api-example-js
    > node index.js

    2016-02-15 20:47:34 | API::INFO - Loading API...
    2016-02-15 20:47:34 | API::METADATA::INFO - Loading API Models...
    2016-02-15 20:47:34 | API::METADATA::LOADER::TRACE - version 'v1' model 'task' metadata {"properties":["id","createdAt","updatedAt","title","completed","userId"],"relations":[{"name":"user","type":"resource","version":"v1","model":"user","parent":"task","modelFk":"userId"}],"actions":["list","get","create","update","remove"],"version":"v1","modelName":"task"}
    2016-02-15 20:47:34 | API::METADATA::INFO - Model: {"properties":["id","createdAt","updatedAt","title","completed","userId"],"relations":[{"name":"user","type":"resource","version":"v1","model":"user","parent":"task","modelFk":"userId"}],"actions":["list","get","create","update","remove"],"version":"v1","modelName":"task"}
    2016-02-15 20:47:34 | API::METADATA::INFO - Mount route GET /v1/tasks
    2016-02-15 20:47:34 | API::METADATA::INFO - Mount route GET /v1/tasks/:id
    2016-02-15 20:47:34 | API::METADATA::INFO - Mount route POST /v1/tasks
    2016-02-15 20:47:34 | API::METADATA::INFO - Mount route PUT /v1/tasks/:id
    2016-02-15 20:47:34 | API::METADATA::INFO - Mount route DELETE /v1/tasks/:id
    2016-02-15 20:47:34 | API::METADATA::LOADER::TRACE - version 'v1' model 'user' metadata {"properties":["id","name","email","avatarUrl"],"relations":[{"name":"tasks","type":"collection","version":"v1","model":"task","parent":"user","modelFk":"userId"}],"actions":["get"],"version":"v1","modelName":"user"}
    2016-02-15 20:47:34 | API::METADATA::INFO - Model: {"properties":["id","name","email","avatarUrl"],"relations":[{"name":"tasks","type":"collection","version":"v1","model":"task","parent":"user","modelFk":"userId"}],"actions":["get"],"version":"v1","modelName":"user"}
    2016-02-15 20:47:34 | API::METADATA::INFO - Mount route GET /v1/users/:id
    2016-02-15 20:47:34 | API::METADATA::INFO - Mount route GET /v1/users/:id/tasks
    2016-02-15 20:47:34 | API::INFO - Server running on port 8081

**Generate a user token for the API**

The token is valid for the next 24 hours.

    $ node bin/generate_token.js
    API Token (valid for 24 hours):
    eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy8xIiwiaXNzIjoiaHR0cDovL2FwcC5jb20iLCJzY29wZSI6Im1lLGFkbWluIiwidXNlcklkIjoiMSIsInRlbmFudElkIjoiMSIsImlhdCI6MTQ1NTYzMDYzNywiZXhwIjoxNDU1NzE3MDM3fQ.sGNw7MS8bKH5YBrZLGQTaZLjSdVNLlaRbncBB-c8icY

**Access the API**

    $ curl http://localhost:8081?token=your_generated_token
    {"status":"API is running properly..."}
