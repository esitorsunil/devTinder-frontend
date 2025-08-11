import React from 'react'

const UserCard = ({user}) => {
  console.log(user)
  const {firstName, lastName, photoUrl, gender, age, about} = user
  return (
    <div className="card card-border bg-base-300 w-96 shadow-sm">
  <figure>
    <img
    className='w-full h-80 object-cover'
      src={photoUrl}

      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {gender && age && <p>{age+ ", " + gender}</p> }
    <p>{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard