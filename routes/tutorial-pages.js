TUTORIAL_PAGES = {
  id: "0",
  title: "Tutorials",
  route: "tutorials",
  path: "/tutorials",
  pathRedirect: "/install",
  template: "tutorials",
  pages: [
    {
      id: "1",
      title: "Todo App",
      route: "tutorials.blaze",
      path: "/tutorials/blaze",
      pathRedirect: "/tutorials/blaze/creating-an-app",
      ghRepoName: "simple-todos",
      subSidebarType: "sidebarStepsCollapse",
      seoTitlePrefix: "Meteor Tutorial | ",
      subHead: "Build your first Meteor app",
      stepbarHide: true,
      pages: BLAZE_TUT
    },
    {
      id: "2",
      title: "Todo App with Angular",
      route: "tutorials.angular",
      path: "/tutorials/angular",
      pathRedirect: "/tutorials/angular/creating-an-app",
      ghRepoName: "simple-todos-angular",
      subSidebarType: "sidebarStepsCollapse",
      seoTitlePrefix: "Meteor-Angular Tutorial | ",
      subHead: "Integrate Meteor and AngularJS",
      stepbarHide: true,
      pages: ANGULAR_TUT
    }
  ]
}