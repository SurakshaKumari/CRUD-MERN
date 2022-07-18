import React, { useState } from "react";
import { useHistory } from "react-router";
const Register = () => {

  const history = useHistory("");
    const setdata = (e) => {
        console.log(e.target.value);
       const {name, value} = e.target;
       setinp((preval) => {
        return {
            ...preval,
            [name] : value
        }
       })
    }

    const [inpval, setinp] = useState({
        name:"",
        email:"",
        image:""
    })

    const addinpdata = async (e) => {
      e.preventDefault();

      const { name, email, image } = inpval;

      const res = await fetch("./register", {
          method: "POST",
           headers: {
               "Content-Type": "application/json"
          },
           body: JSON.stringify({   name, email, image    })
      });

       const data = await res.json();
       console.log(data);

       if (res.status === 422 || !data) {
           console.log("error ");
           alert("error"); } 
           else {
            alert("added data");
          history.push("/")
      //     setUdata(data)
          console.log("data added");

       }
   }


    return (
        <form >
            <div className="form">
  <div className="row mb-3 ">
    <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-6">
      <input type="name" name="name" onChange={setdata} value={inpval.name} class="form-control" id="inputName3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputemail3" class="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-6">
      <input type="email" onChange={setdata} value={inpval.email} name="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputimage" class="col-sm-2 col-form-label">Image</label>
    <div className="col-sm-6">
      <input type="image" name="image" onChange={setdata} class="form-control" id="inputimage"/>
    </div>
  </div>
  </div>
  <div className="button">
  <button type="submit" onClick={addinpdata} class="btn btn-primary">Register</button>
  </div>
</form>
    )
}
export default Register;