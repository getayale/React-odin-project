import { useState } from "react";

function App() {

const [students, setStudents] = useState( 
   [
    {
      id:1,
        name: "Getayalew Teshale",
        grade: "Grade 8",
        age: 14,
        status:"inactive"
    
    },
    {
      id:2,
        name: "Nafhara Tamene",
        grade: "Grade 7",
        age: 12,
        status:"active"
   
    },
    {
      id:3,
        name: "Ali Tamene",
        grade: "Grade 7",
        age: 12,
        status:"inactive"
      
    },
    {
      id:4,
        name: "Yusuf Tamene",
        grade: "Grade 8",
        age: 14,
        status:"active"
    
    }
  ]
);


const [searchTerm,setSearchTerm]=useState("");

function toggleStudentStatus(studentId){
  setStudents((previousStudents) => {
return previousStudents.map((student)=>{
  if(student.id===studentId){
    return{
      ...student,
      status:student.status==="active" ? "inactive" :"active"   
     };
  }
  return student;
})
});
                                      }

                 const activeStudents = students.filter(
                           (student) => student.status === "active"
                                                       );

                const activeCount = activeStudents.length;

    const totalAge=students.reduce((total,student)=>{
           return 0 + total + student.age;
                                },0);  
   const averageAge=totalAge/students.length;                               
    
    const filteredStudents=students.filter((student)=>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()));
           
  return (
    <div>
      <h1>Student Management Dashboard</h1>
<h2>Active Students: {activeCount}</h2>
<h2>Average Age:{averageAge}</h2>
  <p>Search by name:{searchTerm}</p>
  <input type="text" value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}/>
  
       <ul>
{
filteredStudents.length===0 ? (<p>No Student Found</p>)
:
(filteredStudents.map((student)=>{
  return <li key={student.id}>
  
    <h1>Name:{student.name}</h1>
    <p>Grade:{student.grade}</p>
    <p>Status: {student.status}</p>
    <button onClick={()=>toggleStudentStatus(student.id)}>
      {student.status==="active" ? "Deactivate" :"Activate"}
    </button>
  </li>
}))}

      </ul>
    </div>
  );
}

export default App;