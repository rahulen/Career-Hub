import { useState, useEffect } from "react";
//import ReactPaginate from 'react-paginate';

const Home = () => {
    let [joblist, setJobs] = useState([]);

    const getjobs = () => {
        let url = "http://localhost:1234/jobapi";
        fetch(url)
            .then(response => response.json())
            .then(info => {
                setJobs(info);
            })
    }

    useEffect(() => {
        getjobs();
    }, [])

    const apply = (job) => {
        if (localStorage.getItem("userid") == null) {
            window.location.href = "#/login";
        } else {
            let url = "http://localhost:1234/userapi/" + localStorage.getItem("userid");
            fetch(url)
                .then(response => response.json())
                .then(userinfo => {
                    userinfo["jobid"] = job.id;
                    userinfo["companyid"] = job.companyid;
                    // apply start
                    let url2 = "http://localhost:1234/applyapi";
                    let postdata = {
                        headers: { "Content-Type": "application/json" },
                        method: "post",
                        body: JSON.stringify(userinfo)
                    }
                    fetch(url2, postdata)
                        .then(response => response.json())
                        .then(info => {
                            alert("Applyed Successfully");
                        })

                    // apply end
                })
        }

    }

    // pagination
    // const PER_PAGE = 3;
    // const [currentPage, setCurrentPage] = useState(0);
    // function handlePageClick({ selected: selectedPage }) {
    //     setCurrentPage(selectedPage)
    // }
    // const offset = currentPage * PER_PAGE;
    // const pageCount = Math.ceil(joblist.length / PER_PAGE);

    return (
        <div className="container mt-4">
            <div className="col-xl-12 mt-4">
                <h2 className="text-center"> {joblist.length} Recents Jobs.... </h2>
            </div>

            {
                joblist.map((job, index) => {
                    return (
                        <div className="row mb-4" key={index}>
                            <div className="col-xl-12 " >
                                <div className="card mt-3 border-0 shadow-lg">

                                    <div className="card-body">
                                        <div className="row">
                                            <h5 className="mb-3 col-xl-12"> {job.jobtitle} </h5>
                                            <div className="mb-3 col-xl-2"> <i className="fa-solid fa-briefcase"></i> {job.exp} : Years</div>
                                            <div className="mb-3 col-xl-2"> <i className="fa-solid fa-location-dot"></i> {job.city} </div>
                                            <div className="mb-3 col-xl-2"> <i className="fa-solid fa-indian-rupee-sign"></i> {job.salary} /- LPA </div>
                                            <div className="mb-3 col-xl-6"> <i className="fa-solid fa-brands fa-github"></i> Skills : {job.skill}  </div>
                                            <div className="mb-3 col-xl-12"> <i className="fa-solid fa-file-lines"></i> {job.jd} </div>
                                            <div className="mt-2 col-xl-12">
                                                <button className="btn btn-primary btn-sm mt-2" onClick={apply.bind(this, job)}> <i className="fa fa-edit"></i> Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {/* <div id="mypagination">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                />
            </div> */}

        </div>

    )
}

export default Home;