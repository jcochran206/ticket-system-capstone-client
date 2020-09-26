import React from 'react';

const IncidentContext = React.createContext({
    tickets: [],
    addTicket: () => {},
    deleteTicket: () => {},
})

export default IncidentContext;