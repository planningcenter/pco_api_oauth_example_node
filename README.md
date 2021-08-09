# PCO API Wrapper for Node

## Installation

```
yarn add pco_api
```

## Usage

```
const PCOApi = require('pco_api')
```

Once you have an [access_token via oauth](https://developer.planning.center/docs/#/overview/authentication)

```
PCOApi.configureClient({ oauthAccessToken: access_token })
```

Now you are ready to make API calls.

```
pcoClient = PCOApi.getClient()
```

Pass in any valid API path

```
pcoClient.get('/giving/v2/funds')
```

Or use 'dot' notation to specific PCO Apps and vertices

```
pcoClient.People.households.get(1345)
```

## Apps + Resources

Using the dot notation syntax, the pattern is

```
client.App.resource.action()
```

Apps:

- [Calendar](https://developer.planning.center/docs/#/apps/calendar/)
- [Check-Ins](https://developer.planning.center/docs/#/apps/check-ins/)
- [Giving](https://developer.planning.center/docs/#/apps/giving/)
- [Groups](https://developer.planning.center/docs/#/apps/groups/)
- [People](https://developer.planning.center/docs/#/apps/people/)
- [Registrations](https://developer.planning.center/docs/#/apps/registrations/)
- [Services](https://developer.planning.center/docs/#/apps/services/)
- [Webhooks](https://developer.planning.center/docs/#/apps/webhooks/)

## Actions

### get

Returns a single resource, by id

```
pcoClient.Registrations.people.get(1234)
```

### list

Returns a paginated list of the resouce

```
pcoClient.Registrations.people.list()
```

### create

### delete

## Copyright & License

Copyright Ministry Centered Technologies. Licensed MIT.
