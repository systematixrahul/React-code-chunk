import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

export default function CommonModal(props) {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = data => console.log(data);
  const selectedItem = props;
  const updateData = props
	console.log(watch("example")); // watch input value by passing the name of it


	return (
		<div>
			<div className="modal" id="editModal">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Edit User Info</h4>
							<button type="button" className="close" data-dismiss="modal">&times;</button>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="modal-body">
								<div className="row">
									<div className="col-md-8">
										<label>Id</label>
										<input name="id" className="form-control" defaultValue={props.selectedItem.id} ref={register} />
									</div>
									<div className="col-md-4">
										<label>Name</label>
										<input name="name" className="form-control" defaultValue={props.selectedItem.name} ref={register} />
									</div>
								</div>
								<div className="row" style={{ marginTop: "20px" }}>
									<div className="col-md-4">
										<label>Gender</label>
										<input name="gender" className="form-control" defaultValue={props.selectedItem.gender} ref={register} />
									</div>
									<div className="col-md-4">
										<label>Eye Color</label>
										<input name="example" className="form-control" defaultValue={props.selectedItem.createdAt} ref={register} />
									</div>
									<div className="col-md-4">
										<label>Hair Color	</label>
										<input name="example" className="form-control" defaultValue={props.selectedItem.avatar} ref={register} />
									</div>

								</div>
					

							</div>
							<div className="modal-footer">
								<input type="submit" value="Update" className="btn btn-primary" onClick={() => props.updateData()}  />
								<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
							</div>
						</form>
					</div>
				</div>
			</div >
			<div className="modal" id="viewModal">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">View User Info</h4>
							<button type="button" className="close" data-dismiss="modal">&times;</button>
						</div>
						<div className="modal-body">
							<table className="table table-bordered table-sm">
								<tbody>
									<tr>
										<td><b>Id</b></td>
										<td>{props.selectedItem.id}</td>
									</tr>
									<tr>
										<td><b>Name</b></td>
										<td>{props.selectedItem.name}</td>
									</tr>
									<tr>
										<td><b>Gender</b></td>
										<td>{props.selectedItem.gender}</td>
									</tr>
									<tr>
										<td><b>Age</b></td>
										<td>{props.selectedItem.createdAt}</td>
									</tr>
									<tr>
										<td><b>Id</b></td>
										<td>{props.selectedItem.avatar}</td>
									</tr>
									
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}



