import PropTypes from 'prop-types';
import "../Card/index.css"
const Card=({uniqueCode,submittedData,onClose})=>{
    return (
        <div className="card-modal">
            <div className="card-content">
                <div className="card-header">
                    <h2 >Govt of India</h2>
                    <span className="card-close" onClick={onClose}>X</span>
                   
                </div>
                <div className="row">
                <div className="image">
                    <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" width="100px"
                    height="100px"/>
                </div>
                {submittedData.map((data, index) => (
                    <div key={index} className="card-details">
                        <p>Full Name: {data.fullName}</p>
                        <p>Date of Birth: {data.dateOfBirth}</p>
                        <p>Address: {data.address}</p>
                        <p>Phone Number: {data.phoneNumber}</p>
                    </div>
                ))}
                </div>
                
                <div className="code">
                 <p>{uniqueCode}</p>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    uniqueCode: PropTypes.string.isRequired,
    submittedData: PropTypes.arrayOf(
        PropTypes.shape({
            fullName: PropTypes.string.isRequired,
            dateOfBirth: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired
};

export default Card;