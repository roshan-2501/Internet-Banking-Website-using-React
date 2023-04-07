import React from "react";
import '../styles/TransactionHistory.css'
// import "../styles/Transfer.css";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { InputGroup, FormControl, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import jwt_decode from "jwt-decode"
import { Card } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";


const TransactionHistory = () => {

    const [Array_recieved, setArrayRecieved] = useState([]);
    const [Array_sent, setArraySent] = useState([]);

   
    return (
        <div>
            <NavBarLoggedIn />
            <div className="transactionbody">
                <h2>Transaction History</h2>
                <br />
                <div className="box">
                    {
                        Array_recieved.map((Robj) => {
                            const { amount, desc, receiverId, senderId, createdAt } = Robj;
                            return (
                                <Card style={{ width: '80vw', marginLeft: '2vw' }} className="mb-2 leftcard" border="success" >
                                    <Card.Body>
                                        <Card.Subtitle className="mb-1 text-muted "><b>Credit: </b>Amount recieved: {amount}</Card.Subtitle>
                                        <Card.Text>
                                        Description: {desc}  <br />
                                        Recieved from: {senderId} To recipient: {receiverId}<br />
                                        Time: {createdAt}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })}

                    {Array_sent.map((Sobj) => {
                        const { amount, desc, receiverId, createdAt } = Sobj;
                        return (
                            <Card style={{ width: '80vw', marginLeft: '16.5vw' }} className="mb-2 rightcard" border="danger" >
                                <Card.Body>
                                    <Card.Subtitle className="mb-1 text-muted"><b>Sent: </b>Amount payed: {amount}</Card.Subtitle>
                                    <Card.Text>
                                        Description: {desc} <br />
                                        Sent To recipient: {receiverId}<br />
                                        Time: {createdAt}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                    }
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default TransactionHistory

