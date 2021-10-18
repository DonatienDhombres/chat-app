import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, database } from '../misc/firebase';

// Initialize ProfileContext, without initial state value
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /*  On va chercher le user dans firebase, puis on setProfile(user) 
        Donc le state profile contient le profile du user             */

    let userRef;

    const authUnsub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const profileData = snap.val();
          const { name, createdAt, avatar } = profileData;
          const data = {
            name,
            createdAt,
            avatar,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }

        setProfile(null);
        setIsLoading(false);
      }
    });
    return () => {
      authUnsub();

      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
