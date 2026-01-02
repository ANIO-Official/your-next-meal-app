import { useState } from "react";


export default function useLocalStorage(key, defaultValue){
   //Does the data exist for this key? Yes, return it, otherwise use the default value.
    const storedValue = dataExist()? localStorage.getItem(key) : defaultValue

    //handing an array so it will always need to be parse if it's stored in this specific case.
    //otherwise use the dault value of a empty array
    const [currentData, setCurrentData] = useState( JSON.parse(storedValue))

    function dataExist() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(key)) {
        return true; //key match
      }
    }
    return false; //No key match
  }

  //Takes an id, adds it to the array, 
  const setData = (newData) =>{
    setCurrentData(newData) //update the current data with the new array
    localStorage.setItem(key, JSON.stringify(newData)) //store the updated array
  }

  return [currentData, setData]
}