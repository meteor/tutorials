{{#template name="angularSpecialPart07"}}
### Setting up Angular for mobile

Angular needs the main document to be ready so it can bootstrap, but different devices have different events for `ready`.

To solve this, we need to change the way we bootstrap our Angular app.
Remove the current bootstrap by removing `ng-app` from the `<body>` tag:

{{> CodeBox view="angular" step="7.1"}}

Then add the following code right after `Meteor.isClient`:

{{> CodeBox view="angular" step="7.2"}}

{{/template}}

{{#template name="angular-step07"}}
{{> sharedStep07 specialContent="angularSpecialPart07"}}
{{/template}}
