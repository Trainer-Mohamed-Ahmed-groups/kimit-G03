import { useMemo, useState } from "react"
import SiteNav from "../layout/SiteNav";

export default function Memo() {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [age, setAge] = useState("");

    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    let handleFirstName = (ev) => {
        setFirstName(ev.target.value)
    }
    let handleLastName = (ev) => {
        setLastName(ev.target.value)
    }
    let handleAge = (ev) => {
        setAge(ev.target.value)
    }

    let fullName = useMemo(() => (
        <h3 style={{ color: randomColor }}>{firstName + lastName}</h3>
    ), [firstName, lastName])

    return (
        <>
            <SiteNav />
            <div className="mainContent text-center">
                <h2>Memo</h2>
                <h3>First name is : {firstName}</h3>
                <h3>Last name is :{lastName}</h3>
                <h3>Age is :{age}</h3>
                Last name is{fullName}
                <input type="text" onChange={handleFirstName} />
                <input type="text" onChange={handleLastName} />
                <input type="number" onChange={handleAge} />
            </div>
        </>
    )
}
