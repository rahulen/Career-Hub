import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Postjob = () => {
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
        getjobs();
    }, [])

    const deljob = (id) => {
        let url = "http://localhost:1234/jobapi/" + id;
        let postdata = { "method": "delete" };
        fetch(url, postdata)
            .then(response => response.json())
            .then(info => {
                getjobs();
            })
    }

    return (
        <div className="container mt-4">
            <div className="col-xl-12 mt-4">
                <h2> {joblist.length} Jobs Posted By You.... </h2>
            </div>

            {
                joblist.map((job, index) => {
                        return (
                            <div className="row mb-4" key={index}>
                                <div className="col-xl-12 " >
                                    <div className="card mt-3  rounded shadow-lg">
                                        <div className="card-header">
                                            <Link to={`/jobapplylist/${job.id}`} > {job.jobtitle} </Link>
                                            <i className="fa fa-trash text-danger float-end" onClick={obj => deljob(job.id)} ></i>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="mb-3 col-xl-2"> <i className="fa-solid fa-briefcase"></i> {job.exp} : Years</div>
                                                <div className="mb-3 col-xl-2"> <i className="fa-solid fa-location-dot"></i> {job.city} </div>
                                                <div className="mb-3 col-xl-2"> <i className="fa-solid fa-indian-rupee-sign"></i> {job.salary} /- LPA </div>
                                                <div className="mb-3 col-xl-6"> <i className="fa-solid fa-brands fa-github"></i> Skills : {job.skill}  </div>
                                                <div className="mb-3 col-xl-12"> <i className="fa-solid fa-file-lines"></i> {job.jd} </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                })
            }

        </div>

    )
}

export default Postjob;