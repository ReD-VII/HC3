import styled from "styled-components";


const DIVHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 488px;
    margin: 0;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    overflow: hidden;
    background: url(${(props)=>props.imgUrl}) no-repeat; 
    background-size: 100% 100%;
    flex-wrap: wrap;
    box-shadow: 0px 0px 8px 4px rgba(22, 22, 22, 0.651);
    /* background: rgba(255, 0, 0, 0.233); */




    /* Blocos Header */
    .blocos_header{
        position: relative;
        height: 100px;
    }



    .blocos_header:nth-child(1){
        width: 30%;
        /* background: purple; */
    }
    .blocos_header:nth-child(1) img{
        width: 180%;
        margin-top: -30px;
        margin-left: -30px;
        /* background: purple; */
    }

















    .blocos_header:nth-child(2){
        width: 40%;
        /* background: red; */
    }










    .blocos_header:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        /* background: white; */
    }
    .blocos_header:nth-child(3) div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin-top: -25px;
        margin-right: -50px;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.322);
        box-shadow: 0px 0px 8px 4px rgba(22, 22, 22, 0.651)
    }
    .blocos_header:nth-child(3) .icon_menu{

    }









    /* CONTEUDO INFERIOR */
    .blocos_header:nth-child(4){
        width: 100%;
        height: calc(100% - 100px);
    }
    .blocos_header:nth-child(4) p{
        width: 60%;
        margin-top: 50px;
        margin-left: 5%;
        /* background: paleturquoise; */
        font-size: 2.6rem;
        font-weight: 700;
        text-align: left;
        color: white;
        text-shadow: -0px 4px 3px rgba(31, 0, 0, 0.637);
        text-transform: uppercase;
    }



    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 40px;
        margin-top: -10px;
        margin-left: 20px;
        border-radius: 10px;
        border: 2px solid white;
        background: #ffffff34;

        font-size: 1.3rem;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.08rem;
        text-shadow: -0px 2px 3px rgba(31, 0, 0, 0.637)

    }









    /* Coments
        &:nth-child(2) */
`








export default DIVHeader