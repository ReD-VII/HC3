import styled from 'styled-components'

const BoxHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 412px;
    background: #bd7b00;
    border-bottom-right-radius: 60px;





    .box_one_content{
        display: flex;
        width: 100%;
        height: 70px;
        /* background: #aaaaaa; */
    }
    .box_one_content_mini{
        height: 100%;        
    }
    .box_one_content_mini:nth-child(1){
        width: 50%;
        /* background: violet; */
    }
    .box_one_content_mini:nth-child(2){
        display: flex;
        justify-content: flex-end;
        width: 50%;
        /* background: orange; */
    }
    .box_one_content_mini:nth-child(2) div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        margin-top: 20px;
        margin-right: 20px;
        border-radius: 25px;
        background: #d3d3d323;
    }





    .box_two_content{
        width: 100%;
        height: 100px;
        margin-top: 50px;
        /* background: red; */
        text-align: left;
        color: white;
    }
    .box_two_content p{
        margin: 0;
        font-family: poppins;
        font-weight: 600;
        margin-left: 20px;
        font-size: 1.0rem;
    }
    .box_two_content div{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 30px;
        margin: auto;
        margin-top: 150px;
        margin-right: 20px;
        border-radius: 15px;
        background: red;
    }
    .box_two_content div p{
        margin-left: 0;
        text-align: center;
    }   

`
export default BoxHeader



