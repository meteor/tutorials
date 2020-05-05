if (Meteor.isClient) {
  DiffBox.registerTutorial("simple-todos-svelte", {
    gitHubRepoName: "meteor/simple-todos-svelte",
    patchFilename: "generated/svelte.multi.patch"
  });
}

TutorialRegistry.registerTutorial("svelte", {
  title: "Simple Todos Svelte",
  subtitle: "Learn how to use Meteor and Svelte together",
  tutorialSourceLink: "github.com/meteor/tutorials/content/svelte",
  steps: [
    {
      title: 'Creating an app',
      slug: "creating-an-app",
      template: 'sharedStep01'
    },
    {
      title: 'Templates',
      slug: "templates",
      template: 'svelte-step02'
    },
    {
      title: 'Collections',
      slug: "collections",
      template: 'svelte-step03'
    },
    {
      title: 'Forms and events',
      slug: "forms-and-events",
      template: 'svelte-step04'
    },
    {
      title: 'Update and remove',
      slug: "update-and-remove",
      template: 'svelte-step05'
    },
    {
      title: 'Running on mobile',
      slug: "running-on-mobile",
      template: 'sharedStep06'
    },
    {
      title: 'Filtering Collections',
      slug: "filtering-collections",
      template: 'svelte-step07'
    },
    {
      title: 'Adding user accounts',
      slug: "adding-user-accounts",
      template: 'svelte-step08'
    },
    {
      title: 'Security with methods',
      slug: "security-with-methods",
      template: 'svelte-step09'
    },
    {
      title: 'Publish and subscribe',
      slug: "publish-and-subscribe",
      template: 'svelte-step10'
    },
    {
      title: 'Testing',
      slug: "testing",
      template: 'svelte-step11'
    },
    {
      title: 'Next steps',
      slug: "next-steps",
      template: 'svelte-step12'
    }
  ]
});
