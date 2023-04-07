import React, { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import jwt_decode from "jwt-decode"
import api from "../service/api.js"
import axios from "axios"


const Profile = () => {
    const navigate = useNavigate()
    const [balance, setBalance] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tempBalance, setTempBalance] = useState()
    const [sendBalance, setSendBalance] = useState(0)
    const [receiverEmail, setReceiverEmail] = useState('')
    const [addFd, setAddFd] = useState()
    const [duration, setDuration] = useState()

    

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt_decode(token)
            if (!user) {
                localStorage.removeItem(token)
                navigate('/login', { replace: true })
            }
            else {
                populateBalance()
                populateInfo()
            }
        }

    }, [])

    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Your balance: {balance}</h1>
            <form >
                <input
                    type="number"
                    placeholder="Amount to deposit"
                    value={tempBalance}
                    onChange={(e) => setTempBalance(e.target.value)}
                /><br />
                <button onClick={updateBalance} type="submit" value="Add to account">Deposit</button>
                <br /><br />
                <input
                    type="number"
                    placeholder="Amount to send"
                    value={sendBalance}
                    onChange={(e) => setSendBalance(e.target.value)}
                /><br />
                <input
                    type="email"
                    placeholder="Email of receiver"
                    value={receiverEmail}
                    onChange={(e) => setReceiverEmail(e.target.value)}
                /><br />
                <Link to="/transfer"><button value="Send Money">Transfer</button></Link>
                <br /><br />
                <input
                    type="number"
                    placeholder="Amount to FD"
                    value={addFd}
                    onChange={(e) => setAddFd(e.target.value)}
                />
                <input 
                    type="number"
                    placeholder="Duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <button onClick={fixedDeposit} value="Fix deposit">Confirm</button>
            </form>

        </div>

    )

}

export default Profile