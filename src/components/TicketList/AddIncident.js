import React from 'react';
import config from '../../config';


class addIncident extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incident: [],
        }
    }

    handleAdd = (e) => {
        e.preventDefault();
        //create an object to store the search filters
        const data = {}

        //get all the from data from the form component
        const formData = new FormData(e.target)

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }
        // title comment user_id inc_pri location
        console.log(data);

        fetch(`${config.API_ENDPOINT}/incidents`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(incident => {
            this.setState({
                incident: this.state.incident.concat(incident)
            })
        }) // place catch after for errors


    } 

    render() {
        const {title, comments, user_id, inc_pri, location} = this.state;
        return (
        <div className="addIncident-form">
            <form onSubmit={this.handleAdd}>
            <h2>Add Incidents</h2>
            <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input type="text" className="login__control" name="title"
                        title="title" id="title" onChange={title} defaultValue="place title here" />
            </div>
            <div className="form-group">
                    <label htmlFor="Comments">Comments</label>
                    <input type="text" className="login__control" name="comments"
                        comments="comments" id="comments" onChange={comments} defaultValue="place Comments here" />
            </div>
            <div className="form-group">
                    <label htmlFor="users_id">Owner</label>
                    <input type="text" className="login__control" name="users_id"
                        users_id="users_id" id="users_id" onChange={user_id} defaultValue="place Owner here" />
            </div>
            <div className="form-group">
                    <label htmlFor="priority">priority</label>
                    <input type="text" className="login__control" name="inc_pri"
                        inc_pri="inc_pri" id="inc_pri" onChange={inc_pri} defaultValue="place priority here" />
            </div>
            
            <div className="form-group">
                    <label htmlFor="office_location">Location</label>
                    <input type="text" className="login__control" name="office_location"
                        office_location="office_location" id="office_location" onChange={location} defaultValue="place location here" />
            </div>
            <button className="btn-add">ADD</button>
            </form>
            {console.log(title,comments,user_id,inc_pri,location)}
        </div>
        )
    }
}

export default addIncident;