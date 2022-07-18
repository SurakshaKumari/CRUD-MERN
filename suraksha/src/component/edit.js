import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useHistory } from 'react-router-dom'
import { updatedata } from './context/contextprovider'

const Edit = () => {

  const {updata, setUPdata} = useContext(updatedata)

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


    const { id } = useParams("");
    console.log(id);

    const getdata = async () => {

      const res = await fetch(`/getuser/${id}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setinp(data)
          console.log("get data");

      }
  }
  useEffect(() => {
    getdata();
}, []);


const updateuser = async(e)=>{
  e.preventDefault();

  const {name,email} = inpval;

  const res2 = await fetch(`/updateuser/${id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
          name,email
      })
  });

  const data2 = await res2.json();
  console.log(data2);

  if(res2.status === 422 || !data2){
      alert("fill the data");
  }else{
    alert("updated added");
       history.push("/")
      // setUPdata(data2);
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
  <button type="submit" onClick={updateuser}  class="btn btn-primary">Update</button>
  </div>
</form>
    )
}

export default Edit;