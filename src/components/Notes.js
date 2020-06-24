import React from 'react';
import TaskList from './taskList';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { TodoList: [{ hdr: "Task 1", dtl: "do something...", id: 1 }], isNew: false, currentHdr: "", currentDtl: "", currentId: -1 }
    }
    render() {
        return (<div>



            {this.state.isNew ?
                <form onSubmit={() => {
                    this.setState({ isNew: false });
                    if (this.state.currentHdr && this.state.currentDtl) {

                        if (this.state.currentId != -1) {
let tempData=this.state.TodoList.filter(a=>a.id==this.state.currentId);
let tempExcludedData=this.state.TodoList.filter(a=>a.id!=this.state.currentId);
if(tempData){
    tempData.dtl=this.state.currentDtl;
    tempData.hdr=this.state.currentHdr;
    tempData.id=this.state.currentId;

this.setState({TodoList:[...tempExcludedData,tempData]});
this.setState({currentDtl:"",currentHdr:"",currentId:-1});
}
                        } else {
                            this.setState({ TodoList: [...this.state.TodoList, { hdr: this.state.currentHdr, dtl: this.state.currentDtl, id: this.state.TodoList.length + 1 }] }
                            );
                            this.setState({ currentDtl: "", currentHdr: null, currentId: -1 })
                        }
                    } else { alert("No new Notes") }
                }}>
                    <label>
                        New Task:
    <input type="text" value={this.state.currentHdr} name="Heading" onChange={(e) => { this.setState({ currentHdr: e.target.value }) }} />
                        <input type="text" value={this.state.currentDtl} name="details" onChange={(e) => { this.setState({ currentDtl: e.target.value }) }} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                : null}
            <h1 onClick={() => { this.setState({ isNew: true }) }}>Add task</h1>
            <h2>Tasks are...</h2>
            {this.state.TodoList.length == 0 ? <p style={{ color: 'red' }}>No Task to show</p> :
                this.state.TodoList.map(element => {
                    return (
                        <TaskList hdr={element.hdr}
                            dtl={element.dtl}
                            cbEdit={(dtl,hdr) => {
                                console.log(element.dtl);
                                this.setState({ currentDtl: element.dtl, currentHdr: element.hdr, currentId: element.id, isNew: true })
                              
                                console.log(this.state.currentDtl+","+this.state.currentId);
                            }}
                            cbDelete={() => {
                               
                                let tempList = this.state.TodoList.filter(a => a.id != element.id);
                                this.setState({ TodoList: [...tempList] });
                            }} />
                    )
                })}
        </div>)
    }
}
export default Notes;