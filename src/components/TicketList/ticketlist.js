import React from 'react';
import config from '../../config';

class Tickets extends React.Component {
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

  handleDelete = (incidentid) => {
    
    fetch(`${config.API_ENDPOINT}/incidents/${incidentid}`, {
      method: 'DELETE',
    })
    .then(() => {
      this.setState({
        incidents: this.state.incidents.filter(incident => parseInt(incident.id) !== parseInt(incidentid))
      })
      this.props.history.push('/tickets')
    })
  }

   render(){
       let { incidents } = this.state;
       return (
        <div>
           <h2>Leaf desk Incidents Page</h2>
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
   <td>1</td>
   <td>Seattle</td>
   <td><button className="btn-update">Update</button></td>
   <td><button className="btn-delete" onClick={() => this.handleDelete(incident.id)}>Delete</button></td>
 </tr>

    )
  })}
  
</table>
        </div>
       )
   }
}

export default Tickets;