# Redux

Keyword : Redux, Fontend

## What is Redux?

**Redux is a pattern and library for managing and updating application state, using events called "actions".** It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

### Why Should I Use Redux?

Redux helps you manage "global" state - state that is needed across many parts of your application.

**The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur**. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

### When Should I Use Redux?

Redux is more useful when:

-   You have large amounts of application state that are needed in many places in the app
-   The app state is updated frequently over time
-   The logic to update that state may be complex
-   The app has a medium or large-sized codebase, and might be worked on by many people.

	### Redux Libraries and Tools

	Redux is a small standalone JS library. However, it is commonly used with several other packages:

	#### React-Redux

	Redux can integrate with any UI framework, and is most frequently used with React. [**React-Redux**](https://react-redux.js.org/) is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

	#### Redux Toolkit

	[**Redux Toolkit**](https://redux-toolkit.js.org) is our recommended approach for writing Redux logic. It contains packages and functions that are essential for building a Redux app.

	#### Redux DevTools Extension

	The [**Redux DevTools Extension**](https://github.com/reduxjs/redux-devtools/tree/main/extension) shows a history of the changes to the state in your Redux store over time. This allows to debug your applications effectively, including using powerful techniques like "time-travel debugging".

## Redux Terms and Concepts

### State Management

Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

```js
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```

It is a self-contained app with the following parts:

-   The **state**, the source of truth that drives our app;
-   The **view**, a declarative description of the UI based on the current state
-   The **actions**, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of **"one-way data flow"**:

-   State describes the condition of the app at a specific point in time
-   The UI is rendered based on that state
-   When something happens (such as a user clicking a button), the state is updated based on what occurred
-   The UI re-renders based on the new state.

![](https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

**multiple components that need to share and use the same state**, especially if those components are located in different parts of the application. Sometimes this can be solved by ["lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

### Immutability

"Mutable" means "changeable". If something is "immutable", it can never be changed.

JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields. If I create an array, I can change the contents as well:

```js
const obj = { a: 1, b: 2 }
// still the same object outside, but the contents have changed
obj.b = 3

const arr = ['a', 'b']
// In the same way, we can change the contents of this array
arr.push('c')
arr[1] = 'd'
```
This is called _mutating_ the object or array. It's the same object or array reference in memory, but now the contents inside the object have changed.

**In order to update values immutably, your code must make _copies_ of existing objects/arrays, and then modify the copies**.

We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:
```js
const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3
  },
  b: 2
}

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42
  }
}

const arr = ['a', 'b']
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat('c')

// or, we can make a copy of the original array:
const arr3 = arr.slice()
// and mutate the copy:
arr3.push('c')
```

But, **Redux expects that all state updates are done immutably**.

### Terminology

#### Actions

An **action** is a plain JavaScript object that has a `type` field. **You can think of an action as an event that describes something that happened in the application**.

The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like `"domain/eventName"`, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

A typical action object might look like this:

```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```
#### Reducers

A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. **You can think of a reducer as an event listener which handles events based on the received action (event) type.**

Reducers must _always_ follow some specific rules:

-   They should only calculate the new state value based on the `state` and `action` arguments
-   They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
-   They must not do any asynchronous logic, calculate random values, or cause other "side effects".
**Redux reducers reduce a set of actions (over time) into a single state**.

#### Store

The current Redux application state lives in an object called the **store** .

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

#### Dispatch

The Redux store has a method called `dispatch`. **The only way to update the state is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

```js
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

**You can think of dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

```js
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```
#### Selectors

**Selectors** are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```
### Redux Application Data Flow

The one way sequence of steps is followed to update the app:

-   State describes the condition of the app at a specific point in time
-   The UI is rendered based on that state
-   When something happens (such as a user clicking a button), the state is updated based on what occurred
-   The UI re-renders based on the new state

-   Initial setup:
    -   A Redux store is created using a root reducer function
    -   The store calls the root reducer once, and saves the return value as its initial `state`
    -   When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
-   Updates:
    -   Something happens in the app, such as a user clicking a button
    -   The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/increment'})`
    -   The store runs the reducer function again with the previous `state` and the current `action`, and saves the return value as the new `state`
    -   The store notifies all parts of the UI that are subscribed that the store has been updated
    -   Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
    -   Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Here's what that data flow looks like visually:

![Redux data flow diagram](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)


# Redux App Structure

Look into the following example code :
```js
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer

```
To start a react project [start a new Create-React-App project](https://create-react-app.dev/docs/getting-started#selecting-a-template) using our Redux template:

```bash
npx create-react-app redux-essentials-example --template redux
```
### Creating the Redux Store
```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```
The Redux store is created using the `configureStore` function from Redux Toolkit. `configureStore` requires that we pass in a `reducer` argument.

Our application might be made up of many different features, and each of those features might have its own reducer function. When we call `configureStore`, we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value.

We have a file named `features/counter/counterSlice.js` that exports a reducer function for the counter logic. We can import that `counterReducer` function here, and include it when we create the store.

When we pass in an object like `{counter: counterReducer}`, that says that we want to have a `state.counter` section of our Redux state object, and that we want the `counterReducer` function to be in charge of deciding if and how to update the `state.counter` section whenever an action is dispatched.

Redux allows store setup to be customized with different kinds of plugins ("middleware" and "enhancers"). `configureStore` automatically adds several middleware to the store setup by default to provide a good developer experience, and also sets up the store so that the Redux DevTools Extension can inspect its contents.

### Rules of Reducers

We said earlier that reducers must **always** follow some special rules:

-   They should only calculate the new state value based on the `state` and `action` arguments
-   They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
-   They must not do any asynchronous logic or other "side effects"

But why are these rules important? There are a few different reasons:

-   One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it.
-   On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it.
-   If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn't updating when it should!"
-   Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly

### Reducers and Immutable Updates

There are several reasons why you must not mutate state in Redux:

-   It causes bugs, such as the UI not updating properly to show the latest values
-   It makes it harder to understand why and how the state has been updated
-   It makes it harder to write tests
-   It breaks the ability to use "time-travel debugging" correctly
-   It goes against the intended spirit and usage patterns for Redux
**Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value**, as if you'd written all the immutable update logic by hand.

So, instead of this:

```js
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}
```
We can write like this :
```js
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue
}
```
### Writing Async Logic with Thunks

So far, all the logic in our application has been synchronous. Actions are dispatched, the store runs the reducers and calculates the new state, and the dispatch function finishes. But, the JavaScript language has many ways to write code that is asynchronous, and our apps normally have async logic for things like fetching data from an API. We need a place to put that async logic in our Redux apps.

A **thunk** is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:

-   An inside thunk function, which gets `dispatch` and `getState` as arguments
-   The outside creator function, which creates and returns the thunk function
The next function that's exported from `counterSlice` is an example of a thunk action creator:

```js
// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
```
We can use them the same way we use a typical Redux action creator:
```js
store.dispatch(incrementAsync(5))
```
#### Detailed Explanation: Thunks and Async Logic

There's one more function in this file, but we'll talk about that in a minute when we look at the `<Counter>` UI component.

We know that we're not allowed to put any kind of async logic in reducers. But, that logic has to live somewhere.

If we have access to the Redux store, we could write some async code and call `store.dispatch()` when we're done:

```js
const store = configureStore({ reducer: counterReducer })setTimeout(() => {  store.dispatch(increment())}, 250)
```

But, in a real Redux app, we're not allowed to import the store into other files, especially in our React components, because it makes that code harder to test and reuse.

In addition, we often need to write some async logic that we know will be used with _some_ store, eventually, but we don't know _which_ store.

The Redux store can be extended with "middleware", which are a kind of add-on or plugin that can add extra abilities. The most common reason to use middleware is to let you write code that can have async logic, but still talk to the store at the same time. They can also modify the store so that we can call `dispatch()` and pass in values that are _not_ plain action objects, like functions or Promises.

The Redux Thunk middleware modifies the store to let you pass functions into `dispatch`. In fact, it's short enough we can paste it here:

We know that we're not allowed to put any kind of async logic in reducers. But, that logic has to live somewhere.

If we have access to the Redux store, we could write some async code and call `store.dispatch()` when we're done:

```js
const store = configureStore({ reducer: counterReducer })setTimeout(() => {  store.dispatch(increment())}, 250)
```

But, in a real Redux app, we're not allowed to import the store into other files, especially in our React components, because it makes that code harder to test and reuse.

In addition, we often need to write some async logic that we know will be used with _some_ store, eventually, but we don't know _which_ store.

The Redux store can be extended with "middleware", which are a kind of add-on or plugin that can add extra abilities. The most common reason to use middleware is to let you write code that can have async logic, but still talk to the store at the same time. They can also modify the store so that we can call `dispatch()` and pass in values that are _not_ plain action objects, like functions or Promises.

The Redux Thunk middleware modifies the store to let you pass functions into `dispatch`. In fact, it's short enough we can paste it here:

```js
const thunkMiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }
  ```
It looks to see if the "action" that was passed into `dispatch` is actually a function instead of a plain action object. If it's actually a function, it calls the function, and returns the result. Otherwise, since this must be an action object, it passes the action forward to the store.

This gives us a way to write whatever sync or async code we want, while still having access to `dispatch` and `getState`.