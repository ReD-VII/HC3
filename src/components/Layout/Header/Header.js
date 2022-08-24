import BoxHeader from "./indexCss"
import background from './img/bg2.png'
import { BiMenuAltRight } from "react-icons/bi";






export default function Header(){
    return(
        <BoxHeader imgUrl={background}>
        
            <div className="box_one_content">
                <div className="box_one_content_mini">
                
                </div>
                <div className="box_one_content_mini"   >
                    <div><BiMenuAltRight size={28} color={"white"}/></div>
                </div>
            </div>

            <div className="box_two_content">



                <p>Cachoeiras 🌵 ☀️ 30°c</p>
                <p style={{
                    fontSize: "2.3rem",
                    textTransform: "uppercase",
                    fontWeight: "600"
                }}>Pirenópolis</p>
                <p style={{
                    marginTop: '-7px',
                    fontSize: "0.8rem",
                    fontWeight: "500",                   
                }}>Venha conhecer o charme do serrado!</p>

                <div><p>vamos!</p></div>
            </div>



        </BoxHeader>
    )
}