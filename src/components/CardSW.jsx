import starWars from '../assets/img/star-wars.png';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const CardSW = ({ data, type }) => {

    const { store, dispatch } = useGlobalReducer();

    const isFavorite = store.favorites.includes(data.name);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={starWars} className="card-img-top" alt="Star Wars avatar" />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <ul className="list-unstyled mb-0 fw-semibold">
                    {type === "people" && (
                        <>
                            <li>Gender: {data.gender}</li>
                            <li>Hair Color: {data.hair_color}</li>
                            <li>Eye Color: {data.eye_color}</li>
                        </>
                    )}

                    {type === "vehicles" && (
                        <>
                            <li>Passengers: {data.passengers}</li>
                            <li>Cargo Capacity: {data.cargo_capacity}</li>
                            <li>Vehicle class: {data.vehicle_class}</li>
                        </>
                    )}

                    {type === "planets" && (
                        <>
                            <li>Population: {data.population}</li>
                            <li>Terrain: {data.terrain}</li>
                            <li>Climate: {data.climate}</li>
                        </>
                    )}

                </ul>
                <div className="d-flex justify-content-between mt-3">
                    <Link to = {`details/${type}/${data.uid}`}>
                        <button type="button" className="btn btn-outline-primary">Learn more!</button>
                    </Link>

                    <button type="button" className="btn btn-outline-warning d-flex align-items-center"
                        onClick={() => dispatch({ type: "toggleFavorite", payload: { name: data.name } })}
                    >
                        {isFavorite ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardSW;