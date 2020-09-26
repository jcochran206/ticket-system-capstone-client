import React from 'react';

class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

   render(){
       let { data } = this.state;
       return (
        <div>
           <h2>Leaf desk Incidents Page</h2>
  <table className="ticket-table">
  <tr>
    <th>id</th>
    <th>Title</th>
    <th>Comments</th>
    <th>Priority</th>
    <th>Owner</th>
    <th>Location</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
  
  <tr>
    <td>1</td>
    <td>malware on device</td>
    <td>ransomware popup on my computer screen</td>
    <td>High</td>
    <td>1</td>
    <td>Seattle</td>
    <td><button className="btn-update">Update</button></td>
    <td><button className="btn-delete">Delete</button></td>
  </tr>

  <tr>
    <td>2</td>
    <td>new device</td>
    <td>need apps for work</td>
    <td>medium</td>
    <td>1</td>
    <td>Tacoma</td>
    <td><button className="btn-update">Update</button></td>
    <td><button className="btn-delete">Delete</button></td>
  </tr>

  <tr>
    <td>3</td>
    <td>issue out device</td>
    <td>obtained device from Bob</td>
    <td>low</td>
    <td>2</td>
    <td>Kirkland</td>
    <td><button className="btn-update">Update</button></td>
    <td><button className="btn-delete">Delete</button></td>
  </tr>
  
</table>
        </div>
       )
   }
}

export default Tickets;