import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'
import CommonModal from "./Modal/CommonModal"
import { useForm } from "react-hook-form"
import SweetAlert from 'sweetalert2-react'


function UserDetail() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [showState, showSetState] = useState();
  const initialuserState = [{
    id: null,
    createdAt: "",
    name: "",
    avatar: "",
    gender: ""
  }];

  //Post Data
  const [userListGrid, setuserListGrid,] = useState(initialuserState);
  const handleChange = (event) => {
    setuserListGrid({ ...userListGrid, [event.target.name]: event.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://5d6f9c56482b530014d2e551.mockapi.io/Users/', userListGrid)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
    //Get Data
  const fetchData = async () => {
    const result = await axios(
      'https://5d6f9c56482b530014d2e551.mockapi.io/Users/',
    );
    setData(result.data);
  };

  const dataContent = useEffect(() => {
    fetchData();
  }, []);

  const updateData = (id) => {
		axios.put(`https://5d6f9c56482b530014d2e551.mockapi.io/Users/${id}`)
			.then(res => {
				console.log(res);
        console.log("code check kar", res.data);
        fetchData();
			})
			.catch(function (error) {
				// handle error
				console.log("Shivansh 2", error);
			})
  }
  


  //Delete Data
  const deleteData = (id) => {
    axios.delete(`https://5d6f9c56482b530014d2e551.mockapi.io/Users/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        fetchData();
        //showState: true 
      })
      .catch(function (error) {
        // handle error
        console.log("Shivansh 2", error);
      })
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <form className='white' onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="lastName">Name</label>
              <input className="form-control" type="text" name="name" value={userListGrid.name} onChange={handleChange} required />
            </div>
            <br />
            <div className="input-field">
              <button className="btn btn-primary" type="submit">Post Data</button>
              <br /><br />
            </div>
          </form>
        </div>
      </div>
      <div className="table-responsive" style={{ height: "500px" }}>
        <h1>User Data</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>CreatedAt</th>
              <th>Url</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.createdAt}</td>
                <td>{item.avatar}</td>
                <td>{item.gender}</td>

                <td>
                  <div className="dropdown">
                    <a className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Action
  					      </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#viewModal" onClick={() => setSelectedItem(item)}>View</a>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#editModal" onClick={() => setSelectedItem(item)}>Edit</a>
                      <a className="dropdown-item" href="#" onClick={() => deleteData(item.id)}>Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <SweetAlert
          show={showState}
          title="Delete User"
          text="SweetAlert in React"
          onConfirm={() => showSetState({ showState: false })}
        />
        <CommonModal selectedItem={selectedItem} updateData={updateData}  />
      </div>
    </div>
  );
}

export default UserDetail;

