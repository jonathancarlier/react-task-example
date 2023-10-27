import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskForm() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, description)
        createTask({
            name,
            description
        })
        setName('')
        setDescription('')
    }
    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-white font-bold text-2xl mb-3'>Crea tu Tarea</h1>
                <input
                    className='bg-slate-300 p-3 w-full mb-2'
                    placeholder="Escribe tu tarea"
                    value={name}
                    autoFocus
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
                <textarea
                    className='bg-slate-300 p-3 w-full mb-2'
                    placeholder='Escribe la descripción'
                    value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm