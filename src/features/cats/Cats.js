import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList"
function Cats() {
  const catPics = useSelector((state) => state.entities)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [])

  console.log(catPics);

  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      {catPics.map((pic) => {return <CatList key={pic.id} picInfo={pic}/>})}
    </div>
  );
}

export default Cats;
