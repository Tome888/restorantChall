import { Link } from "react-router-dom";

export function Surprise(){
    return(
        <section className="surpriseWrapper">
            <h2>DON'T KNOW WHAT TO EAT?</h2>
            <Link to={'/surpriseMe'}>
            Surprise Me!
            </Link>
        </section>
    )
}