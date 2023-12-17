
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone, 
        faEnvelope, 
        faAddressBook,
        faBook,
        faEarth
       
      } from "@fortawesome/free-solid-svg-icons"



function Style1 (props) {
  const firstName=props.firstName;
  const lastName=props.lastName;
  const middleName=props.middleName;
  const age=props.age;
  const gmail=props.gmail;
  const address=props.address;
  const phoneNumber=props.phoneNumber;
  const about=props.about;
  const experiance=props.experiance;
  const education=props.education;
  const image=props.image;
    return (
      <div>
        <div className="imgCircle">
         <img src={image}/>
        </div>
        <div className="name">
          <span>{firstName}</span>
          <span>{middleName}</span>
          <span>{lastName}</span>  
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <span>{phoneNumber}</span>
          <FontAwesomeIcon icon={faAddressBook} />
          <span>{address}</span>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{gmail}</span> 
        <div>

      </div>
            

        </div> 
      </div>
    )
  
}

export default Style1