import { useState } from "react";
import { useLocalStorageKullan } from "./localStorageKullan";

export const useGeceModuAc = (initialValue) => {
const [deger, updateState] = useLocalStorageKullan("geceModu", initialValue);



return [deger, updateState];
}