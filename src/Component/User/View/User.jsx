import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useGlobalState from '../../../Context';
import Spinner from 'react-spinner-material';
import { showAlert,  showSuccess } from '../../../Common/CommonAlert';
import "../../../css/main.css";
import "../../../css/react-confirm-alert.css";
import "../Css/User.css";
import Navigation from '../../Navigation/View/Navigation';


const User = () => {
    const [loading, setLoading] = useState(false)
    const [passwords, setPasswords] = useState("")//P@ssw0rd
    const [passwordValue, setPasswordValue] = useState(false)
    const history = useHistory()
    const [{ loginName },] = useGlobalState();




    const onChangePassword = (e) => {
        setPasswords(e.target.value)
    }

    const handleKeyPress = (target) => {
        if (target.charCode == 13) {
            document.getElementById("loginbtn").click()
        }
    }


    const changePassword = () => {
        setPasswordValue(true)
    }

    const savePassword = () => {
        if (passwords) {
            showSuccess("Password changed successfully.")
            setPasswordValue(false)
        }
        else {
            showAlert("Please Enter the Required Fields.")
        }
    }

    const callLogout = () => {
        localStorage.clear();
        history.replace('/');
    }

    return (
        <>
            <Navigation props={loginName} />
            <div className="login-wrap mt-25">
                <div className="spin">
                    <Spinner visible={loading} spinnerColor={"rgba(0, 0, 0, 0.3)"} />
                </div>

                <label>User ID</label>
                <input type="text" input value={loginName} id="userLogin" className="form-control" placeholder="User ID" maxLength="50" autofocus="true" onKeyPress={(e) => handleKeyPress(e)}
                    readonly onfocus="this.removeAttribute('readonly');" autoComplete="off" />
                <br />

                <label>Password</label>
                <input type="password" value={passwords} className="form-control" placeholder="Password" id="userPassword" maxLength="50" onChange={(e) => onChangePassword(e)}
                    autoComplete="off" disabled={!passwordValue} />
                <br />


                <div className="btns">
                    {passwordValue ?
                        <button
                            type="button" className="btn btn-primary " id="saveswdbtn" style={{ width: "40%" }} onClick={(e) => savePassword(e)}
                            disabled={loading}
                        >Save Password</button>
                        : <button
                            type="button" className="btn btn-primary " id="chngpswdbtn" style={{ width: "40%" }} onClick={(e) => changePassword(e)}
                            disabled={loading}
                        >ChangePassword</button>}

                    <button type="button" className="btn btn-primary ml-10" id="logoutbtn" style={{ width: "45%" }} onClick={(e) => callLogout(e)}
                        disabled={loading} >Logout</button>
                </div>

            </div>
        </>
    )
}
export default User
