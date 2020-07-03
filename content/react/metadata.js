if (Meteor.isClient) {
  DiffBox.registerTutorial("simple-todos-react", {
    gitHubRepoName: "meteor/simple-todos-react",
    patchFilename: "generated/react.multi.patch"
  });
}

TutorialRegistry.registerTutorial("react", {
  title: "Simple Todos React",
  subtitle: "Learn how to use Meteor and React together",
  tutorialSourceLink: "github.com/meteor/tutorials/content/react",
  steps: [
    {
      title: "Creating an app",
      slug: "creating-an-app",
      template: "react-step01"
    },
    {
      title: 'Collections',
      slug: "collections",
      template: 'react-step02'
    },
    {
      title: 'Forms and events',
      slug: "forms-and-events",
      template: 'react-step03'
    },
    {
      title: 'Update and remove',
      slug: "update-and-remove",
      template: 'react-step04'
    },
    {
      title: 'Hooks',
      slug: "hooks",
      template: 'react-step05'
    },
    {
      title: 'Adding user accounts',
      slug: "adding-user-accounts",
      template: "react-step06"
    },
    {
      title: 'Publish and subscribe',
      slug: "publish-and-subscribe",
      template: 'react-step07'
    },
    {
      title: 'Security',
      slug: "security",
      template: 'react-step08'
    },
    {
      title: 'Running on mobile',
      slug: "running-on-mobile",
      template: 'react-step09'
    },
    {
      title: 'Testing',
      slug: "testing",
      template: 'react-step10'
    },
    {
      title: 'Next steps',
      slug: "next-steps",
      template: 'react-step11'
    }
  ]
});
