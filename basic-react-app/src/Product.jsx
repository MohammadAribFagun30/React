import "./Product.css";

function Product( { title, price, features  ,features2 } )
{
    // Array 
    // const list = features2.map( (feature) => <li> {feature} </li>  )
     
    // Conditions
    let isDiscount = price > 20000 ? "Discount of  5%" : "";

    // Add CSS
    // let styles = { backgroundColor : "white" };

   //CSS on condition
    let styles = { backgroundColor : price >20000 ? "pink" : "" };




    return (
        <div className="Product"  style={styles}  >

            {/* <h3>Product Title</h3> */}

            <h3> {title } </h3>

            <h5>Price : {price} </h5>

            {/* Array pass */}

            {/* type-1 */}
            {/* <p>Features : {features} </p> */}

            {/* type-2 */}
            {/* <p>Attributes : {features2} </p> */}

            {/* type-3 */}
            {/* <p>Attributes : {list} </p> */}

            {/* type-4 */}
            {/* <p>
                {
                 features2.map( (feature) => <li> {feature} </li> )
                }
            </p> */}


            {/* conditions : */}

            {/* type-1: */}
            {/* <p> {isDiscount} </p> */}

            {/* type-2 : */}
            {/* <p>{price > 20000 ? "Discount of  5%" : ""}</p> */}

            {/* type-3 : */}
            {/* { price > 20000 ? <p> Discount of  5% </p> : <a href="/" >Get Discount</a> } */}

            {/* type-4 : */}
            { price > 20000 && <p> Discount of  5% </p> }





            {/* <h5>Product Description</h5> */}

        </div>
    );
}

export default Product;