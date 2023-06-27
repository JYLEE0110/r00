const HelloWorld = ({product}) => {

    // if(! product){
    //     return<h1>상품이없습니다.</h1>
    // }

    console.log(product)

    // props로 받은 Product가 Null일때 || 연산
    const {pno,pname,price} = product || {pno : -1, pname:'', price:''}


    return ( 
    <div>
        <div>{pno}</div>
        <div>{pname}</div>
        <div>{price}</div>
        <div>
            {price > 3100 ? <h1>비싸요</h1> : <h1>싸요</h1>}
        </div>
    </div> 
    );
}
 
export default HelloWorld;