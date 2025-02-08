# summary

Retrieve a user profile pic and show as ASCII art.

# description

Every user has a profile pic. This utility retrieves the URL for the profile pic, pulls the pic down and and renders it as ASCII art.

# flags.target-user.summary

Salesforce user name.

# flags.target-user.description

This is always in the format of an email address, but might not be a real email address.

# flags.api-version.summary

Target API version for the deploy.

# flags.api-version.description

Use this flag to override the default API version with the API version of your package.xml file. The default API version is the latest version supported by the CLI.

# examples

- Get the standard profile pic for a given user of a given org.

<%= config.bin %> <%= command.id %> --target-user myusertolookup@myorg.com --target-org myusername or alias
