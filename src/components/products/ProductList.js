import ProductDetail from "./ProductDetail";

/* 컨테이너형 컴포넌트 */
const ProductList = () => {

    const products = [
        {
            pno: 1,
            pname: '상품1',
            price: 3000,
            img : `c01.jpg`
        },
        {
            pno: 2,
            pname: '상품2',
            price: 3100,
            img : `c02.jpg`
        },
        {
            pno: 3,
            pname: '상품3',
            price: 3200,
            img : `c03.jpg`
        },
        {
            pno: 4,
            pname: '상품4',
            price: 3100,
            img : `c04.jpg`
        },
        {
            pno: 5,
            pname: '상품5',
            price: 4000,
            img : `c05.jpg`
        }

    ]


    return (

        <ul className="productList">
            {products.map(p => 
                <ProductDetail  
                    key={p.pno} 
                    product={p}/>
                )}
        </ul>

    );
}

export default ProductList;