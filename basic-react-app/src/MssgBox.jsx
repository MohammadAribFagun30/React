
export default function MssgBox( {username,textcolor } )
{
    // let styles = {  color :textcolor  };
    return(
        <h1 style={ {color :textcolor}  } > Hello !, {username} </h1>
    )

}