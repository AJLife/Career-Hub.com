import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs , setDisplayJobs] = useState([]);
    const handleJobsFilter = filter =>{
        if (filter === 'All') {
            setDisplayJobs(appliedJobs);
        }else if (filter === 'Remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }else if(filter === 'Onsite'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(remoteJobs);
        }

    }
  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job =>storedJobsIds.includes(job.id))
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="my-8 bg-slate-700 text-white p-5 rounded-[12px]">
      <h2 className="text-4xl font-semibold ">
        Applied Job List here{appliedJobs.length}
      </h2>
      <details className="dropdown relative lg:left-[900px] left-[350px]">
        <summary className="m-1 btn">Choose</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black">
          <li onClick={() => handleJobsFilter('All')}><a>All</a></li>
          <li onClick={() => handleJobsFilter('Remote')}><a>Remote</a></li>
          <li onClick={() => handleJobsFilter('Onsite')}><a>onsite</a></li>
        </ul>
      </details>
      <ul className="list-disc ml-8">
        {
            displayJobs.map((job) => (
            <li key={job.id} className="text-xl">
            <span>{job.job_title} : {job.remote_or_onsite}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applied;
