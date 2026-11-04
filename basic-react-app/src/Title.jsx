function Title() {

    let name = "arib";

    return (
        <div>
            
            <p>Hi, {name.toUpperCase()}</p>

            <h1>I am a title</h1>
            <h3>I am the description </h3>

            <p>2 * 2 = {2 * 2}</p>

        </div>
    )

}

//export
// export default Title;



// export more than one function
export { Title };