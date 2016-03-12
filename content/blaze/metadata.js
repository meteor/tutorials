if (Meteor.isClient) {
  DiffBox.registerTutorial("simple-todos", {
    gitHubRepoName: "meteor/simple-todos",
    patchFilename: "generated/blaze.multi.patch"
  });
}

TutorialRegistry.registerTutorial("blaze", {
  title: "Simple Todos",
  subtitle: "Build a simple todo list app with Meteor",
  tutorialSourceLink: "github.com/meteor/tutorials/content/blaze",
  steps: [
    {
      title: 'Creating an app',
      slug: "creating-an-app",
      template: 'blaze-step01'
    },
    {
      title: 'Templates',
      slug: "templates",
      template: 'blaze-step02'
    },
    {
      title: 'Collections',
      slug: "collections",
      template: 'blaze-step03'
    },
    {
      title: 'Forms and events',
      slug: "forms-and-events",
      template: 'blaze-step04'
    },
    {
      title: 'Update and remove',
      slug: "update-and-remove",
      template: 'blaze-step05'
    },
    {
      title: 'Running on mobile',
      slug: "running-on-mobile",
      template: 'sharedStep06'
    },
    {
      title: 'Temporary UI state',
      slug: "temporary-ui-state",
      template: 'blaze-step07'
    },
    {
      title: 'Adding user accounts',
      slug: "adding-user-accounts",
      template: 'blaze-step08'
    },
    {
      title: 'Security with methods',
      slug: "security-with-methods",
      template: 'blaze-step09'
    },
    {
      title: 'Publish and subscribe',
      slug: "publish-and-subscribe",
      template: 'blaze-step10'
    },
    {
      title: 'Next steps',
      slug: "next-steps",
      template: 'blaze-step11'
    }
  ]
});
