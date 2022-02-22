import Navbar from "./navigation.js";
import Footer from "./footer.js";

const Layout =({children})=>{
    return(
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>

        </div>
    );
}

export default Layout;