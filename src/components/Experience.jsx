import { useState } from "react";

function Experience(){
    const [companyName,setCompanyName]=useState("");
    const [positionTitle,setPositionTitle]=useState("");
    const [mainResponsibilities,setMainResponsibilities]=useState("");
    const[startDate,setStartDate]=useState("");
    const[endDate,setEndDate]=useState("");

const [isSubmitted, setIsSubmitted] = useState(false);

function handleSubmit(event){
 event.preventDefault();
 setIsSubmitted(true);
}

    return(

        <div>
            <h1>Work Experience</h1>

            {isSubmitted? (<div>
                <p>{companyName}</p>
                <p>{positionTitle}</p>
                <p>{mainResponsibilities}</p>
              <p>{new Date(startDate).toLocaleDateString()}</p>
            <p>{new Date(endDate).toLocaleDateString()}</p>

                <button onClick={()=>setIsSubmitted(false)}>Edit</button>
            </div>):

           ( <form onSubmit={handleSubmit}>

            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" value={companyName} required onChange={(event)=>setCompanyName(event.target.value)} />
        
           <label htmlFor="positionTitle">Position Title</label>
            <input type="text" id="positionTitle" value={positionTitle} required onChange={(event)=>setPositionTitle(event.target.value)} />
        

            <label htmlFor="mainResponsibilities">Main Responsibilities</label>
           <textarea name="mainResponsibilities" id="mainResponsibilities" value={mainResponsibilities} onChange={(event)=>setMainResponsibilities(event.target.value)} required></textarea>
             
             <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" value={startDate} min={startDate} required onChange={(event)=>setStartDate(event.target.value)} />
            
             <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" value={endDate} required onChange={(event)=>setEndDate(event.target.value)} />

            <button type="submit">Submit</button>

            </form>
           )}
        </div>

    );
}

export default Experience;