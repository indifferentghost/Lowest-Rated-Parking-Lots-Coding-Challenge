import { createContext, useContext, useState } from "react";

const BusinessContext = createContext({
  businesses: [],
  setBusinesses: () => {},
});

export const useBusiness = () => useContext(BusinessContext);

export function BusinessProvider({ children }) {
  const [businesses, setBusinesses] = useState([]);
  return (
    <BusinessContext.Provider value={{ businesses, setBusinesses }}>
      {children}
    </BusinessContext.Provider>
  );
}
