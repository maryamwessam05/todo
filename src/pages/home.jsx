import React, { useEffect, useState } from 'react';
import {supabase} from "../supabase"
import profimg from "../assets/Ellipse 1.png"
import fire from "../assets/Vector.svg"
import bar from "../assets/Group 43.svg"
import "./home.css"
import icon1 from "../assets/icon01.svg"
import icon2 from "../assets/icon02.svg"
import icon3 from "../assets/icon03.svg"
import arrw from "../assets/arrw.svg"

const Home = () => {
    const [students, setStudents] = useState([""])
    const [TaskName , setTaskName] = useState("")
    const [TaskDetails , setTaskDetails] = useState("")
    const [TaskPriority , setTaskPriority] = useState("")
    const [TaskDate , setTaskDate] = useState("")
    const [TaskCategory , setTaskCategory] = useState("")


    useEffect( () => {
        const getAllstd = async () => {
            const res = await supabase.from("task").select("*")
            setStudents(res.data);
        }

        getAllstd();

    },[]

    

    )
    const deleteTask = async(id) =>{
        const res = await supabase.from("task").delete().eq("id", id) ;
        const res2 = await supabase.from("category_tasks").delete().eq("task_id", id) ;

        console.log(res);
    }

    const createTask = async() => {
        const res = await supabase.from("task").insert({
            "title": TaskName,
            "description": TaskDetails,
            "priority": TaskPriority,

            
        })
        console.log(res);

    }
    return ( 
        <>
            <main>
                <div className="taskscont">
                    <div className="profile">
                        <img src={profimg} alt="" />
                        <div className="profdeets">
                            <div className="name">
                                <h3>Hey there <span>Maryam</span></h3>
                                <p>Streaks of activity </p>

                            </div>

                            <div className="streak">
                                <div className="fire">
                                    <p>5 Days in a row</p>
                                    <img src={fire} alt="" />
                                </div>
                                <img src={bar} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="createtask">
                        <h1>Create a Task</h1>
                        <form action="" onSubmit={createTask}>
                            <div className="input">
                                <label htmlFor="">Task Name</label>
                                <input type="text"  className='taskname' placeholder='Enter the task name'  onChange={(e) => setTaskName(e.target.value)} required/>
                            </div>

                            <div className="input">
                                <label htmlFor="">Task Details</label>
                                <input type="text" className='details' placeholder='Enter the task details'  onChange={(e) => setTaskDetails(e.target.value)} required/>
                            </div>

                        <div className="dropdowns">
                            <div className="choose">
                                <img src={icon1} alt="" />
                                <div className="choosedd">
                                <input  type="date" onChange={(e) => setTaskDate(e.target.value)} />
                                </div>
                            </div>

                            <div className="choose">
                                <img src={icon3} alt="" />
                                <div className="choosedd">
                                <select defaultValue="" onChange={(e) => setTaskCategory(e.target.value)} name="category" id="">
                                    <option value="" disabled>
                                    Choose Category
                                    </option>
                                    <option value="uni">Uni</option>
                                    <option value="ux">UX</option>
                                    <option value="sports">Sports</option>
                                    <option value="personal">Personal</option>
                                    <option value="social">Social</option>
                                </select>
                                <img src={arrw} alt="" />
                                </div>
                            </div>
                            </div>

                            <div className="priorities">
                                <label htmlFor="priority">Priority</label>
                                <div className="pri">

                                <select  name="priority" id="" onChange={(e) => setTaskPriority(e.target.value)}>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                                </div>
                            </div>

                            <button  className='addtask'>Add Task</button>

                        </form>

                    </div>

                    <div className="tasks">
                        <h1>Today's Tasks</h1>
                        <div className="tasklist">
                            {students.map((student) => (
                                <div className="task" key={student.id} style={{ backgroundColor: student.color }}>
                                    
                                    <div className="row1">
                                        
                                        <div className="header">
                                            <h3>{student.title}</h3>
                                            <p>{student.description}</p>
                                            <p>Priority: {student.priority}</p>
                                        </div>

                                        <div className='complete'></div>

                                    </div>
                                    <div className="datesline">
                                        <h3>Due date: <span> {student.due_date}</span></h3>
                                    </div>
                                    <div className="taskbtns">
                                        <button className='edit'>Edit</button>
                                        <button onClick={() => deleteTask(student.id)} className='delete'>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </main>
        
        </>
     );
}
 
export default Home;