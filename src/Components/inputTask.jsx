import { useState } from "react";
import '../Styling/footer.scss';

const InputTask = function (props) {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
        const data = { id: new Date().getTime().toString(), taskitem: inputText, checked: false }
        props.setTask([...props.task,data]);
        setInputText("");
        e.preventDefault();
    }


    return(
        <div className="foot">
            <form className='form' onSubmit={handleSubmit}>
                <input className="inp" type='text' value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                ></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default InputTask;