import React, { useState } from 'react'

const Faq = ({ faq: { id, question, answer } }) => {

    const questions = [
        {
            id: 1,
            question: "Hello",
            answer: "hello answer"
        }
    ]

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleToggle = () => {
        setOpen(!open);
    }
    return (
        <>
            <div className="">
                <div onClick={handleToggle} className={`flex justify-between items-center border font-semibold border-black p-3 select-none active:scale-90 duration-200 ${open === false ? "" : "bg-yellow-200"}`}>
                    <h1 className={`text-xl ${open === false ? "" : "font-bold"}`}>{question}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 duration-500 ${open===false ? "" : "rotate-180"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                    </svg>

                </div>
                <p className={` bg-gray-200 p-2 text-gray-600 ${open === false ? "hidden" : ""}`}>{answer}</p>
            </div>
        </>
    )
}

export default Faq
