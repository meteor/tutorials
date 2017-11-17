### Setting up Angular for mobile

Angular needs the main document to be ready so it can bootstrap, but different devices have different events for `ready`.

To solve this, we need to change the way we bootstrap our Angular app.
Remove the current bootstrap by removing `ng-app` from the `<body>` tag:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="6.1"

Then add the following code right after `Meteor.isClient`:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="6.2"


> TODO:INCLUDE: sharedStep06 specialContent="angularSpecialPart06"
