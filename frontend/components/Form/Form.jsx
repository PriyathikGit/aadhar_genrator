import {  useState } from "react"
import "./index.css"
import Card from "../Card/Card"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
// import Card from "../Card/Card"
 const Form = () => {
    const [uniqueCode,setUniqueCode]= useState(null)
    const [showCard, setShowCard] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: ""
    })
    const [submittedData, setSubmittedData] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState, [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/generate-code`);
            if (!response.ok) {
                throw new Error("Network response error");
            }
            const responseData = await response.json();
            setUniqueCode(responseData.code);
            console.log(responseData);

            // removing the old data
            setSubmittedData([])

            // data form
            const newData = { ...formData };
            setSubmittedData((prevState) => [...prevState, newData]);
            console.log(newData);
            setFormData({
                fullName: "",
                dateOfBirth: "",
                address: "",
                phoneNumber: ""
            });
            setShowCard(true)
        } catch (error) {
            console.error("Error fetching unique code:", error);
        }
    };

    return (
        <>
            <div className="main-cnt">
                <div className="text-top">
                    <h1>Enter your details to Genrate your Aadhar card</h1>
                </div>
                <div className="container">
                    <div className="title">Registration</div>
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Date of Birth</span>
                                    <input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Enter your Date of birth" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Address</span>
                                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your Address" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your number" required />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
                {showCard && (
                <Card
                    uniqueCode={uniqueCode}
                    submittedData={submittedData}
                    onClose={() => setShowCard(false)} // Pass onClose function to close the modal
                />
            )}
            </div>
        </>
    )
}

export default Form