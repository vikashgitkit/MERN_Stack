function CurrentTime() {

    var currTime = new Date()
    return <h2> This is the current time: {currTime.toLocaleString()} </h2>
}

export default CurrentTime