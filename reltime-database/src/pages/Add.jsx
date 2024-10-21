import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase.js"
import { useState } from "react";
import './add.css'



function Add() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app)
        let id = Math.floor(Math.random() * 100000);
        set(ref(db, `users/${id}`), {
            name: name,
            phone: phone,
            company: company,
            email: email,
            message: message
        })
        alert("record add");
        setName("");
        setPhone("");
        setCompany("");
        setEmail("");
        setMessage("");

    }
    return (
        <div align="center">
            <h2>Add Record</h2>
            <div className="form-body">
                <form onSubmit={handleSubmit}>
                    <div class="form-control">
                        <label >Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />

                        <label >Company</label>
                        <input type="text" onChange={(e) => setCompany(e.target.value)} value={company} />

                        <label >Email Address</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

                        <label>Phone Number</label>
                        <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} />

                        <label>Message</label>
                        <textarea rows={3} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Add