if (Meteor.isClient) {
  DiffBox.registerTutorial("simple-todos-react", {
    gitHubRepoName: "meteor/simple-todos-react",
    patchFilename: "generated/react.multi.patch"
  });
}

TutorialRegistry.registerTutorial("react", {
  title: "Simple Todos React",
  subtitle: "Learn how to use Meteor and React together",
  tutorialSourceLink: "github.com/meteor/tutorials/content/angular",
  steps: [
    {
      title: "Creating an app",
      slug: "creating-an-app",
      template: "react-step01"
    },
    {
      title: 'Components',
      slug: "components",
      template: 'react-step02'
    },
    {
      title: 'Collections',
      slug: "collections",
      template: 'react-step03'
    },
    {
      title: 'Forms and events',
      slug: "forms-and-events",
      template: 'react-step04'
    },
    {
      title: 'Update and remove',
      slug: "update-and-remove",
      template: 'react-step05'
    },
    {
      title: 'Running on mobile',
      slug: "running-on-mobile",
      template: "sharedStep06"
    },
    {
      title: 'Temporary UI state',
      slug: "temporary-ui-state",
      template: 'react-step07'
    },
    {
      title: 'Adding user accounts',
      slug: "adding-user-accounts",
      template: 'react-step08'
    },
    {
      title: 'Security with methods',
      slug: "security-with-methods",
      template: 'react-step09'
    },
    {
      title: 'Publish and subscribe',
      slug: "publish-and-subscribe",
      template: 'react-step10'
    },
    {
      title: 'Next steps',
      slug: "next-steps",
      template: 'react-step11'
    }
  ]
});

