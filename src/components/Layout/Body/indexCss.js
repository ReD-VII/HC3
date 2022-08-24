import styled from "styled-components";

const BoxContent = styled.div`

    display: flex;
    margin-top: 10px;
    width: 100%;
    height: 75px;
    /* background: yellowgreen; */

    .box01{

        width: 40%;
        height: 75px;
        /* background: powderblue; */

    }
    .box01 div{
        position: absolute;
        width: 100px;
        height: 130px;
        margin-top: -75px;
        margin-left: 20px;
        background: linear-gradient(0deg, #ED5C5B 60%, #E88C38);
        box-shadow: 0px 6px 8px 3px #00000023;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px;
        padding: 10px;
        color: white;
    }
    .BsFillTagsFill{
        margin-top: 5px;
    }




    //Box botoes
    .box02{
        display: flex;
        justify-content: space-between;
        width: 60%;
        height: 75px;
        /* background: red; */
        margin: auto;
        margin-top: 10px;
        margin-right: 20px;
    }

    //Botoes
    .box02 div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        border-radius: 10px;
        background: white;
        box-shadow: 0px 2px 6px 2px #00000023;
    }
    .box02 div:nth-child(1){
        /* background: steelblue; */
        background: ${({botao}) => botao == "button1" ? "red" : "blue"} ;
    }
    .box02 div:nth-child(2){
        /* background: steelblue; */
        background: ${({botao}) => botao == "button2" ? "red" : "blue"} ;
    }
    .box02 div:nth-child(3){
        /* background: steelblue; */
        background: ${({botao}) => botao == "button3" ? "red" : "blue"} ;
    }
    .box02 div img{

        height: 70%;
        width: 70%;
    }

`






















export default BoxContent