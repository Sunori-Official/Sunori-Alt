import { useEffect } from "react";
export default function CloseHandler(){
    useEffect(() => {
        const unloadCallback = (event: any) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };
    
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);
}