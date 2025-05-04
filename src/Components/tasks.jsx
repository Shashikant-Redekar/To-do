import { useState } from 'react';
import '../Styling/list.scss';

const Task = function (props){
    const taskList = props.task;
    const [editingIndex, setEditingIndex] = useState(null);
    const [editInput, setEditInput] = useState('');

    const handleEdit = (task,id) => {
        setEditingIndex(id);
        setEditInput(task);
    }

    const handleCancel = () => {
        setEditingIndex(null);
    }

    const handleSubmitEnter = (e,id) => {
        if(e.key === "Enter"){
            const updatedTask = [...taskList];
            updatedTask[id] = editInput;
            props.setTask(updatedTask);
            setEditingIndex(null);
            setEditInput('');
        }
    }

    return(
        <div>
            {
                taskList.map((task,id) => {
                    return( 
                        <div key={id}>
                            <ul className="listOfTask">
                                <input type='checkbox'></input>
                                {editingIndex === id ? (<input type='text' value={editInput}
                                onChange={(e) => setEditInput(e.target.value)}
                                onKeyDown={(e) => handleSubmitEnter(e,id)}></input>) 
                                : (<p>{task}</p>)}
                                {editingIndex === id ?
                                (<div>
                                    <button>add</button>
                                    <button onClick={() => handleCancel()}>cancel</button>
                                </div>)
                                :(<button onClick={() => handleEdit(task,id)}>Edit</button>)
                                }
                                <i className='fa fa-trash'></i>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Task;