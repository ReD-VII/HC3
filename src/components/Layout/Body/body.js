import { BsFillTagsFill } from "react-icons/bs";
import React, {useState, useRef, useEffect}from "react";



import icon0 from './img/icon1.svg'
import icon1 from './img/icon2.svg'
import icon2 from './img/icon3.svg'

import BoxContent from "./indexCss";
export default function Body(){

    const [btnAtive, setBtnAtive] = useState()
    
    useEffect(()=>{
        console.log(btnAtive)
    })



    function btn(event){
        
        setBtnAtive(event.currentTarget.getAttribute('name'))

        // console.log(event.currentTarget.getAttribute('name'))
        console.log(`${btnAtive}`)
        














        // if(e.currentTarget.getAttribute('name') == 'button1'){
        //     refButton1.current.style.backgroundColor = '#c3c3c3'
        //     refButton2.current.style.backgroundColor = '#fff'
        //     refButton3.current.style.backgroundColor = '#fff'
        // }
        // if(e.currentTarget.getAttribute('name') == 'button2'){
        //     refButton1.current.style.backgroundColor = '#fff'
        //     refButton2.current.style.backgroundColor = '#c3c3c3'
        //     refButton3.current.style.backgroundColor = '#fff'
        // }
        // if(e.currentTarget.getAttribute('name') == 'button3'){
        //     refButton1.current.style.backgroundColor = '#fff'
        //     refButton2.current.style.backgroundColor = '#fff'
        //     refButton3.current.style.backgroundColor = '#c3c3c3'
        // }
        
        // console.log(  e.currentTarget.getAttribute('name')  )
        // setBtnAtive(e.currentTarget.getAttribute('name'))
        // refButton.current.style.backgroundColor = '#c3c3c3';
        // console.log(btnAtive)
    }

    
    return(
        <>
            <BoxContent botao={`${btnAtive}`}>
                <div className="box01">
                    <div>
                        <BsFillTagsFill size={25} color={"white"} className='BsFillTagsFill'/>
                        
                        <p style={{
                            marginTop: "-4px",
                            marginBottom: "-10px",
                            fontWeight: "700",
                            fontSize: "1.7rem",
                            color: "#fff",
                        }}>50%</p>
                        <p>Desconto na hospedagem</p>
                    </div>
                </div>
                <div className="box02">
                    <div name="button1" onClick={()=>setBtnAtive('button1')} className="button"><img src={icon0} alt="icon" /></div>



                    <div name="button2" onClick={()=>setBtnAtive('button2')} className="button"><img src={icon1} alt="icon" /></div>
                    <div name="button3" onClick={()=>setBtnAtive('button3')} className="button"><img src={icon2} alt="icon" /></div>
                </div>

            </BoxContent>
        
        </>
    )
}