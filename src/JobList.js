import {useState, useEffect} from 'react';
import axios from 'axios';
import JobForm from './JobForm';

function JobList() {
    const [jobs, setJobs] = useState([]);

    const fetchJobs=() => {
        axios.get('http://127.0.0.1:8000/api/jobs/')
        .then(res=>setJobs(res.data))
        .catch(err=> console.error(err));
    };
    useEffect(fetchJobs,[]);
return (
    <div>
        <h2>Jobs</h2>
        {jobs.map(job=> (
            <div key={job.id}>
                <h3>{job.company_name}</h3>
                <p>{job.position}</p>
            </div>
        ))}
    </div>
);
}
export default JobList;

