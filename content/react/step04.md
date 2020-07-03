{{#template name="react-step04"}}

Up until now we have only inserted documents into our collection. Let's take a look at how we can update and remove them by interacting with the user interface.

## Step 4.1: Add Checkbox

First, we need to add a `<checkbox>` element to our `Task` component.
 
> Be sure to add the `readOnly` attribute since we are not using `onChange` to update the state.
 
> We also have to force our `checked` prop to a `boolean` since React understands that an `undefined` value as inexistent, therefore causing the component to switch from uncontrolled to a controlled one.

> You are also invited to experient and see how the app behaves for learning purposes.

{{> DiffBox tutorialName="simple-todos-react" step="4.1"}}

Now we can update our task document toggling its state from `checked: false` to `checked: true` and vice-versa.

{{> DiffBox tutorialName="simple-todos-react" step="4.2"}}

## Step 4.2: Add Delete Button

We can remove our task with just a few lines of code.

{{> DiffBox tutorialName="simple-todos-react" step="4.3"}}

## Step 4.3: Add Styling

Our user interface up until this point has looked quite ugly. Let's add some basic styling which will serve as the foundation for a more professional looking app.

First, let's install the `classnames` package which helps us manage conditional styling:

```
npm i classnames
```

{{> DiffBox tutorialName="simple-todos-react" step="4.4"}}

If our task is `checked` then the respective class will be applied to it.

{{> DiffBox tutorialName="simple-todos-react" step="4.5"}}

Let's add proper classes to our parent elements.

{{> DiffBox tutorialName="simple-todos-react" step="4.6"}}

Finally, we add the CSS styling which will normalize and differentiate our checked tasks visually.

> You can learn more about CSS Flexible Box Module [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

{{> DiffBox tutorialName="simple-todos-react" step="4.7"}}

Now we have a proper style foundation, nothing fancy, but we have the right semantics in place.

{{/template}}