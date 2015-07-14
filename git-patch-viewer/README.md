# git-patch-viewer

### View component

```html
{{> GitPatch
  repoName="meteor/simple-todos"
  commit="10bdbc7434b913c85c156ae6e27fdbea4b2e27bb"
  fileName="simple-todos.html"
  caption="This is how we can display diffs inside the tutorial."}}
```

### Build plugin

1. Name your file either `asdf.patch` or `asdf.multi.patch`
2. Access data from `GitPatches[sha]`
