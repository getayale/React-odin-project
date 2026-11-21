function Student(props){

    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.grade}</p>
            <p>{props.age}</p>
            <p>{props.status}</p>
        
        </div>
    );

}

export default Student;