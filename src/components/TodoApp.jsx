import React, { useState } from 'react'

function TodoApp() {
   const [isChecked, setIsChecked] = useState(false);
   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] = useState([]);
   const [totalTasks, setTotalTasks] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (newTask.trim() === '') {
         alert("Please enter a task");
         return;
      }
      const newTaskObject = {
         id: Date.now(),
         text: newTask,
         isChecked: true
      }
      setTasks([...tasks, newTaskObject]);
      setNewTask(" ");
   };

   const handleCheck = (id) => {
      setIsChecked(!isChecked);

      const updatedTasks = tasks.map((task) => {
         if (task.id === id) {
            const updatedTask = { ...task, isChecked: !task.isChecked };
            return updatedTask;
         }
         return task;
      });
      setTasks(updatedTasks);

      const selectedCount = updatedTasks.filter((tsk) => tsk.isChecked).length;
      console.log(selectedCount);

   };

   const handleSingleClear = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
      setNewTask(" ");
      setIsChecked(false);

   };

   const handleClear = () => {
      setTasks([]);
      setNewTask(" ");
      setIsChecked(false);
   };


   const lineThrough = () => {
      setIsChecked(!isChecked);

   };
   return (
      <div className="container mx-auto flex justify-center items-center  ">
         <div className="custom-div w-full max-w-[62.5rem]  h-full pt-[4.5rem] pb-[3rem] px-[3rem] rounded-[2rem] bg-white  border">
            <div className="main-div w-full max-w-[37.5rem] h-auto mx-auto flex flex-col justify-between gap-y-[2.5rem] ">
               <h2 className=" text-[3rem] font-bold  text-[#11175E] ">
                  Daily To Do List
               </h2>
               <div className="input-div w-full flex pr-3 rounded-[.5rem] border ">
                  <form onSubmit={handleSubmit} className="w-full h-full flex items-center justify-between ">
                     <input
                        type="text"
                        name="task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="w-full h-full max-h-[5rem] rounded-[.5rem] placeholder:italic placeholder:text-slate-400 py-2 pl-9 pr-3 outline-none border-none"
                        placeholder="Add new list item"
                     />
                     <button
                        type="submit"
                        className="px-[1.5rem] py-[.75rem] text-[1.125rem] font-medium  rounded-[.25rem] my-3 ml-3 bg-[#2D70FD] text-white "
                     >
                        Add
                     </button>
                  </form>
               </div>
               <ul
                  role="list"
                  className="  px-5 mb-10  space-y-3 text-slate-400 w-full max-h-[10rem] h-full overflow-auto "
               >

                  {tasks.map((task) => (
                     <li key={task.id} className="task-list flex items-center justify-between  w-full mb-[1.25rem] cursor-pointer ">
                        <div className="w-full flex items-center justify-start">
                           <input
                              type="checkbox"
                              name={`task-${task.id}`}
                              id={`task-${task.id}`}
                              checked={task.isCompleted}
                              className="custom-checkbox w-[2rem] h-[2rem] "
                              onChange={() => handleCheck(task.id)}
                           />
                           <label
                              htmlFor={`task-${task.id}`}
                              onClick={lineThrough}
                              className={` check-text ml-3 text-xl text-[#11175E] font-medium ${task.isChecked ? "" : "line-through"
                                 } cursor-pointer `}
                           >
                              {task.text}
                           </label>
                        </div>
                        <button onClick={() => handleSingleClear(task.id)} className="w-8 h-8 rounded-[4px] p-2 flex items-center justify-center text-[#000] border">
                           X
                        </button>

                     </li>
                  ))}
               </ul>
               <div className="total w-full h-auto p-4 flex border-t  items-center justify-between ">
                  <h4 className="">3 items are selected</h4>
                  <button className=" outline-none w-auto p-3 rounded-[4px]  border " onClick={handleClear}>
                     Clear all
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TodoApp;