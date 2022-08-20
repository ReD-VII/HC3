// Components
import React from "react"
import { BiMenuAltRight } from "react-icons/bi";




// CSS
import DIVHeader from "./Css.Header"


// IMG
import imgBackground from './img/background.png'
import logo from './img/logo.png'






export default function Header(){
    return(
        <DIVHeader imgUrl={imgBackground}>
            
            {/* Logo */}
            <div className="blocos_header">
                <img src={logo} alt="Charme do serrado" />
            </div>



            <div className="blocos_header"></div>


            {/* Menu */}
            <div className="blocos_header">
                <div>
                    <BiMenuAltRight size={30} color={"white"} className="icon_menu"/>
                </div>
            </div>



            {/* Conteudo Inferior */}
            <div className="blocos_header">

                <p>
                    O Melhor do serrado brasileiro!
                </p>

            </div>
            
        </DIVHeader>
    ) 
}
