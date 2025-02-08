# summary

Retrieve a user profile pic and show as ASCII art.

# description

Every user has a profile pic. This utility retrieves the URL for the profile pic, pulls the pic down and and renders it as ASCII art.

# flags.target-user.summary

Salesforce user name.

# flags.target-user.summary

This is always in the format of an email address, but might not be a real email address.

# examples

- Get the standard profile pic for a given user of a given org.

<%= config.bin %> <%= command.id %> --target-user myusertolookup@myorg.com --target-org myusername or alias
