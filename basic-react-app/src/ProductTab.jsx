import Product from "./Product";

function ProductTab()
{
    let features = ["high-tech,", " durable,", " fast"];
    // let optional = { a: "Handy",  b: "light" };
    let optional = [ <li> "Handy"</li>, <li> "light" </li>, <li>"Color</li>  ];

    return(
        <>
                                    {/* string */}
        <Product title="Phone" price ="15000" features = {features} features2 = {optional} />
                                       {/* int */}
        <Product  title="Laptop"  price = { 75000 } features = {features}  features2 = {optional} />
        </>
    )
}
export default ProductTab;