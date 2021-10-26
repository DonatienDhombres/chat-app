import React, { createContext, useContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = database.ref('rooms');

    roomListRef.on('value', snap => {
      const data = transformToArrWithId(snap.val());
      setRooms(data);
    });
    /* ".on" adds a real-time listener */
    /* Chatroom list has a real time subscription */

    return () => {
      roomListRef.off();
    };
  }, []);
  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

/*  useRooms fournit le state rooms. 
    La data vient de firebase, et on ne setRooms que lorsque componentDidMount  */

export const useRooms = () => useContext(RoomsContext);

/*
rooms is an Array of room object :
const rooms= [{
  name: "Test"
  description: "Description"
  createdAt: 1634819985049
  id: "-MmXrJts0GGArBym5TTR"
},
{
  name: "Test2"
  description: "Description2"
  createdAt: 1634895011760
  id: "-MmbKWy6V1oOMoEuQPSO"
}]
*/
