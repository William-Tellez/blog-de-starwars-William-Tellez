import starWars from '../assets/img/star-wars.png';
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Detail = () => {

    const { id, type } = useParams();
    const { store } = useGlobalReducer();
    console.log("type", type)
    const item = store[type].find(sw => sw.uid === id);

    return (
        <div className="container">
            <div className="card border-0">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={starWars} className="img-fluid w-100" alt="Star Wars avatar" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title text-center">{item.name}</h2>
                            <p className="card-text p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nobis eius aliquam nesciunt fugit optio, eos excepturi beatae fugiat dolores perferendis cupiditate quas quam nihil modi? Quibusdam accusantium optio at.</p>
                        </div>
                    </div>
                </div>

                <hr className="border-danger border-3 opacity-100 my-5" />

                {type === "people" && (
                    <>
                        <div className="row text-center text-danger fw-bold">
                            <div className="col">
                                Name<br />{item.name}
                            </div>
                            <div className="col">
                                Birth Year<br />{item.birth_year}
                            </div>
                            <div className="col">
                                Gender<br />{item.gender}
                            </div>
                            <div className="col">
                                Height<br />{item.height}
                            </div>
                            <div className="col">
                                Skin Color<br />{item.skin_color}
                            </div>
                            <div className="col">
                                Eyes Color<br />{item.eye_color}
                            </div>
                        </div>
                    </>
                )}

                {type === "vehicles" && (
                    <>
                        <div className="row text-center text-danger fw-bold">
                            <div className="col">
                                Name<br />{item.name}
                            </div>
                            <div className="col">
                                Cargo Capacity<br />{item.cargo_capacity}
                            </div>
                            <div className="col">
                                Length<br />{item.length}
                            </div>
                            <div className="col">
                                Passengers<br />{item.passengers}
                            </div>
                            <div className="col">
                                Crew<br />{item.crew}
                            </div>
                            <div className="col">
                                Vehicle Class<br />{item.vehicle_class}
                            </div>
                        </div>
                    </>
                )}

                {type === "planets" && (
                    <>
                        <div className="row text-center text-danger fw-bold">
                            <div className="col">
                                Name<br />{item.name}
                            </div>
                            <div className="col">
                                Climate<br />{item.climate}
                            </div>
                            <div className="col">
                                Population<br />{item.population}
                            </div>
                            <div className="col">
                                Orbital Period<br />{item.orbital_period}
                            </div>
                            <div className="col">
                                Rotation Period<br />{item.rotation_period}
                            </div>
                            <div className="col">
                                Diameter<br />{item.diameter}
                            </div>
                        </div>
                    </>
                )}


            </div>
        </div >
    )
}
export default Detail;