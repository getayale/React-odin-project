import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import CVPreview from "./components/CVPreview";
import { useState } from "react";
import "./styles/App.css";
import "./styles/Forms.css";
import "./styles/CVPreview.css";

function App() {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");

   const [schoolName,setSchoolName]=useState("");
    const [studyTitle,setStudyTitle]=useState("");
    const [studyDate,setStudyDate]=useState("");

    const [companyName,setCompanyName]=useState("");
    const [positionTitle,setPositionTitle]=useState("");
    const [mainResponsibilities,setMainResponsibilities]=useState("");
    const[startDate,setStartDate]=useState("");
    const[endDate,setEndDate]=useState("");


  return (
    <div className="app">
      <h1>CV Application</h1>

      <div className="app-layout">

      <div className="forms-container">
      <GeneralInfo
  name={name}
  setName={setName}
  email={email}
  setEmail={setEmail}
  phone={phone}
  setPhone={setPhone}
/>
      <Education 
      
      schoolName={schoolName}
      setSchoolName={setSchoolName}
      studyTitle={studyTitle}
      setStudyTitle={setStudyTitle}
      studyDate={studyDate}
      setStudyDate={setStudyDate}
      />
      <Experience 
      companyName={companyName}
      setCompanyName={setCompanyName}
      positionTitle={positionTitle}
      setPositionTitle={setPositionTitle}
      mainResponsibilities={mainResponsibilities}
      setMainResponsibilities={setMainResponsibilities}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      />

</div>


<div className="preview-container">
      <CVPreview
  name={name}
  email={email}
  phone={phone}
  schoolName={schoolName}
  studyTitle={studyTitle}
  studyDate={studyDate}
  companyName={companyName}
  positionTitle={positionTitle}
  mainResponsibilities={mainResponsibilities}
  startDate={startDate}
  endDate={endDate}
/>
</div>
    </div>
    </div>
  );
}

export default App;