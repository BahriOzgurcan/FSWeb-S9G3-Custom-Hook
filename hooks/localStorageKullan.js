import { useState,useEffect } from "react";


export const useLocalStorageKullan = (key, initialValue) => {
    const [deger, setDeger] = useState(initialValue);

useEffect(()=> {
    const mode = localStorage.getItem(key);

    if (!mode) {
        localStorage.setItem(key, JSON.stringify(initialValue));
    } else {
        setDeger(JSON.parse(mode))
    };
}, [])
    

    const updateState = (value) => {
        setDeger(value);
        localStorage.setItem(key, JSON.stringify(!deger))
        return value
    }


    return [deger, updateState];
}