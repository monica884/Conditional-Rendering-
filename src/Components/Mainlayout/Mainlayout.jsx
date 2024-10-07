import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer'
import Navbar from "../Navbar/Navbar";

export default function Mainlayout(){
    return(
        <>
            <Row>
                <Navbar/> 
                <Outlet />
                <Footer/>
            </Row>
        </>
    )
}

