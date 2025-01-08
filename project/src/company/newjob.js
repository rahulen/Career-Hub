import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Newjob = () => {

    let [title, setTitle] = useState("");
    let [exp, setExp] = useState("");
    let [city, setCity] = useState("");
    let [salary, setSalary] = useState("");
    let [description, setDescription] = useState("");
    let [skill, setSkill] = useState("");

    const save = (obj) => {
        obj.preventDefault();
        let url = "http://localhost:1234/jobapi";
        let newdata = {
            "jobtitle": title,
            "exp": exp,
            "city": city,
            "salary": salary,
            "jd": description,
            "skill": skill,
            "companyid":localStorage.getItem("userid"),
            "companyname":localStorage.getItem("fullname")
        };
        let postdata = {
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: JSON.stringify(newdata)
        }
        fetch(url, postdata)
            .then(response => response.text())
            .then(info => {
                toast("New Job Saved");
                setTitle("");
                setExp("");
                setCity("");
                setSalary("");
                setDescription("");
                setSkill("");
            })
    }

    return (
        <div className="container mt-4">
            <ToastContainer />
            <div className="row">
                
                <div className="col-lg-12 text-center">
                    <h3> New Job </h3>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <form onSubmit={save}>
                            <div className="card">
                                <div className="card-header">
                                    <i className="fa fa-user"></i>  Post Job
                                </div>
                                <div className="card-body">

                                    <div className="row mb-3">
                                        <div className="col-xl-6">
                                            <label> Job Title </label>
                                            <input type="text" className="form-control" onChange={obj => setTitle(obj.target.value)} value={title} />
                                        </div>

                                        <div className="col-xl-6">
                                            <label> Experience </label>
                                            <input type="text" className="form-control" onChange={obj => setExp(obj.target.value)} value={exp} />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-xl-6">
                                            <label> City </label>
                                            <input type="text" className="form-control" onChange={obj => setCity(obj.target.value)} value={city} />
                                        </div>

                                        <div className="col-xl-6">
                                            <label> Salary </label>
                                            <input type="number" className="form-control" onChange={obj => setSalary(obj.target.value)} value={salary} />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-xl-6">
                                            <label> Job Description </label>
                                            <textarea type="text" className="form-control" onChange={obj => setDescription(obj.target.value)} value={description} ></textarea>
                                        </div>

                                        <div className="col-xl-6">
                                            <label> Required Skill </label>
                                            <textarea type="text" className="form-control" onChange={obj => setSkill(obj.target.value)} value={skill} ></textarea>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-warning me-2" > Post Job </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Newjob;

// {
//     "id" = "2222",
//         "companyid" = "43434",
//         "jobtitle" = "java Developer",
//         "exp" = "5",
//         "city" = "Bangalore",
//         "salary" = "43434",
//         "jd" = "its for java Developer",
//         "skill" = "java, core, advance"
// }