import React from 'react'
export default function TimeTabel(props) {
    function handleClick() {
        console.log(props.showAlert);
        props.showAlert("time table updated 2", "success");
    }
    return (
        <div>
            <button onClick={handleClick} className='btn-primary'> click me</button>
            <div>hello there</div>
        </div>
    )
}
