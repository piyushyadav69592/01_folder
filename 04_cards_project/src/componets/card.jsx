import { Bookmark } from "lucide-react"

const Card = (jobs) => {
    return (

        <div className="card">
            <div className="top">
                <img src={jobs.image} alt="" />
                <button>Save as <Bookmark size={20} /></button>
            </div>
            <div className="center">
                <h3>{jobs.company} <span>{jobs.posted}</span></h3>
                <h2>{jobs.title}</h2>
                <div className="tag">
                    <p>{jobs.tags[0]}</p>
                    <p>{jobs.tags[1]}</p>
                </div>
            </div>
            <div className="bottom">
                <div className="rate">
                    <h3>{jobs.rate}</h3>
                    <p>{jobs.location}</p>
                </div>
                <button className="apply-button">Apply Now</button>
            </div>
        </div>

    )
}

export default Card