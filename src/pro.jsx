function Button(props){

    const buttonStyle={
    color: props.color,
    fontSize: props.fontSize + "px",
    };
    return <button  style={buttonStyle}>{props.text}</button>
}

export function Pro(){
    
    return(
        <div>
            <Button  text="Click me!" color="blue" fontSize={20} />
            <Button text="Don't click me!" color="red" fontSize={20}/>
            <Button text="Signup"  color="green" fontSize={20}/>
        </div>
    );
}