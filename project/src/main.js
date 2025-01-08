import App from "./App";
import Companymodule from "./company/companyapp";
import Usermodule from "./user/userapp";


const Mainmodule= () => {
    if(localStorage.getItem("userid") == null){
        return(
            <App />
        )
    } else {
        if(localStorage.getItem("usertype")==="USER"){
            return(
                <Usermodule />
            )
        }else {
            return(
                <Companymodule />
            )
        }
    }
}

export default Mainmodule;