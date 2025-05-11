import '../Styling/header.scss';

const Hea = function(){
    const date = new Date();
    const formatted = `${date.getDate().toString().padStart(2, '0')}/${
        (date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

    return(
        <div className="headAndToDo">
            <h1> To-Do List</h1>
            <h3>Date:{formatted}</h3>
            <label>
                <input type='checkbox'></input>
                <span ></span>
            </label>
        </div>
    )
}

export default Hea;