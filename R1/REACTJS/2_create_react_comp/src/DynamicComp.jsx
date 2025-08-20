export function DynamicComp() {

    let myName = 'Steve';

    let fullName = () => {
        return 'Alice bob'
    }

    return <div>
    <h3>
        Hello this is the future speaking. I am {myName}
    </h3>
    <h2> My full name is: {fullName()}</h2>

    </div>
}