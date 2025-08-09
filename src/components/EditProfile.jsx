import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants'
import UserCard from './UserCard'
import { useDispatch } from 'react-redux'

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
    const [gender, setGender] = useState(user.gender)
    const [age, setAge] = useState(user.age)
    const [about, setAbout] = useState(user.about)
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const[showToast, setShowToast] = useState(false);

    const saveProfile = async() => {
        setError('');
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                photoUrl,
                gender,
                age,
                about
            }, {withCredentials: true});
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            },3000);
        } catch (error) {
            setError(error.response.data);
        }
    }


  return (
    <>
    <div className='flex justify-center my-10 mb-10'>
    <div className="card card-border bg-base-300 w-96 me-10">
  <div className="card-body">
    <h2 className="card-title justify-center">Edit Profile</h2>
    <div>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">First Name:</legend>
 <label className="input ">
  <input type="text" 
  value={firstName}
  onChange = {(e) => setFirstName(e.target.value)} 
  required 
  />
</label>
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Last Name:</legend>
 <label className="input">
  <input type="text" 
  value={lastName}
  onChange = {(e) => setLastName(e.target.value)} 
  required 
  />
</label>
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL:</legend>
 <label className="input">
  <input type="text"
  value={photoUrl}
  onChange = {(e) => setPhotoUrl(e.target.value)} 
  required 
  />
</label>
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Age:</legend>
 <label className="input">
  <input type="number" 
  value={age}
  onChange = {(e) => setAge(e.target.value)} 
  required 
  />
</label>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Gender:</legend>
  <div className="dropdown dropdown-bottom">
    <div tabIndex={0} role="button" className="input validator">
      {gender || 'Select Gender'}
    </div>
    <ul
      tabIndex={0}
      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
    >
      <li><a onClick={() => setGender('male')}>male</a></li>
      <li><a onClick={() => setGender('female')}>female</a></li>
      <li><a onClick={() => setGender('others')}>others</a></li>
    </ul>
  </div>
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">About:</legend>
<textarea 
className="textarea" 
value={about}
onChange={(e) => setAbout(e.target.value)}
/>
</fieldset>
    </div>
    
    <div className="card-actions justify-center">
      <button 
      className="btn btn-primary"
      onClick={saveProfile}
      >
        Save Profile
        </button>

    </div>
    </div>
  </div>
  <UserCard user={{firstName,lastName,photoUrl, age, gender, about}}/>
</div>
{showToast && (
    <div className="toast toast-top toast-center">
     <div className="alert alert-success">
     <span>Profile saved successfully.</span>
     </div>
     </div>
)};

</>
  )
}

export default EditProfile