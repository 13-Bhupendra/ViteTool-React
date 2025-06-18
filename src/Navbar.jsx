import likeBTN from "/public/heart.png"
import backBTN from "/public/back.png"

function Navbar() {
    return ( 
        <nav style={{display:"flex" , justifyContent : "space-between" , padding:"10px 20px" , position :"fixed" , top : "0px" , width : "94.5%" , }}>
            <div  style={{display:"flex"}}>
                <img src={backBTN} alt="" height={"20px"}/>
                <span style={{margin : "0px 10px"}}>BACK TO ALL PLANTS</span>
            </div>
            <img src={likeBTN} alt="" height={"20px"}/>
        </nav>
    )
}

export default Navbar