
import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";

const MyRenderHeader = ({children}) => {
    const location = useLocation();
    const [showHeader , setShowHeader] = useState(false) 
    const [showFooter , setShowFooter] = useState(false)
    useEffect(() => { 
    if(location.pathname === "/thankyou"){
        setShowHeader(false)
        setShowFooter(false)
    }
    else{
        setShowHeader(true)
        setShowFooter(true)
    }
}, [location])
    return(
<>
<div>{showHeader && showFooter && children}</div>
</>
    );
}

export default MyRenderHeader;