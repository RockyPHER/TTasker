// import Task from "./Task";

// export default function Stack() {
//     return (
//         <div className="h-[96.5vh] w-1/4 m-3 rounded-xl shadow-xl" style={{ background: 'rgba(209, 213, 219, 0.10)' }}>
//                 <div className="flex justify-center w-full"><h1 className="text-3xl p-5 text-white">Stack</h1></div>
//                 <div className="flex flex-col w-full h-[85%] justify-between">
//                     <ul>
//                         <Task time={"12:00"} title={"Like tears"} description={"In the rain"} />
//                     </ul>
//                     <div className="flex w-full justify-center"><button className=" hover:bg-slate-500 active:bg-slate-600 text-3xl px-2 text-white bg-slate-400 rounded-3xl">+</button></div>
//                 </div>
//         </div>
//     )
// }

import React, { useState } from 'react';
import Task from './Task';

export default function Stack() {
  const [tasks, setTasks] = useState([])

  return (
    <div className="h-[96.5vh] w-1/4 m-3 rounded-xl shadow-xl" style={{ background: 'rgba(209, 213, 219, 0.10)' }}>
      <h1 className="text-3xl p-5 text-white">Stack</h1>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </ul>
      <button className="hover:bg-slate-500 active:bg-slate-600 text-3xl px-2 text-white bg-slate-400 rounded-3xl" onClick={() => setTasks([...tasks, { time: "12:00", title: "Like tears", description: "In the rain" }])}>+</button>
    </div>
  );
}