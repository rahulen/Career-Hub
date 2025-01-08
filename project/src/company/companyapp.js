import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Newjob from "./newjob";
import Myprofile from "../user/profile";
import Postjob from "./postjob";
import Companydashboard from "./companydashboard";
import Allapply from "./applylist";

const Companymodule = () => {
    return (
        <HashRouter>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-center sticky-top">
                <div className="container ">
                    <a className="navbar-brand" > <i className="fa fa-suitcase fa-lg"></i> CareerCraft </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <Link className="nav-link active" to="/"> <i className="fa fa-home"></i> Dashboard</Link>
                            </li>
                            
                            <li className="nav-item me-4">
                                <Link className="nav-link active" to="/newjob"> <i className="fa fa-suitcase"></i> Post Job </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link active" to="/postjob"> <i class="fa-solid fa-briefcase"></i> All Jobs </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link active" to="/profile"> <i className="fa fa-edit"></i> Edit Profile </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link active"  onClick={logout} > Welcome : {localStorage.getItem("fullname")} <i className="fa fa-power-off"> </i> Logout </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Companydashboard />} />
                <Route exact path="/newjob" element={<Newjob />} />
                <Route exact path="/profile" element={<Myprofile />} />
                <Route exact path="/postjob" element={<Postjob />} />
                <Route exact path="/jobapplylist/:jobid" element={<Allapply />} />
                
            </Routes>
        </HashRouter>
    )
}

export default Companymodule;

const logout = () => {
    localStorage.clear();
    window.location.href = "#/login";
    window.location.reload();
}