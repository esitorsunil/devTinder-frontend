import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, removeRequest } from '../utils/requestSlice';

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.request);

    const reviewRequest = async( status, _id ) => {
      try {
        const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, 
          {withCredentials: true});
          dispatch(removeRequest(_id));
      } catch (error) {
        
      }
    }
    

    const getRequests = async() => {
      try {
        const res = await axios.get(BASE_URL + "/user/request/received", 
          {withCredentials: true});
      console.log(res?.data?.data);
      dispatch(addRequest(res?.data?.data));
      } catch (error) {
        
      }   
    }

    useEffect(() => {
        getRequests();
    }, [])

    if(!requests) return ;
    if(requests.length === 0) return <div className='text-center my-10 text-xl'>No connections found</div>
  
    return (
      <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections Requests</h1>
  
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
  
        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-2/5 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 my-3 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <button 
            className="btn btn-primary mx-4 my-5" 
            onClick={() => reviewRequest("rejected", request._id)}
            >
              Reject
              </button>
            <button 
            onClick={() => reviewRequest("accepted", request._id)} 
            className="btn btn-secondary my-5"
            >
              Accept
            </button>
          </div>
        );
      })}
    </div>
    )
  }

export default Requests