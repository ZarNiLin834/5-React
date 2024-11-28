import React from 'react'
import Faq from './Faq';

const FaqQuestion = () => {
    const questions = [
        {
            id: 1,
            question: "What is JavaScript?",
            answer: "JavaScript is a programming language commonly used to create interactive effects within web browsers."
        },
        {
            id: 2,
            question: "What is a variable in JavaScript?",
            answer: "A variable in JavaScript is a container for storing data values."
        },
        {
            id: 3,
            question: "How do you create a function in JavaScript?",
            answer: "A function in JavaScript is created using the 'function' keyword followed by a name, parentheses, and a code block."
        },
        {
            id: 4,
            question: "What is an array in JavaScript?",
            answer: "An array in JavaScript is a data structure that can hold multiple values at once, stored in a single variable."
        },
        {
            id: 5,
            question: "How do you add an element to an array in JavaScript?",
            answer: "You can add an element to an array in JavaScript using the 'push' method."
        },
        {
            id: 6,
            question: "What is a loop in JavaScript?",
            answer: "A loop in JavaScript is used to execute a block of code repeatedly as long as a specified condition is true."
        },
        {
            id: 7,
            question: "What is an object in JavaScript?",
            answer: "An object in JavaScript is a collection of key-value pairs, where each key is associated with a specific value."
        }
    ];
  return (
   <>
   <div className="p-10">
    <h1 className="text-xl font-bold"> React Faq Questions</h1>
    <div className="flex flex-col">
        {questions.map((question) => <Faq key={question.id} faq={question}/>)}
    </div>
   </div>
   </>
  )
}

export default FaqQuestion
