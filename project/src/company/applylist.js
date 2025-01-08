import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Allapply = () => {
    let [applylist, setApply] = useState([]);
    const { jobid } = useParams()

    const getapply = () => {
        let url = "http://localhost:1234/applyapi?jobid=" + jobid;
        fetch(url)
            .then(response => response.json())
            .then(info => {
                setApply(info);
            })
    }

    useEffect(() => {
        getapply();
    }, [])

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-xl-12 text-center mb-4">
                    <h1> Job Seeker List : {applylist.length} </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Full Name </th>
                                <th> Mobile </th>
                                <th> Email </th>
                                <th> DOB </th>
                                <th> Education </th>
                                <th> City </th>
                                <th> State </th>
                                <th> Address </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applylist.map((user, index)=> {
                                    return(
                                        <tr key={index}>
                                            <td> {user.fname} </td>
                                            <td> {user.mobile} </td>
                                            <td> {user.email} </td>
                                            <td> {user.dob} </td>
                                            <td> {user.education} </td>
                                            <td> {user.city} </td>
                                            <td> {user.state} </td>
                                            <td> {user.address} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Allapply;