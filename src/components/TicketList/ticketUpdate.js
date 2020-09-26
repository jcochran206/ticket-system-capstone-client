import React from 'react';

class TicketUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incidents: []
        }
    }

    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/incidents`)
        .then(res => res.json())
        .then(incidents => {
          this.setState({
            incidents
    
          }, () => {
            console.log(this.state)
          })
        })
    }

    handleUpdate = () => {
        fetch(`${config.API_ENDPOINT}/incidents/${incidentid}`, {
            method: 'POST',
        })
        
    }
    
    render(){

        return (
            <div>
                <h2>Update Incidents</h2>
                <table className="ticket-table">
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Comments</th>
                    <th>Priority</th>
                    <th>Owner</th>
                    <th>Location</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>

                    {incidents.map(incident => {
                    return(
                    <tr key={incident.id}>
                    <td>{incident.id}</td>
                    <td>{incident.title}</td>
                    <td>{incident.comments}</td>
                    <td>{incident.users_id}</td>
                    <td>{incident.inc_pri}</td>
                    <td>{incident.office_location}</td>
                    <td><button className="btn-update"onClick={}>Update</button></td>
                    </tr>

                    )
                    })}
                </table>
            </div>
        )
    }
}