import { useState, useEffect } from "react";

const Userdashboard = () => {
    let [joblist, setJobs] = useState([]);

    const getjobs = () => {
        let url = "http://localhost:1234/applyapi?id=" + localStorage.getItem("userid");
        fetch(url)
            .then(response => response.json())
            .then(info => {
                setJobs(info);
            })
    }

    useEffect(() => {
        getjobs();
    }, [])

    

    return (
        <div className="container mt-4">
            <div className="row">
            <div className="col-xl-12 mt-4">
                <h2 className="mt-4 text-center"> You have Applied For <br/> {joblist.length} </h2>
            </div>
            </div>
        </div>

    )
}

export default Userdashboard;