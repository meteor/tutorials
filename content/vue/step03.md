{{#template name="vue-step03"}}

# Storing tasks in a collection

{{> step03CollectionsIntro tutorialName="simple-todos-vue"}}

### 3.3 Using data from a collection inside a Vue component

To use data from a Meteor collection inside a Vue component, we can use a Meteor package called `vue-meteor-tracker`, which allows us to create a "data container" to feed Meteor's reactive data into Vue's component hierarchy.

```bash
meteor npm install --save vue-meteor-tracker
```

In your Vue component, add a meteor object :

```
export default {
  meteor: {
    // Meteor specific options
  }
}
```

{{> DiffBox step="3.4" tutorialName="simple-todos-vue"}}

Add an object for each subscription in a \$subscribe object. The object key is the name of the publication and the value is either an array of parameters or a function returning an array of parameters. These subscription will be stopped when the component is destroyed.

```
export default {
  meteor: {
    $subscribe: {
      // Subscribes to the 'tastk' publication with no parameters
      'tasks': []
    }
  }
}
```

When you make these changes to the code, you'll notice that the tasks that used to be in the todo list have disappeared. That's because our database is currently empty&mdash;we need to insert some tasks!

{{> step03InsertingTasksFromConsole}}

{{/template}}
