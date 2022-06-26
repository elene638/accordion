import React from "react";
import questions from "./data";
import Question from "./Questions";

function App() {

    const [question, setQuestion] = React.useState(questions)

    const template = question.map((ques) => 
       {
        return  <Question 
            key={ques.id}
            question={ques.title}
            info={ques.info}
        />
    })

    return (
        <div className="container">
            <h1 className="title">Questions And Answers About Login</h1>
            <div className="info">
                {template}
            </div>
        </div>
    )
}

export default App;