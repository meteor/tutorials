if (Meteor.isClient) {
  DiffBox.registerTutorial("simple-todos-angular", {
    gitHubRepoName: "meteor/simple-todos-angular",
    patchFilename: "generated/angular.multi.patch"
  });
}

TutorialRegistry.registerTutorial("angular", {
  title: "Simple Todos Angular",
  subtitle: "Learn how to use Meteor and Angular together",
  tutorialSourceLink: "github.com/meteor/tutorials/content/angular",
  steps: [
    {
      title: 'Creating an app',
      slug: "creating-an-app",
      template: 'angular-step01'
    },
    {
      title: 'Templates',
      slug: "templates",
      template: 'angular-step02'
    },
    {
      title: 'Collections',
      slug: "collections",
      template: 'angular-step03'
    },
    {
      title: 'Forms and events',
      slug: "forms-and-events",
      template: 'angular-step04'
    },
    {
      title: 'Update and remove',
      slug: "update-and-remove",
      template: 'angular-step05'
    },
    {
      title: 'Running on mobile',
      slug: "running-on-mobile",
      template: 'angular-step06'
    },
    {
      title: 'Filtering Collections',
      slug: "filtering-collections",
      template: 'angular-step07'
    },
    {
      title: 'Adding user accounts',
      slug: "adding-user-accounts",
      template: 'angular-step08'
    },
    {
      title: 'Security with methods',
      slug: "security-with-methods",
      template: 'angular-step09'
    },
    {
      title: 'Publish and subscribe',
      slug: "publish-and-subscribe",
      template: 'angular-step10'
    },
    {
      title: 'Next steps',
      slug: "next-steps",
      template: 'angular-step11'
    }
  ]
});
