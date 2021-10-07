import React, { createContext, useState, useContext } from 'react';

// Initialize ProfileContext, without initial state value
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile] = useState(false);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
