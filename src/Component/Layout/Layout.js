import React from "react"
import Aux from "../../hoc/Auxilliary"

const Layout  = (props) =>{
    return(
        <Aux>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout