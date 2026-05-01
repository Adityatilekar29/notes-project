import React, { useState } from 'react'

const NotesProject = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const [task, setTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            title: title,
            details: details
        }

        setTask([...task, newTask])

        setTitle('')
        setDetails('')
    }

    const deletenote = (index) => {
        const copyTask = [...task];

        copyTask.splice(index, 1)

        setTask(copyTask)
    }

    return (
        <div className='h-screen bg-black text-white'>
            <form className='flex gap-5 items-start flex-col p-10' onSubmit={(e) => submitHandler(e)}>
                <h1 className='text-2xl font-semibold'>Add Notes </h1>
                <input type="text"
                    name=""
                    className='px-5 py-2 font-medium w-1/2 border-2 outline-none rounded'
                    placeholder='Enter Notes Heading' value={title} onChange={(e) => setTitle(e.target.value)}
                    id="" />

                <textarea type="text"
                    name="" value={details} onChange={(e) => setDetails(e.target.value)}
                    className='px-5 w-1/2  py-2 font-medium border-2 h-30 outline-none rounded'
                    placeholder='Write Details' />

                <button className='bg-white w-1/2 mb-5 outline-none active:bg-pink-300  text-black px-5 py-2 rounded'>Add Notes</button>

            </form>
            <h1 className='mb-10 text-2xl font-semibold px-30'>Recent Notes</h1>
            <div className='min-h-screen bg-black flex flex-wrap gap-6 p-6 justify-center items-start'>
        
                {task.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            className='w-64 bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300'
                        >
                            <h2 className='text-lg font-bold text-gray-800 mb-2'>
                                {elem.title}
                            </h2>

                            <p className='text-sm text-gray-600 mb-4'>
                                {elem.details}
                            </p>

                            <button
                                onClick={() => deletenote(index)}
                                className='w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold transition active:scale-95'
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default NotesProject
