import React from 'react';

function TaskList(element) {
  return (
    <div style={{ marginLeft: 5, marginTop: 5,}}
   >
    <h3>{element.hdr}</h3>
<div style={{ display: 'flex', flexDirection: 'row' }}>
    <p style={{marginRight:4}} onClick={() => { alert(element.dtl) }}>View</p>
    <p style={{marginRight:4}} onClick={() => { element.cbEdit(element.dtl,element.hdr,element.id)}}>Edit</p>
    <p style={{marginRight:4}} onClick={() => {
        element.cbDelete();
    }}>Delete</p>
</div>
</div>
 
  );
}

export default TaskList;


