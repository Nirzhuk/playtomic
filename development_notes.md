#
- Decided to use useSWR because it's a easy implementation to get some fetch toolkit.
- Decided to drop Redux because I didn't have time to prepare a project with Redux, decided to go for useContexts what are the same idea behind.
    - Decided to not use useReducers because we didn't have any data from any api to store, so the idea to have reducers without any state modification will only be used to console log the actions itself.
    - We only needed the Auth Routes to have a good flow in the App and Auth.