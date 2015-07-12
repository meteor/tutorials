# Official Meteor tutorials

This repository contains the content for the official Meteor tutorials at [meteor.com](https://www.meteor.com/tutorials/blaze/creating-an-app).

Feel free to submit a pull request to improve the content!

### Current contents

1. [Blaze tutorial](https://www.meteor.com/tutorials/blaze/creating-an-app): [`/steps/blaze`](https://github.com/meteor/tutorials/tree/master/steps/blaze)
2. [Angular tutorial](https://www.meteor.com/tutorials/angular/creating-an-app): [`/steps/angular`](https://github.com/meteor/tutorials/tree/master/steps/angular)
3. React tutorial, work in progress (not live yet): [`/steps/react`](https://github.com/meteor/tutorials/tree/master/steps/react)

### Tutorial step-by-step code

We also maintain all of the tutorials as step-by-step git repositories here:

1. [Blaze](https://github.com/meteor/simple-todos)
2. [Angular](https://github.com/meteor/simple-todos-angular)
3. [React](https://github.com/meteor/simple-todos-react)

### Tutorial viewer

If you are editing the tutorials, use this simple app to view them: https://github.com/meteor/tutorial-viewer

### To do

1. Improve maintainability of the step-by-step git repositories
2. Generate code snippets automatically from git
3. Improve code snippet context

### Updating Git SHAs for the tutorial

Run the script:
`./scripts/map-commits-to-steps.rb ~/git/simple-todos ~/git/tutorials/routes/commits/blaze.js BLAZE_COMMITS`
