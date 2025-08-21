function CurrentTime() {

    var currTime = new Date()
     return <p>This is the current time: {currTime.toLocaleDateString()} - {currTime.toLocaleTimeString()}</p>
    // <p> This is the current time: {currTime.toLocaleString()} </p>
}

export default CurrentTime