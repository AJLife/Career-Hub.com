
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {job_title , 
        logo , location , 
        job_type ,salary , job_description , id , 
         remote_or_onsite , company_name , job_responsibility ,
         educational_requirements , experiences , contact_information
          } = job ;
    return (
        <div className="card w-full rounded-[50px] border-2 border-blue-400">
                <figure>
                    <img className="rounded-[50px]" src={logo} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-3">
                        <button className=" btn btn-outline">{remote_or_onsite}</button>
                        <button className="btn btn-outline">{job_type}</button>
                    </div>
                    <div className="mt-5 flex justify-between gap-1">
                        <h2 className="flex items-center">
                            <IoLocationOutline 
                              className="text-2xl mr-2 " >
                          </IoLocationOutline>{location}
                        </h2>
                        <h2 className="flex items-center">
                            <AiOutlineDollarCircle
                              className="text-2xl mr-2 " >
                          </AiOutlineDollarCircle>{salary}
                        </h2>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">View details</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Job;