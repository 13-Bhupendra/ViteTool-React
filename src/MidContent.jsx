import Footer from './Footer'
import Navbar from './Navbar'
import Lily from '/public/lily.jpg'

function MidContent () {
    return(
        <div style={{backgroundColor : "darkgreen" , height : "97vh" , width : "100%"}}>
            <div style={{backgroundColor:"whitesmoke" , height:"430px" , width : "700px" , transform:"translate(-50%,-50%)" , position : "absolute" , left : "50%" , top :"50%"} }>
               
               < Navbar />
               <div style={{ display:'flex' ,alignItems : "center", margin :" 30px 10px"}}>
                    <div>
                        <img src={Lily} alt="" height={"250px"}/>
                    </div>

                    <div style={{width:"60%" , padding : "0px 40px"}}>
                        <h2>CLASSIC PEACE LILY</h2>
                        <h3>POPULAR HOUSE PLANT</h3>
                        <h1>$18</h1>
                        <p>The sweet and innocent beauty of the lily flower has given it the association of fresh 
                            life and rebirth. Although the meaning can differ depending on its colour.</p>
                        <button style={{height:"40px" , width:"120px" , margin : "10px 20px"}}>ADD TO CART</button>
                        <button style={{height:"40px" , width:"120px" , margin : "10px 0px"}}>WISHLIST</button>
                    </div>
               </div>

                < Footer />
            </div>
        </div>
    )
}

export default MidContent