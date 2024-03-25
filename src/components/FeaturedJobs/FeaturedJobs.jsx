import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength , setDataLength] = useState(3);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center my-9">
            <h2 className="text-5xl">Featured Jobs {jobs.length}</h2> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, deserunt!</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {
                    jobs.slice(0, dataLength).map(job=><Job 
                    key={job.id}
                    job={job}
                    ></Job>)
                }
                <div className={dataLength === jobs.length ? 'hidden' :''}>
                    <button onClick={()=> setDataLength(jobs.length)}
                    className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">Show all data</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;