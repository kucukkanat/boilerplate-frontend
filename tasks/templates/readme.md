{{componentName}} example

```jsx
{{#reduxEnabled}}
const store = require('./../../store').default;
const { Provider } = require('react-redux');
<Provider store={store}>
{{/reduxEnabled}}

<{{componentName}} />

{{#reduxEnabled}}
</Provider>
{{/reduxEnabled}}
```