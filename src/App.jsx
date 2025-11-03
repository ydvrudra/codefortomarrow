import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts, setLoading } from "./slices/postSlice.jsx";
import Home from "./pages/Home";


const App = () => {
 
const dispatch = useDispatch();
useEffect(() => {
  dispatch(setLoading(true));
  const t = setTimeout(() => {
    dispatch(setLoading(false));
    dispatch(fetchPosts());
  }, 5000);
  return () => clearTimeout(t);
}, [dispatch]);
  return (
   <>
   <Home/>
   </>
  )
};

export default App;