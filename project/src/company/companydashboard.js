import { useState, useEffect } from "react";

const Companydashboard = () => {
    let [applylist, setApply] = useState([]);

    const getapply = () => {
        let url = "http://localhost:1234/applyapi?companyid=" + localStorage.getItem("userid");
        fetch(url)
            .then(response => response.json())
            .then(info => {
                setApply(info);
            })
    }

    let [joblist, setJobs] = useState([]);

    const getjobs = () => {
        let url = "http://localhost:1234/jobapi?companyid=" + localStorage.getItem("userid");
        fetch(url)
            .then(response => response.json())
            .then(info => {
                setJobs(info);
            })
    }

    useEffect(() => {
        getapply();
        getjobs();
    }, [])

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-xl-12 text-center mb-4">
                    <h1> My Dashboard </h1>
                </div>
                <div className="col-xl-2 text-center mb-4"></div>
                <div className="col-xl-4 text-center mb-4">
                    <h2 className="p-5 border rounded-circle text-primary"> {applylist.length} : Total Applied </h2>
                </div>

                <div className="col-xl-4 text-center mb-4">
                    <h2 className="p-5 border rounded-circle text-primary"> {joblist.length} : Total Jobs </h2>
                </div>

            </div>
        </div>
    )
}

export default Companydashboard;