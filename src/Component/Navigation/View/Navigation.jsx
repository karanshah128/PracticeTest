import React from 'react';
import { useHistory } from 'react-router-dom';
import "../../../css/main.css";
import "../../../css/react-confirm-alert.css";
import "../Css/Navigation.css";



const Navigation = (props) => {
    const history = useHistory()



    const home = () => {
        history.push("/Home")

    }


    const task = () => {
        history.push("/Task")
    }

    const user = () => {
        history.push("/User")
    }

    return (
        <>


            <header className="header black-bg" >
                <a className="logo"><h5>Welcome {props.props}</h5></a>
                <ul className="nav pull-right pos-rel">
                    <a data-toggle="dropdown" className="mr-10" onClick={() => home()}> <h5>Home</h5></a>
                    <a data-toggle="dropdown" className="mr-10" onClick={() => task()}> <h5>Tasks</h5></a>
                    <a data-toggle="dropdown" className="mr-10" onClick={() => user()}> <h5>User</h5></a>


                </ul>
            </header>
            {props.children}
        </>
    )
}

export default Navigation