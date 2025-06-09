import {useState, useEffect} from 'react';
import axios from 'axios';


function JobList() {
    const [jobs, setJobs] = useState([]);
    const [editingJob, setEditingJob]= useState(null);

    const fetchJobs=() => {
        axios.get('http://127.0.0.1:8000/api/jobs/')
        .then(res=>setJobs(res.data))
        .catch(err=> console.error(err));
    };
    useEffect(fetchJobs,[]);

    const handleDelete =(id) => {
        axios.delete('http://127.0.0.1:8000/api/jobs/${id}/')
        .then(()=> fetchJobs())
        .catch(err=> console.error(err));
    };
return (
    <div>
        <h2>Jobs</h2>
        <JobForm 
        onJobAdded={fetchJos}
        editingJob={editingJob}
        clearEditing={()=>setEditingJob(null)}
        /> 
        {jobs.map(job=> (
            <div key={job.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px 0' }}>
                <h3>{job.company_name}</h3>
                <p>{job.position}</p>
                <p><strong>Status:</strong>{job.status}</p>
                <button onClick={()=> setEditingJob(job)}>Edit</button>
                <button onClick={()=> handleDelete(job.id)}style={{ marginLeft: '10px' }}>Delete</button>
            </div>
        ))}
    </div>
);
}
export default JobList;

