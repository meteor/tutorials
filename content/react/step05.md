In this step we will store some state using React Hooks.

## Step 5.1: Add State Hook

First we need to import the `useState` function from the React library. Afterwards we initialize the hook with `false`.

The `useState` function returns an array pair, where the first element is our value, and the second is a setter function. Hence the _array destructuring_.

Bear in mind that the names used for the constants do not belong to the React API, you can name them whatever you like.

{{> DiffBox tutorialName="simple-todos-react" step="5.1"}}

You can read more about the `useState` hook [here](https://reactjs.org/docs/hooks-state.html).

## Step 5.2: Add Filtering Checkbox

This is straightforward, but since it quite didn't look right we made some improvements to our styling as well. 

> Remember, we use the `Boolean` cast in case we have `undefined` values. We also use the `readOnly` attribute since we are not using `onChange`.

{{> DiffBox tutorialName="simple-todos-react" step="5.2"}}

## Step 5.3: Filter Tasks

Meteor allows you to leverage all Node.js' ecosystem, including a well-known library called Lodash. This library helps us write code in a more declarative manner.

Not strictly necessary in this case, but it is a good idea for us to import only used functions for larger projects since not everything needs to be included in the final bundle files.

So, for simplicity we use `_` to namespace all of Lodash's functions.

Now, if the user has selected the `checkbox` to hide completed tasks, we will include our `checked: false` clause to the query.

{{> DiffBox tutorialName="simple-todos-react" step="5.3"}}

## Step 5.4: Count Incomplete Tasks

We can count our incomplete tasks quite simply with the help of the cursor method `count()`.

{{> DiffBox tutorialName="simple-todos-react" step="5.4"}}

## Step 5.5: Render Count

Finally we just modify our header to display the render count.

{{> DiffBox tutorialName="simple-todos-react" step="5.5"}}