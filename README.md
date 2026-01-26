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

  ### Edit Profile
  - form handling with useState
  - save profile using patch to db
  - update in page using store
  - UI with toast notify
  - Reusable component

 ### Get connection (new page)
  - get connection data detch from api
  - create slice and store and dispatch the data from redux
  - display data using useSelector and map it each data in jsx (UI setup)

### Show Request (new page)
  - same like get connection steps, UI (accept, reject)
  - accept/reject post data using axios
  - removeRequest data in store using filter method in array

#### UserCard on Feed
  - Send/ignore the user from the feed (post api)
  - removeUser from store to display new user

### SignUp Page
  - Create a sign up within the login component using conditional rendering
  - Bug fixed of adddata and profile

### Testing
  - Tested the whole app workflow using E2E Testing  

### Razorypay payment
  - Signup and create razorpay acc
  - Payment UI from razorpay docs
  - Update the UI, when the payment is successfull from razorpay docs

### Real time chat using Websocket
  - Chat UI with targetid of the user using useParams make as dynamic url
  