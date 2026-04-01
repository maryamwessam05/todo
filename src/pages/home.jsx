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
                <div className="profile">
                    <img src={profimg} alt="" />
                    <div className="profdeets">
                        <h3>Hey there <span>Maryam</span></h3>
                        <p>Streaks of activity </p>

                        <div className="streak">
                            <div className="fire">
                                <p>5 Days in a row</p>
                                <img src={fire} alt="" />
                            </div>
                            <img src={bar} alt="" />
                        </div>
                    </div>
                </div>

            </main>
        
        </>
     );
}
 
export default Home;