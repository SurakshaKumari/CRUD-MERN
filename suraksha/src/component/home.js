import React from "react";
import { NavLink } from 'react-router-dom';

const Home = () => {
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
      <th scope="col">image</th>
      <th scope="col">email</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>suraksha</td>
      <td>Otto.jpg</td>
      <td>surakshak571@gmail.com</td>
      <td className="d-flex justify-content-between">
        <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
        <button className="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
        <button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
      </td>
    </tr>
    
   
  </tbody>
</table>


     </div>
    )
}
export default Home;