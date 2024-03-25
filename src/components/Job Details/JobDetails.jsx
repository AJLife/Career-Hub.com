import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiTwotoneCarryOut } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savaJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const handleApplyJob = () =>{
        savaJobApplication(idInt);
        toast('You have applied successfully')
    }
    return (
        <div>
            <h2 className="text-center py-3 border border-solid bg-[#2607d4] max-w-[250px] mx-auto my-2 text-white rounded-[12px] text-3xl">Job Details here</h2>
                <div className="grid md:grid-cols-4 gap-3 mb-3">
                    <div className="border md:col-span-3 p-3 rounded-[12px]">
                        <h2 className="text-3xl">Details Coming here</h2>
                        <h2 className="font-bold">Job Title: {job.job_title}</h2>
                        <p>Company: {job.company_name}</p>
                        <p><span className="font-bold">Job Description</span>: {job.job_description}</p>
                        <p><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
                        <p className="mt-3"><span className="font-bold">Educational Requirements: </span> <br /> 
                        {job.educational_requirements}
                        </p>
                        <p><span className="font-bold">Experience:</span> <br />
                            {job.experiences}
                        </p>
                    </div>
                    <div className="border p-3 rounded-[12px] ">
                        <h1 className="text-2xl my-2">Job Details</h1> <hr />
                        <h4 className="flex items-center text-[12px]"><AiOutlineDollarCircle></AiOutlineDollarCircle> <span className="font-semibold">Salary: </span> {job.salary} (Per Month)</h4>
                        <h4 className="flex items-center text-[12px]"><AiTwotoneCarryOut></AiTwotoneCarryOut> <span className="font-semibold">Job Title: </span> {job.job_title} </h4>
                        <h1 className="text-2xl my-2">Contact Information</h1> <hr />
                        <h1 className="text-xl">{job.contact_information.phone}</h1>

                        <button onClick={handleApplyJob} className="btn w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">Apply Now</button> <ToastContainer />
                    </div>
                </div>
        </div>
    );
};

export default JobDetails;