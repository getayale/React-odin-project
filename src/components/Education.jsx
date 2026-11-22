import { useState } from "react";

function Education({schoolName,setSchoolName,studyTitle,setStudyTitle,studyDate,setStudyDate}){

 
const [isSubmitted, setIsSubmitted] = useState(false);

function handleSubmit(event){
    event.preventDefault();
    setIsSubmitted(true);


}

    return(
        <div>
            <h1>Education Information</h1>


            {isSubmitted? (<div>
                <p>{schoolName}</p>
                <p>{studyTitle}</p>
              <p>{new Date(studyDate).toLocaleDateString()}</p>
                <button onClick={()=>setIsSubmitted(false)}>Edit</button>
            </div>)

           : (<form  onSubmit={handleSubmit}>
                <label htmlFor="schoolName">School Name:</label>
                <input type="text" id="schoolName" value={schoolName} onChange={(event)=>setSchoolName(event.target.value)} required />
                  <label htmlFor="studyTitle">Study Title:</label>
                <input type="text" id="studyTitle" value={studyTitle} onChange={(event)=>setStudyTitle(event.target.value)} required />
                  <label htmlFor="studyDate">Study Date:</label>
                <input type="date" id="studyDate" value={studyDate} onChange={(event)=>setStudyDate(event.target.value)} required />
            
            <button type="submit">Submit</button>
            </form>
           )}
        </div>
    );
}


export default Education;