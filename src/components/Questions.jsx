import React from "react";

function Question(props) {

    const [open, setOpen] = React.useState(false)

    function handleClick () {
        setOpen((prevValue) => !prevValue)
    }

    return (
        <div className="question">
            <header>
                <h3>{props.question}</h3>
                <button onClick={handleClick}>{open ? "-" : "+"}</button>
            </header>
            {open && <p>{props.info}</p>}
        </div>
    )
}

export default Question;