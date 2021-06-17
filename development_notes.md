#
- Decided to use useSWR because it's a easy implementation to get some fetch toolkit.
- Decided to drop Redux because I didn't have time to prepare a project with Redux, decided to go for useContexts what are the same idea behind.
    - Decided to not use useReducers because we didn't have any data from any api to store, so the idea to have reducers without any state modification will only be used to console log the actions itself.
    - We only needed the Auth Routes to have a good flow in the App and Auth.




# Redux decisions
- Decied to go for reduxjs/toolkit
- There's not point to use Contributors Module but actually I wanted to write to explain how we will implement.
    - Since the API structure is using uswSWR, uswSWR with Redux is redudant you don't want that.
    - You have all the data or component structure in the page itselfs because it's a very simple app so maybe if the app grows it's a good move to Redux.

