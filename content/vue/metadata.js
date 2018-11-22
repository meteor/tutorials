if (Meteor.isClient) {
  DiffBox.registerTutorial("simple-todos-vue", {
    gitHubRepoName: "meteor/simple-todos-vue",
    patchFilename: "generated/vue.multi.patch"
  });
}

TutorialRegistry.registerTutorial("vue", {
  title: "Simple Todos Vue",
  subtitle: "Learn how to use Meteor and Vue together",
  tutorialSourceLink: "github.com/meteor/tutorials/content/vue",
  steps: [
    {
      title: "Creating an app",
      slug: "creating-an-app",
      template: "sharedStep01"
    },
    {
      title: 'Components',
      slug: "components",
      template: 'vue-step02'
    },
    {
      title: 'Collections',
      slug: "collections",
      template: 'vue-step03'
    },
    {
      title: 'Forms and events',
      slug: "forms-and-events",
      template: 'vue-step04'
    },
    {
      title: 'Update and remove',
      slug: "update-and-remove",
      template: 'vue-step05'
    },
    {
      title: 'Running on mobile',
      slug: "running-on-mobile",
      template: "sharedStep06"
    },
    {
      title: 'Temporary UI state',
      slug: "temporary-ui-state",
      template: 'vue-step07'
    },
    {
      title: 'Adding user accounts',
      slug: "adding-user-accounts",
      template: 'vue-step08'
    },
    {
      title: 'Security with methods',
      slug: "security-with-methods",
      template: 'vue-step09'
    },
    {
      title: 'Publish and subscribe',
      slug: "publish-and-subscribe",
      template: 'vue-step10'
    },
    {
      title: 'Testing',
      slug: "testing",
      template: 'vue-step11'
    },
    {
      title: 'Next steps',
      slug: "next-steps",
      template: 'vue-step12'
    }
  ]
});
