import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("")
  
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler= (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title,desc}])
    // console.log(title)
    settitle("")
    setdesc("")

  }

  const deleteHandler= (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }



  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i) =>{
      return <li key={i} className="flex justify-between items-center mb-5  ">
        <div className="flex justify-between items-center mb-5 w-2/3">
        <h5 className="text-2xl font-semibold">{t.title}</h5>
        <h6 className="text-xl font-semibold">{t.desc}</h6>
      </div>
      <button onClick={() =>{
        deleteHandler(i)
      }}
       className="bg-red-500 textwhite px-4 py-2 rounded font-bold">Delete</button>
      </li>
    })
  }

  return (
    <div>
      <h1 className="bg-black text-white p-5 text-4xl font-bold text-center">Jyoti ToDo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className="text-2xl border-zinc-800 border-4 m-4 px-4 py-2" placeholder="Enter Title here" value={title}
        onChange={(e) => { 
          settitle(e.target.value)
        }}/>
        <input type="text" className="text-2xl border-zinc-800 border-4 m-4 px-4 py-2" placeholder="Enter Description here" value={desc} onChange={(e) => {
          setdesc(e.target.value)
        }}/>
        <button className="bg-black px-3 py-3 text-2xl font-bold rounded text-white m-7">Add Task</button>

      </form>
      <hr />
      <div className="p-10 bg-slate-200">
        <ul>
          {renderTask}
        </ul>

      </div>
    </div>
  )
}

export default App