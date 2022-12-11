"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[267],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={},r="Redux",s={unversionedId:"Fontend/Redux",id:"Fontend/Redux",title:"Redux",description:"Keyword : Redux, Fontend",source:"@site/docs/Fontend/Redux.md",sourceDirName:"Fontend",slug:"/Fontend/Redux",permalink:"/knowledgebase/docs/Fontend/Redux",draft:!1,editUrl:"https://sayanmondal2098.github.io/knowledgebase/docs/docs/Fontend/Redux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Introduction"}},l={},c=[{value:"What is Redux?",id:"what-is-redux",level:2},{value:"Why Should I Use Redux?",id:"why-should-i-use-redux",level:3},{value:"When Should I Use Redux?",id:"when-should-i-use-redux",level:3},{value:"Redux Terms and Concepts",id:"redux-terms-and-concepts",level:2},{value:"State Management",id:"state-management",level:3},{value:"Immutability",id:"immutability",level:3},{value:"Terminology",id:"terminology",level:3},{value:"Actions",id:"actions",level:4},{value:"Reducers",id:"reducers",level:4},{value:"Store",id:"store",level:4},{value:"Dispatch",id:"dispatch",level:4},{value:"Selectors",id:"selectors",level:4},{value:"Redux Application Data Flow",id:"redux-application-data-flow",level:3},{value:"Creating the Redux Store",id:"creating-the-redux-store",level:3},{value:"Rules of Reducers",id:"rules-of-reducers",level:3},{value:"Reducers and Immutable Updates",id:"reducers-and-immutable-updates",level:3},{value:"Writing Async Logic with Thunks",id:"writing-async-logic-with-thunks",level:3},{value:"Detailed Explanation: Thunks and Async Logic",id:"detailed-explanation-thunks-and-async-logic",level:4}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redux"},"Redux"),(0,o.kt)("p",null,"Keyword : Redux, Fontend"),(0,o.kt)("h2",{id:"what-is-redux"},"What is Redux?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Redux is a pattern and library for managing and updating application state, using events called "actions".')," It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion."),(0,o.kt)("h3",{id:"why-should-i-use-redux"},"Why Should I Use Redux?"),(0,o.kt)("p",null,'Redux helps you manage "global" state - state that is needed across many parts of your application.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur"),". Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected."),(0,o.kt)("h3",{id:"when-should-i-use-redux"},"When Should I Use Redux?"),(0,o.kt)("p",null,"Redux is more useful when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have large amounts of application state that are needed in many places in the app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The app state is updated frequently over time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The logic to update that state may be complex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The app has a medium or large-sized codebase, and might be worked on by many people."),(0,o.kt)("h3",{parentName:"li",id:"redux-libraries-and-tools"},"Redux Libraries and Tools"),(0,o.kt)("p",{parentName:"li"},"Redux is a small standalone JS library. However, it is commonly used with several other packages:"),(0,o.kt)("h4",{parentName:"li",id:"react-redux"},"React-Redux"),(0,o.kt)("p",{parentName:"li"},"Redux can integrate with any UI framework, and is most frequently used with React. ",(0,o.kt)("a",{parentName:"p",href:"https://react-redux.js.org/"},(0,o.kt)("strong",{parentName:"a"},"React-Redux"))," is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store."),(0,o.kt)("h4",{parentName:"li",id:"redux-toolkit"},"Redux Toolkit"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org"},(0,o.kt)("strong",{parentName:"a"},"Redux Toolkit"))," is our recommended approach for writing Redux logic. It contains packages and functions that are essential for building a Redux app."),(0,o.kt)("h4",{parentName:"li",id:"redux-devtools-extension"},"Redux DevTools Extension"),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools/tree/main/extension"},(0,o.kt)("strong",{parentName:"a"},"Redux DevTools Extension")),' shows a history of the changes to the state in your Redux store over time. This allows to debug your applications effectively, including using powerful techniques like "time-travel debugging".'))),(0,o.kt)("h2",{id:"redux-terms-and-concepts"},"Redux Terms and Concepts"),(0,o.kt)("h3",{id:"state-management"},"State Management"),(0,o.kt)("p",null,"Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Counter() {\n  // State: a counter value\n  const [counter, setCounter] = useState(0)\n\n  // Action: code that causes an update to the state when something happens\n  const increment = () => {\n    setCounter(prevCounter => prevCounter + 1)\n  }\n\n  // View: the UI definition\n  return (\n    <div>\n      Value: {counter} <button onClick={increment}>Increment</button>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"It is a self-contained app with the following parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"state"),", the source of truth that drives our app;"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"view"),", a declarative description of the UI based on the current state"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"actions"),", the events that occur in the app based on user input, and trigger updates in the state")),(0,o.kt)("p",null,"This is a small example of ",(0,o.kt)("strong",{parentName:"p"},'"one-way data flow"'),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"State describes the condition of the app at a specific point in time"),(0,o.kt)("li",{parentName:"ul"},"The UI is rendered based on that state"),(0,o.kt)("li",{parentName:"ul"},"When something happens (such as a user clicking a button), the state is updated based on what occurred"),(0,o.kt)("li",{parentName:"ul"},"The UI re-renders based on the new state.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png",alt:null})),(0,o.kt)("p",null,"This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"multiple components that need to share and use the same state"),", especially if those components are located in different parts of the application. Sometimes this can be solved by ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/lifting-state-up.html"},'"lifting state up"')," to parent components."),(0,o.kt)("p",null,'One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!'),(0,o.kt)("p",null,"By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability."),(0,o.kt)("p",null,"This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable."),(0,o.kt)("h3",{id:"immutability"},"Immutability"),(0,o.kt)("p",null,'"Mutable" means "changeable". If something is "immutable", it can never be changed.'),(0,o.kt)("p",null,"JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields. If I create an array, I can change the contents as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj = { a: 1, b: 2 }\n// still the same object outside, but the contents have changed\nobj.b = 3\n\nconst arr = ['a', 'b']\n// In the same way, we can change the contents of this array\narr.push('c')\narr[1] = 'd'\n")),(0,o.kt)("p",null,"This is called ",(0,o.kt)("em",{parentName:"p"},"mutating")," the object or array. It's the same object or array reference in memory, but now the contents inside the object have changed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In order to update values immutably, your code must make ",(0,o.kt)("em",{parentName:"strong"},"copies")," of existing objects/arrays, and then modify the copies"),"."),(0,o.kt)("p",null,"We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n  a: {\n    // To safely update obj.a.c, we have to copy each piece\n    c: 3\n  },\n  b: 2\n}\n\nconst obj2 = {\n  // copy obj\n  ...obj,\n  // overwrite a\n  a: {\n    // copy obj.a\n    ...obj.a,\n    // overwrite c\n    c: 42\n  }\n}\n\nconst arr = ['a', 'b']\n// Create a new copy of arr, with \"c\" appended to the end\nconst arr2 = arr.concat('c')\n\n// or, we can make a copy of the original array:\nconst arr3 = arr.slice()\n// and mutate the copy:\narr3.push('c')\n")),(0,o.kt)("p",null,"But, ",(0,o.kt)("strong",{parentName:"p"},"Redux expects that all state updates are done immutably"),"."),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("h4",{id:"actions"},"Actions"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"action")," is a plain JavaScript object that has a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field. ",(0,o.kt)("strong",{parentName:"p"},"You can think of an action as an event that describes something that happened in the application"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field should be a string that gives this action a descriptive name, like ",(0,o.kt)("inlineCode",{parentName:"p"},'"todos/todoAdded"'),". We usually write that type string like ",(0,o.kt)("inlineCode",{parentName:"p"},'"domain/eventName"'),", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened."),(0,o.kt)("p",null,"An action object can have other fields with additional information about what happened. By convention, we put that information in a field called ",(0,o.kt)("inlineCode",{parentName:"p"},"payload"),"."),(0,o.kt)("p",null,"A typical action object might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const addTodoAction = {\n  type: 'todos/todoAdded',\n  payload: 'Buy milk'\n}\n")),(0,o.kt)("h4",{id:"reducers"},"Reducers"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"reducer")," is a function that receives the current ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and an ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," object, decides how to update the state if necessary, and returns the new state: ",(0,o.kt)("inlineCode",{parentName:"p"},"(state, action) => newState"),". ",(0,o.kt)("strong",{parentName:"p"},"You can think of a reducer as an event listener which handles events based on the received action (event) type.")),(0,o.kt)("p",null,"Reducers must ",(0,o.kt)("em",{parentName:"p"},"always")," follow some specific rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They should only calculate the new state value based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," arguments"),(0,o.kt)("li",{parentName:"ul"},"They are not allowed to modify the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"state"),". Instead, they must make ",(0,o.kt)("em",{parentName:"li"},"immutable updates"),", by copying the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and making changes to the copied values."),(0,o.kt)("li",{parentName:"ul"},'They must not do any asynchronous logic, calculate random values, or cause other "side effects".\n',(0,o.kt)("strong",{parentName:"li"},"Redux reducers reduce a set of actions (over time) into a single state"),".")),(0,o.kt)("h4",{id:"store"},"Store"),(0,o.kt)("p",null,"The current Redux application state lives in an object called the ",(0,o.kt)("strong",{parentName:"p"},"store")," ."),(0,o.kt)("p",null,"The store is created by passing in a reducer, and has a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"getState")," that returns the current state value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\n\nconst store = configureStore({ reducer: counterReducer })\n\nconsole.log(store.getState())\n// {value: 0}\n")),(0,o.kt)("h4",{id:"dispatch"},"Dispatch"),(0,o.kt)("p",null,"The Redux store has a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),". ",(0,o.kt)("strong",{parentName:"p"},"The only way to update the state is to call ",(0,o.kt)("inlineCode",{parentName:"strong"},"store.dispatch()")," and pass in an action object"),". The store will run its reducer function and save the new state value inside, and we can call ",(0,o.kt)("inlineCode",{parentName:"p"},"getState()")," to retrieve the updated value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch({ type: 'counter/increment' })\n\nconsole.log(store.getState())\n// {value: 1}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'You can think of dispatching actions as "triggering an event"')," in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const increment = () => {\n  return {\n    type: 'counter/increment'\n  }\n}\n\nstore.dispatch(increment())\n\nconsole.log(store.getState())\n// {value: 2}\n")),(0,o.kt)("h4",{id:"selectors"},"Selectors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Selectors")," are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const selectCounterValue = state => state.value\n\nconst currentValue = selectCounterValue(store.getState())\nconsole.log(currentValue)\n// 2\n")),(0,o.kt)("h3",{id:"redux-application-data-flow"},"Redux Application Data Flow"),(0,o.kt)("p",null,"The one way sequence of steps is followed to update the app:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"State describes the condition of the app at a specific point in time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The UI is rendered based on that state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When something happens (such as a user clicking a button), the state is updated based on what occurred")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The UI re-renders based on the new state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Initial setup:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A Redux store is created using a root reducer function"),(0,o.kt)("li",{parentName:"ul"},"The store calls the root reducer once, and saves the return value as its initial ",(0,o.kt)("inlineCode",{parentName:"li"},"state")),(0,o.kt)("li",{parentName:"ul"},"When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Updates:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Something happens in the app, such as a user clicking a button"),(0,o.kt)("li",{parentName:"ul"},"The app code dispatches an action to the Redux store, like ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch({type: 'counter/increment'})")),(0,o.kt)("li",{parentName:"ul"},"The store runs the reducer function again with the previous ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and the current ",(0,o.kt)("inlineCode",{parentName:"li"},"action"),", and saves the return value as the new ",(0,o.kt)("inlineCode",{parentName:"li"},"state")),(0,o.kt)("li",{parentName:"ul"},"The store notifies all parts of the UI that are subscribed that the store has been updated"),(0,o.kt)("li",{parentName:"ul"},"Each UI component that needs data from the store checks to see if the parts of the state they need have changed."),(0,o.kt)("li",{parentName:"ul"},"Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen")))),(0,o.kt)("p",null,"Here's what that data flow looks like visually:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif",alt:"Redux data flow diagram"})),(0,o.kt)("h1",{id:"redux-app-structure"},"Redux App Structure"),(0,o.kt)("p",null,"Look into the following example code :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createSlice } from '@reduxjs/toolkit'\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0,\n  },\n  reducers: {\n    increment: (state) => {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1\n    },\n    decrement: (state) => {\n      state.value -= 1\n    },\n    incrementByAmount: (state, action) => {\n      state.value += action.payload\n    },\n  },\n})\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\n// The function below is called a thunk and allows us to perform async logic. It\n// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This\n// will call the thunk with the `dispatch` function as the first argument. Async\n// code can then be executed and other actions can be dispatched\nexport const incrementAsync = (amount) => (dispatch) => {\n  setTimeout(() => {\n    dispatch(incrementByAmount(amount))\n  }, 1000)\n}\n\n// The function below is called a selector and allows us to select a value from\n// the state. Selectors can also be defined inline where they're used instead of\n// in the slice file. For example: `useSelector((state) => state.counter.value)`\nexport const selectCount = (state) => state.counter.value\n\nexport default counterSlice.reducer\n\n")),(0,o.kt)("p",null,"To start a react project ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/getting-started#selecting-a-template"},"start a new Create-React-App project")," using our Redux template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app redux-essentials-example --template redux\n")),(0,o.kt)("h3",{id:"creating-the-redux-store"},"Creating the Redux Store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\nimport counterReducer from '../features/counter/counterSlice'\n\nexport default configureStore({\n  reducer: {\n    counter: counterReducer\n  }\n})\n")),(0,o.kt)("p",null,"The Redux store is created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"configureStore")," function from Redux Toolkit. ",(0,o.kt)("inlineCode",{parentName:"p"},"configureStore")," requires that we pass in a ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," argument."),(0,o.kt)("p",null,"Our application might be made up of many different features, and each of those features might have its own reducer function. When we call ",(0,o.kt)("inlineCode",{parentName:"p"},"configureStore"),", we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value."),(0,o.kt)("p",null,"We have a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"features/counter/counterSlice.js")," that exports a reducer function for the counter logic. We can import that ",(0,o.kt)("inlineCode",{parentName:"p"},"counterReducer")," function here, and include it when we create the store."),(0,o.kt)("p",null,"When we pass in an object like ",(0,o.kt)("inlineCode",{parentName:"p"},"{counter: counterReducer}"),", that says that we want to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"state.counter")," section of our Redux state object, and that we want the ",(0,o.kt)("inlineCode",{parentName:"p"},"counterReducer")," function to be in charge of deciding if and how to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"state.counter")," section whenever an action is dispatched."),(0,o.kt)("p",null,'Redux allows store setup to be customized with different kinds of plugins ("middleware" and "enhancers"). ',(0,o.kt)("inlineCode",{parentName:"p"},"configureStore")," automatically adds several middleware to the store setup by default to provide a good developer experience, and also sets up the store so that the Redux DevTools Extension can inspect its contents."),(0,o.kt)("h3",{id:"rules-of-reducers"},"Rules of Reducers"),(0,o.kt)("p",null,"We said earlier that reducers must ",(0,o.kt)("strong",{parentName:"p"},"always")," follow some special rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They should only calculate the new state value based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," arguments"),(0,o.kt)("li",{parentName:"ul"},"They are not allowed to modify the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"state"),". Instead, they must make ",(0,o.kt)("em",{parentName:"li"},"immutable updates"),", by copying the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and making changes to the copied values."),(0,o.kt)("li",{parentName:"ul"},'They must not do any asynchronous logic or other "side effects"')),(0,o.kt)("p",null,"But why are these rules important? There are a few different reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it."),(0,o.kt)("li",{parentName:"ul"},"On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it."),(0,o.kt)("li",{parentName:"ul"},'If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn\'t updating when it should!"'),(0,o.kt)("li",{parentName:"ul"},"Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly")),(0,o.kt)("h3",{id:"reducers-and-immutable-updates"},"Reducers and Immutable Updates"),(0,o.kt)("p",null,"There are several reasons why you must not mutate state in Redux:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It causes bugs, such as the UI not updating properly to show the latest values"),(0,o.kt)("li",{parentName:"ul"},"It makes it harder to understand why and how the state has been updated"),(0,o.kt)("li",{parentName:"ul"},"It makes it harder to write tests"),(0,o.kt)("li",{parentName:"ul"},'It breaks the ability to use "time-travel debugging" correctly'),(0,o.kt)("li",{parentName:"ul"},"It goes against the intended spirit and usage patterns for Redux\n",(0,o.kt)("strong",{parentName:"li"},"Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value"),", as if you'd written all the immutable update logic by hand.")),(0,o.kt)("p",null,"So, instead of this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function handwrittenReducer(state, action) {\n  return {\n    ...state,\n    first: {\n      ...state.first,\n      second: {\n        ...state.first.second,\n        [action.someId]: {\n          ...state.first.second[action.someId],\n          fourth: action.someValue\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"We can write like this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function reducerWithImmer(state, action) {\n  state.first.second[action.someId].fourth = action.someValue\n}\n")),(0,o.kt)("h3",{id:"writing-async-logic-with-thunks"},"Writing Async Logic with Thunks"),(0,o.kt)("p",null,"So far, all the logic in our application has been synchronous. Actions are dispatched, the store runs the reducers and calculates the new state, and the dispatch function finishes. But, the JavaScript language has many ways to write code that is asynchronous, and our apps normally have async logic for things like fetching data from an API. We need a place to put that async logic in our Redux apps."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"thunk")," is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An inside thunk function, which gets ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"getState")," as arguments"),(0,o.kt)("li",{parentName:"ul"},"The outside creator function, which creates and returns the thunk function\nThe next function that's exported from ",(0,o.kt)("inlineCode",{parentName:"li"},"counterSlice")," is an example of a thunk action creator:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// The function below is called a thunk and allows us to perform async logic.\n// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.\n// This will call the thunk with the `dispatch` function as the first argument.\n// Async code can then be executed and other actions can be dispatched\nexport const incrementAsync = amount => dispatch => {\n  setTimeout(() => {\n    dispatch(incrementByAmount(amount))\n  }, 1000)\n}\n")),(0,o.kt)("p",null,"We can use them the same way we use a typical Redux action creator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch(incrementAsync(5))\n")),(0,o.kt)("h4",{id:"detailed-explanation-thunks-and-async-logic"},"Detailed Explanation: Thunks and Async Logic"),(0,o.kt)("p",null,"There's one more function in this file, but we'll talk about that in a minute when we look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Counter>")," UI component."),(0,o.kt)("p",null,"We know that we're not allowed to put any kind of async logic in reducers. But, that logic has to live somewhere."),(0,o.kt)("p",null,"If we have access to the Redux store, we could write some async code and call ",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch()")," when we're done:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const store = configureStore({ reducer: counterReducer })setTimeout(() => {  store.dispatch(increment())}, 250)\n")),(0,o.kt)("p",null,"But, in a real Redux app, we're not allowed to import the store into other files, especially in our React components, because it makes that code harder to test and reuse."),(0,o.kt)("p",null,"In addition, we often need to write some async logic that we know will be used with ",(0,o.kt)("em",{parentName:"p"},"some")," store, eventually, but we don't know ",(0,o.kt)("em",{parentName:"p"},"which")," store."),(0,o.kt)("p",null,'The Redux store can be extended with "middleware", which are a kind of add-on or plugin that can add extra abilities. The most common reason to use middleware is to let you write code that can have async logic, but still talk to the store at the same time. They can also modify the store so that we can call ',(0,o.kt)("inlineCode",{parentName:"p"},"dispatch()")," and pass in values that are ",(0,o.kt)("em",{parentName:"p"},"not")," plain action objects, like functions or Promises."),(0,o.kt)("p",null,"The Redux Thunk middleware modifies the store to let you pass functions into ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),". In fact, it's short enough we can paste it here:"),(0,o.kt)("p",null,"We know that we're not allowed to put any kind of async logic in reducers. But, that logic has to live somewhere."),(0,o.kt)("p",null,"If we have access to the Redux store, we could write some async code and call ",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch()")," when we're done:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const store = configureStore({ reducer: counterReducer })setTimeout(() => {  store.dispatch(increment())}, 250)\n")),(0,o.kt)("p",null,"But, in a real Redux app, we're not allowed to import the store into other files, especially in our React components, because it makes that code harder to test and reuse."),(0,o.kt)("p",null,"In addition, we often need to write some async logic that we know will be used with ",(0,o.kt)("em",{parentName:"p"},"some")," store, eventually, but we don't know ",(0,o.kt)("em",{parentName:"p"},"which")," store."),(0,o.kt)("p",null,'The Redux store can be extended with "middleware", which are a kind of add-on or plugin that can add extra abilities. The most common reason to use middleware is to let you write code that can have async logic, but still talk to the store at the same time. They can also modify the store so that we can call ',(0,o.kt)("inlineCode",{parentName:"p"},"dispatch()")," and pass in values that are ",(0,o.kt)("em",{parentName:"p"},"not")," plain action objects, like functions or Promises."),(0,o.kt)("p",null,"The Redux Thunk middleware modifies the store to let you pass functions into ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),". In fact, it's short enough we can paste it here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const thunkMiddleware =\n  ({ dispatch, getState }) =>\n  next =>\n  action => {\n    if (typeof action === 'function') {\n      return action(dispatch, getState)\n    }\n\n    return next(action)\n  }\n")),(0,o.kt)("p",null,'It looks to see if the "action" that was passed into ',(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," is actually a function instead of a plain action object. If it's actually a function, it calls the function, and returns the result. Otherwise, since this must be an action object, it passes the action forward to the store."),(0,o.kt)("p",null,"This gives us a way to write whatever sync or async code we want, while still having access to ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getState"),"."))}d.isMDXComponent=!0}}]);