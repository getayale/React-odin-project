import { useState } from "react";

function GeneralInfo(){
    const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");

const [isSubmitted, setIsSubmitted] = useState(false);


function handleSubmit(event){
    event.preventDefault();
    setIsSubmitted(true);
}

return (
   <div>
     <h1>General Information</h1>

     {isSubmitted ?(
    <div>
        <h2>{name}</h2>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        <button onClick={()=>setIsSubmitted(false)}>Edit</button>
    </div>
     )
     :

     (<form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
    <input type="text"  id="name" value={name} onChange={(event)=>setName(event.target.value)} required/>

       <label htmlFor="email">Email:</label>
    <input type="email" id="email" value={email} onChange={(event)=>setEmail(event.target.value)} required /> 

    <label htmlFor="phone">Phone</label>
    <input type="tel" name="phone" id="phone" value={phone} onChange={(event)=>setPhone(event.target.value)} required />  
<button type="submit">Submit</button>
</form>
     )}
   </div>
);
}

export default GeneralInfo;