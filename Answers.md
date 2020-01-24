*  What problem does the context API help solve?
	The context API works to remove the props drilling required to pass props to deep children. It does so by creating globally accessible state. 

*  In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions:  actions are objects that have a type and an optional payload. They are dispatched to a reducer to handle state changes

Reducers:  reducers are functions that work to update state and make it available to the components that need it

Store: the store is where state is stored and updated. It is never mutated directly


*  What is the difference between Application state and Component state? When would be a good time to use one over the other?
	
	Application state is state that needs to be available throughout the entire app. Component state is state that only needs to be available to one component/ component branch. 


*  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

	Redux thunk is a middleware that allows us to return promises inside of redux. 


*  What is your favorite state management system you've learned and this sprint? Please explain why!

I definitely prefer the context api because of how easy it is to implement. 

I like the context API for smaller applications because it’s simpler to implement than Redux and already a React feature. However Redux scales better.