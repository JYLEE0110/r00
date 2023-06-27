
import styled from "styled-components";

/* 프리젠테이션 컴포넌트 */

const BlueDiv = styled.div`
    background-color: blue
`

const Img = styled.img`
width: 100px;
height: 100px;
`

const ProductDetail = ({product}) => {

    const {pno,pname,price,img} = product

    return ( 

        <li>
            <BlueDiv>PNO {pno}</BlueDiv>
            <BlueDiv>NAME {pname}</BlueDiv>
            <div>PNO {price}</div>
            <div><Img src = {require(`../../img/${img}`)}/></div>
            <button>BUY</button>
        </li>

     );
}
 
export default ProductDetail;