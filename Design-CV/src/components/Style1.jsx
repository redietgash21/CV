








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
    return (
      <div>
        <div className="imgCircle">
            <img></img>
        </div>
        <div className="name">
            <span>{firstName}</span>
            <span>{middleName}</span>
            <span>{lastName}</span>  
        </div>
        <div>
            <i></i>
            <span>{phoneNumber}</span>
<div></div>
            <i></i>

            <i></i>

        </div>
        <div>
            
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    )
  
}

export default Style1