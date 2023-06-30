import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

export const Journey = ({ children }) => {
  const [train, setTrain] = useState([]);
  const [login,setLogin]=useState([]);
  const [bookingtrain, setBookingtrain]= useState('');
  const [updateTrain1,setUpdateTrain]= useState('');
  const [signup,setSignup]=useState('');
  const [search, setSearch] = useState({
    from: "",
    to: "",
    date: "",
    class: "",
  });
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <Context.Provider
      value={{
        train,
        setTrain,
        search,
        setSearch,
        handleNavigate,
        bookingtrain,
        setBookingtrain,
        updateTrain1,
        setUpdateTrain,
        login,
        setLogin,
        signup,
        setSignup,

      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useJourney = () => useContext(Context);
