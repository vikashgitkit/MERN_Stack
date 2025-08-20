export function Random() {
    let num = Math.random() * 100;

    return <h1 style={{'background-color': '#c53131ff'}}>Random number is: {Math.round(num)}</h1>
}