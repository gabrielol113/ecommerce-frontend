import Header from "../Header";
import Nav from "../Nav";

export default function Layout({children}){
    return(
        <div>
            <Header/>
            <Nav/>
            <div className="flex-grow p-4">
                {children}
            </div>
        </div>
    )
}