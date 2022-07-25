# React Performance Example

This is meant to be a minimal application to show the different between setting a state with plan JS objects, comparing the object before setting to state, and using Immutable.js to merge a new value into the old value before setting state.

## Running

```
yarn dev
```

## Summary

-   Avoid passing objects as props when possible
-   When you do pass objects as props, make sure the object source doesn't change unless it needs to
-   Using `_.isEquals` is good if you want to just use JavaScript objects
-   `mergeDeep` is good if you want to use Immutable.JS
