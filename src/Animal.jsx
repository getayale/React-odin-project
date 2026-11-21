function Animal(props){

const animals=["Lion","Dog","Cat","Cow","Lizard"];

return(
    <div>
        <h1>List of Animals Starts with Letter L:</h1>
    <ul>
       
        {animals.map((animal)=>{
            return animal.startsWith("L")
            && <li key={animal}>{animal}</li>
            
        })}
    </ul>
    </div>
);
}

export default Animal;