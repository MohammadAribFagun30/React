import "./Product.css";

function Product( { title, price, features  ,features2 } )
{
    const list = features2.map( (feature) => <li> {feature} </li>  )


    return (
        <div className="Product">
            {/* <h3>Product Title</h3> */}
            <h3> {title } </h3>

            <h5>Price : {price} </h5>

            <p>Features : {features} </p>


            {/* <p>Attributes : {features2} </p> */}

            {/* <p>Attributes : {list} </p> */}

            <p>
                {
                 features2.map( (feature) => <li> {feature} </li> )
                }
            </p>




            {/* <h5>Product Description</h5> */}

        </div>
    );
}

export default Product;