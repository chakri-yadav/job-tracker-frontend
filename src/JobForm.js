import { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from './JobForm';
function JobForm({ onJobAdded, editingJob, clearEditing }) {
    const[company_name, setCompany] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/jobs/', {
            company_name,
            position,
            status: 'APPLIED'
            })
            .then(res=>{
                setCompany('');
                setPosition('');
                onJobAdded();
            })
            .catch(err=> console.error(err));
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={company_name} onChange={e=> setCompany(e.target.value)} placeholder="Company Name"required style={{ marginRight:'10px'}}/>
            <input value={position} onChange={e => setPosition(e.target.value)} placeholder="Position" required style={{ marginRight:'10px'}}/>
            <button type="submit">Add Job</button>
        </form>
    );
}
export default JobForm;