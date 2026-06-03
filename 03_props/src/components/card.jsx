

const card = (props) => {
    console.log(props);
    return (
        <div>
            <div className="card">hello props
                <img className="card-img" src={props.img} alt="3d object" />
                <h1>{props.user}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.{props.age} year old me</p>
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default card;