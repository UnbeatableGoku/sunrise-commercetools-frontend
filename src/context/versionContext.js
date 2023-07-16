import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const VersionContext = createContext();

const versionReducer = (state, action) => {
  switch (action.type) {
    case "SET_VERSION":
      return {
        ...state,
        versionId: action.payload,
      };
    default:
      return state;
  }
};
export const VersionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(versionReducer, {
    versionId: localStorage.getItem("versionId"),
  });

  useEffect(() => {
    localStorage.setItem("versionId", state.versionId); // Update the versionId in localStorage
  }, [state.versionId]);

  return (
    <VersionContext.Provider value={{ state, dispatch }}>
      {children}
    </VersionContext.Provider>
  );
};
