import React, { createContext, useState } from "react";

const ItemContext = createContext();
const ItemProvider = ({ children }) => {
  const [item, setItem] = useState(0);

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
};
export default ItemContext;
export { ItemProvider };
