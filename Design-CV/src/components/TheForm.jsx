







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
                <img src="" alt="upload photo" />
              </div>
              <div className="row">
                <div className="">
                  <p>First Name</p>
                  <input type="text" />
                </div>
                <div className="">
                  <p>Middle Name</p>
                  <input type="text" />
                </div>
                <div className="">
                  <p>Last Name</p>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="secondLine">
              <div className="colLeft">
              <div className="">
                  <p>Age</p>
                  <input type="text" />
                </div>
                <div className="">
                  <p>Gmail</p>
                  <input type="text" />
                </div>
                <div className="">
                  <p>Address</p>
                  <input type="text" />
                </div>
                <div className="">
                  <p>Phone Number</p>
                  <input type="text" />
                </div>
              </div>
              <div className="colCenter">
                <p>About</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <p>Experiance</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="colRight">
                <p>About</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <p>Experiance</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </div>
          <button className="downloadBtn">Download CV</button>
       </div>
      </>
    )
  }   


export default TheForm