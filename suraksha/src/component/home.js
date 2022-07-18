import React , { useState, useEffect, useContext } from "react";
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/contextprovider';

const Home = () => {

  const {dltdata, setDLTdata} = useContext(deldata);
  const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    
     const getdata = async (e) => {
     const res = await fetch("/getdata", {
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
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
      getdata();
  }, [])



  const deleteuser = async (id) => {

    const res2 = await fetch(`/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("user deleted");
        getdata();
    }

}




    return (
     <div className="mt-5">
        <div className="container">
           <div className="add_btn mt-2 mb-2">
               <NavLink to="/register" className="btn btn-primary"> Add New</NavLink>
           </div>
        </div>
      
        <table class="table">
  <thead>
    <tr className="table-dark">
      <th scope="col">id</th>
      <th scope="col">username</th>
      <th scope="col">Email</th>
      <th scope="col">Image</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
    getuserdata.map((element, id) => {
                                    return (
                                        <>
    <tr>
      <th scope="row">{id+1}</th>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.image}</td>
      <td className="d-flex justify-content-between">
        <NavLink to={`details/${element._id}`}><button className="btn btn-success"><i class="fa-solid fa-eye"></i></button></NavLink>
        <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><i class="fa-solid fa-trash-can"></i></button>
        <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button></NavLink>
      </td>
    </tr>
    </>
                                    )
                                })
                            }
  </tbody>
</table>


     </div>
    )
}
export default Home;