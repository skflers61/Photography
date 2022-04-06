import React from 'react'

export default function Menu(props) {

    /*
    console.log('renderMenu')            
    console.log(this.props)    
    */      
    return ( 
        <div className="cptMenu">
            <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-white mx-0">
                <a className="navbar-brand" href="#">Magic Production</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mt-2 ml-auto mr-0 mt-lg-0 ">
                    <li className="nav-item active">
                        <a className="nav-link" onClick={() => props.data.handleClick('Accueil')}>Accueil <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => props.data.handleClick('Àpropos')}>À propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => props.data.handleClick('Portfolio')}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " onClick={() => props.data.handleClick('Contact')}>Contact</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        </div>           
    )
    
    
}


