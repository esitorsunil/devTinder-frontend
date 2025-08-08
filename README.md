## DevTinder Frontend
 
 ### Project Structure
 - Create a vite+react app structure
 - Remove unneccessary code, start with hello world
 - Install tailwind and daisyui
 - Add Navbar component to app.jsx
 
 ### Router 
 - Install react-router-dom
 - create browserrouter > Routes > route
 - Body Component - Navbar , Outlet , Footer

 ### Connect backend to frontend (cors)
 - LoginPage UI
 - handleLogin using axios fetch from backend
 - CORS - install cors in backend to connect backend and frontend => add middelware with config: set origin, credintials: true
 - whenever making an api call with axios add {withcredintials:true} - useful to add cookies token in browser

 ### Redux Setup
 - Install @reduxjs/toolkit, react-redux
 - Configure appStore => Provider => CreateSlice => add Reducer => Dispatch an action => useSelector subscribe to store
 - Login and see if data coming prperly in store (dispatch)
 - Navbar should update if user login (useSelector)
 - Structure the component folder structure

 ### Redirect to login not authenticated
 - should not access across routes
 - if token is not present , redirect to login page

 ### logout
 - logout (post api)
 - login error handling on invalid credintials

 ### feed
 - get the feed api and store the feed using redux
 - get feed data and display in cards