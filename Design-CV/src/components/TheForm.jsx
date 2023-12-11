







import "./TheForm.css"

function TheForm () {

    return (
      <>
       <div className="form">
          <div className="formHeader">
            <button className="formBtn">Back to home</button>
          </div>
          <hr />
          <div className="formMain">
            <div className="firstLine">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="row">
                <p>First Name</p>
                <input type="text" />
                <p>Middle Name</p>
                <input type="text" />
                <p>Last Name</p>
                <input type="text" />
              </div>
            </div>
            <div className="col">
              <p>Age</p>
              <input type="text" />
              <p>Gmail</p>
              <input type="text" />
              <p>Address</p>
              <input type="text" />
              <p>Phone Number</p>
              <input type="text" />
            </div>
            <div className="col">
              <p>About</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <p>Experiance</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="col">
              <p>About</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <p>Experiance</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
          <button>Download CV</button>
       </div>
      </>
    )
  }   


export default TheForm