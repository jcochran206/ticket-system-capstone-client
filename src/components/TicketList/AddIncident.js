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
        // title comment user_id inc_pri location
        const title = e.target.value
        const comments = e.target.value 
        const user_id = e.target.value 
        const inc_pri = e.target.value 
        const location = e.target.value 
        const incident = {title, comments, user_id, inc_pri, location}

        fetch(`${config.API_ENDPOINT}/incidents`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(incident)
        })
        .then(incident => {
            this.setState({
                incident: this.state.incident.concat(incident)
            })
        })


    } 

    render() {
        const {title, comments, user_id, inc_pri, location} = this.state;
        return (
            <div>
            <h2>Add Incidents</h2>
            <form>
            <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input type="text" className="login__control"
                        title="title" id="title" onChange={title} defaultValue="place title here" />
            </div>
            <div className="form-group">
                    <label htmlFor="Comments">Comments</label>
                    <input type="text" className="login__control"
                        comments="comments" id="comments" onChange={comments} defaultValue="place Comments here" />
            </div>
            <div className="form-group">
                    <label htmlFor="user_id">Owner</label>
                    <input type="text" className="login__control"
                        user_id="user_id" id="user_id" onChange={user_id} defaultValue="place Owner here" />
            </div>
            <div className="form-group">
                    <label htmlFor="priority">priority</label>
                    <input type="text" className="login__control"
                        inc_pri="inc_pri" id="inc_pri" onChange={inc_pri} defaultValue="place priority here" />
            </div>
            
            <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="login__control"
                        location="location" id="location" onChange={location} defaultValue="place location here" />
            </div>
            <button className="btn-add" onChange={this.handleAdd}>ADD</button>
            </form>
            {console.log(title,comments,user_id,inc_pri,location)}
        </div>
        )
    }
}

export default addIncident;