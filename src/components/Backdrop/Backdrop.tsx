import React from 'react';
import './Backdrop.scss'
 interface Props{
     closeModal:()=>void
 }
const Backdrop:React.FC<Props>=({closeModal})=>{
    return(
        <>
            <div className="backdrop" onClick={closeModal}/>
        </>
    )
}
export default Backdrop;