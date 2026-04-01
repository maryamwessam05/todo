import React, { useEffect, useState } from 'react';
import {supabase} from "../supabase"
import profimg from "../assets/Ellipse 1.png"
import fire from "../assets/Vector.svg"
import bar from "../assets/Group 43.svg"
import "./home.css"

const Home = () => {
    const [students, setStudents] = useState([""])

    useEffect( () => {
        const getAllstd = async () => {
            const res = await supabase.from("task").select("*")
            setStudents(res.data);
        }

        getAllstd();

    },[]

    )
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
                                        </div>

                                        <div className='complete'></div>

                                    </div>
                                    <div className="taskbtns">
                                        <button className='edit'>Edit</button>
                                        <button className='delete'>Delete</button>
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