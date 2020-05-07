import React from 'react';
import axios from 'axios';

class Axiospostexample extends React.Component {
    state = {
        id: ''
    }

    handleChange = event => {
        this.setState({
            id: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();

        const id = {
            id: this.state.id
        };

        axios.delete(`https://ghibliapi.herokuapp.com/people/${this.state.id}`)
            .then(res => {
                console.log("Delete Data", res);
                console.log("Delete Data", res.data);
            })
    }

    render() {
        return (
            // <ul className="list-group">
            //     {this.state.people.map(peopledetail => <li className="list-group-item">{peopledetail.name}</li>)}
            // </ul>

            <form onSubmit={this.handleSubmit}>
                <label>
                    user Id:
              <input type="text" name="gender" onChange={this.handleChange} />
                </label>
                {/* <button type="submit">Post Data</button> */}
                <button type="submit">Delete Data</button>
            </form>

        )
    }
}

export default Axiospostexample;