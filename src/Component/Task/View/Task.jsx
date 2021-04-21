import React, { useState, useEffect } from 'react';
import { showAlert } from '../../../Common/CommonAlert';
import Navigation from '../../Navigation/View/Navigation';
import checkTask from '../../../services/checkTask';
import useGlobalState from '../../../Context';
import "../Css/Task.css";
import "../../../css/main.css";
import "../../../css/react-confirm-alert.css";

const Task = () => {
    const [{ loginName },] = useGlobalState();
    const [responseData, setResponseData] = useState([])
    const [displayModal, setDisplayModal] = useState(false)
    const [desc,setDesc] = useState()
    const display = { display: 'block' };
    const hide = { display: 'none' };


    useEffect(() => {
        //api calling 
        fetchData()

    }, [])

    const fetchData = async () => {
        const checkTaskResponse = await checkTask(loginName.userName, loginName.passwords)
        if (checkTaskResponse.errorCode == "00") {
            setResponseData(checkTaskResponse.TaskList)
        }
        else {
            showAlert(checkTaskResponse.errorMsg)
        }
    }

    const deleteTask = (e, param) => {
        const d = [...responseData]
        d.splice(param, 1)
        setResponseData(d)
    }

    const addTask = () => {
        
        setDisplayModal(true)
    }

    const modalClose = () => {
        setDesc()
        setDisplayModal(false)
    }

    const newTask =()=>{
          if(desc && document.getElementById("bool").value!=="Select"){
            var Request ={
                "description":desc,
                "boolean": document.getElementById("bool").value
            }
            responseData.push(Request)
            setDisplayModal(false)
             
          }
          else{
            showAlert("Please enter all fields.")
          }
    }

    return (
        <>
        
            <Navigation props={loginName} />

            <div className="modal" role="dialog" style={displayModal ? display : hide}>
                <div className="modal-dialog animate">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="close" style={{ color: "blue", "margin-right": "3px" }}
                                onClick={(e) => modalClose(e)}
                            >X</a>
                        </div>
                        <div className="modal-body">
                            <div className="form-horizontal">
                                <div className="form-group">
                                    <h4 className="control-label col-sm-4">Description :</h4>
                                    <div className="col-sm-8">
                                        <input type="text" class="form-control" id="Desc" autoComplete="off" onChange={(e)=>setDesc(e.target.value)}/>
                                    </div>
                                    <div className="col-sm-4">
                                    <h4 className="control-label col-sm-4 mt-10">Boolean:</h4>
                                            <select  class="form-control" id="bool">
                                                <option>Select</option>
                                                <option>True</option>
                                                <option>False</option>
                                            </select>
                                    </div>

                                    <div className="col-sm-4">
                                    <button type="button" className="btn btn-primary mt ml-10" onClick={newTask}>New TAsk</button>  
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>


            <div className="mt">
                <div className="tbl-holder">
                    <table className="table table-striped table-advance table-hover table-bordered tbl-ticker tbl-hhide">
                        <thead>

                            <tr>
                                <th>Sr no.</th>
                                <th>Description</th>
                                <th>Boolean</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>

                    <table className="table table-striped table-advance table-hover table-bordered tbl-ticker mob-tbl">
                        <tbody>


                            {responseData.map(function (item, key) {

                                return (
                                    <tr key={key}>
                                        <td data-th="Sr no" > {key + 1}</td>
                                        <td data-th="Description">{item.description}</td>
                                        <td data-th="Boolean">{item.boolean}</td>
                                        <td data-th="Action">
                                            <a className="delete-icon" onClick={(e) => deleteTask(e, key)}> <i className="fa fa-trash-o "></i> </a>
                                        </td>


                                    </tr>
                                )
                            })}</tbody>

                    </table>
                </div></div>
            <button type="button" className="btn btn-primary mt ml-10" onClick={addTask}>Add Task +</button>
        </>
    )
}

export default Task