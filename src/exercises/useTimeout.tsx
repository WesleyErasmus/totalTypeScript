import { useEffect } from "react";

export const useTimeout = (timerMS: number) => {
//  useEffect(() => {
//     setTimeout(() => {
//         console.log("Done!");
//     }, timerMS)

//     return clearTimeout(timerMS);
//  },[timerMS]);

 useEffect(() => {
    const timeout = setTimeout(() => {
        console.log("Done!");
    }, timerMS)

    return () => {
        clearTimeout(timeout);
    };
 },[timerMS]);
};
