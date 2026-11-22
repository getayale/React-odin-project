function CVPreview({
  name,
  email,
  phone,
  schoolName,
  studyTitle,
  studyDate,
  companyName,
  positionTitle,
  mainResponsibilities,
  startDate,
  endDate
}){
    return(
        <div>
<h1>My CV Preview</h1>

<section>
    <h2>{name}</h2>
    <p>Email:{email}</p>
    <p>Phone:{phone}</p>
</section>

<section>
  <h2>Education</h2>
  <h3>{schoolName}</h3>
  <p>{studyTitle}</p>
 <p>
  {studyDate && new Date(studyDate).toLocaleDateString()}
</p>
</section>


<section>
  <h2>Work Experience</h2>

  <h3>{companyName}</h3>
  <p>{positionTitle}</p>
  <p>{mainResponsibilities}</p>

  <p>
    {startDate && new Date(startDate).toLocaleDateString()}
    {" - "}
    {endDate && new Date(endDate).toLocaleDateString()}
  </p>
</section>

        </div>
    );
}

export default CVPreview;