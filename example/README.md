# PCO API OAuth Node Example

This is an example Node app for demonstrating how one might build an app to authenticate a PCO user, and then query the API using their credentials.

You can learn more about Planning Center's API [here](https://developer.planning.center/docs).

## Setup

1. Create an app at [api.planningcenteronline.com](https://api.planningcenteronline.com/oauth/applications).

   Set the callback URL to be `http://localhost:50451/oauth/callback`.

2. Install the required packages:

   ```bash
   yarn
   ```

3. Set your Application ID and Secret in the env file:

Rename `.envEXAMPLE` to `.env` and add your ID and secret from step 1 above.

````bash
CLIENT_ID=abcdef0123456789abcdef0123456789abcdef012345789abcdef0123456789a
CLIENT_SECRET=0123456789abcdef0123456789abcdef012345789abcdef0123456789abcdef0


## Running the example app

1. Start the server

from `/example` directory
```bash
 node server
 ```
2. Launch broswer

go to [http://localhost:50451](http://localhost:50451)
````
