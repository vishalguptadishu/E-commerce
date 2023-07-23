import Navbarcom from "../componenntes/Navbar/Navbar"
import Poster from "../componenntes/Poster/poster"
import CategryCart from "../componenntes/categryCart/categryCart"
import New_Arrivals from "../componenntes/New_Arrivals/New_Arrivals"
import Deal_Of_The_Week from "../componenntes/Deal_Of_The_Week/Deal_Of_The_Week"
import Card_scrool from "../componenntes/card_scrool/card_scrool"
import Benifit from "../componenntes/benifit/benifit"
import Latest_Blogs from "../componenntes/Blogs/Blogs"

const Home = () =>{
    return (
        <>
            <Poster />
            <CategryCart />
            <New_Arrivals />
            <Deal_Of_The_Week />
            <Card_scrool />
            <Benifit />
            <Latest_Blogs />
        </>
    )
}
export default Home ;