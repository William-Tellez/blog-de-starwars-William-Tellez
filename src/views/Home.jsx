import { useEffect } from "react";
import CardSW from "../components/CardSW.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	const getPeople = () => {
		fetch("https://www.swapi.tech/api/people/")
			.then(res => res.json())
			.then(data => {
				const peopleFull = data.results.map(getAll => {
					return fetch(getAll.url)
						.then(res => res.json())
						.then(peopleAll => ({
							uid: getAll.uid,
							...peopleAll.result.properties
						}));
				});

				Promise.all(peopleFull)
					.then(peopleAll => {
						dispatch({ type: "addPeople", payload: peopleAll });
					})
					.catch(err => console.error("Error al obtener detalles de personajes", err));
			})
			.catch(err => console.log("Error al obtener lista de personajes", err));
	};

	const getVehicles = () => {
		fetch("https://www.swapi.tech/api/vehicles/")
			.then(res => res.json())
			.then(data => {
				const promiseVehicles = data.results.map(vehi => {
					return fetch(vehi.url)
						.then(res => res.json())
						.then(data => ({
							uid: vehi.uid,
							...data.result.properties
						}))
				})

				Promise.all(promiseVehicles)
					.then(dataVehicles => {
						dispatch({ type: "addVehicles", payload: dataVehicles });
					})
					.catch(err => console.error("Error al obtener detalles de vehiculos", err));
			})
			.catch(err => console.log("Error al obtener lista de vehiculos", err));
	};

	const getPlanets = () => {
		fetch("https://www.swapi.tech/api/planets/")
			.then(res => res.json())
			.then(data => {
				const promisePlanets = data.results.map(planets => {
					return fetch(planets.url)
						.then(res => res.json())
						.then(data => ({
							uid: planets.uid,
							...data.result.properties
						}))
				})

				Promise.all(promisePlanets)
					.then(dataPlanets => {
						dispatch({ type: "addPlanets", payload: dataPlanets });
					})
					.catch(err => console.error("Error al obtener detalles de planetas", err));
			})
			.catch(err => console.log("Error al obtener lista de planetas", err));
	};

	useEffect(() => {
		getPeople();
		getVehicles();
		getPlanets();
	}, []);

	return (
		<>
			<div className="container">
				<h2 className="my-4 text-danger">Characters</h2>
				<div className="row flex-nowrap overflow-auto g-5">
					{store.people.map((iten) => (
						<div className="col" key={`people-${iten.uid}`}>
							<CardSW
								data={iten} type="people"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="container">
				<h2 className="my-4 text-danger">Vehicles</h2>
				<div className="row flex-nowrap overflow-auto g-5">
					{store.vehicles.map((iten) => (
						<div className="col" key={`vehicle-${iten.uid}`}>
							<CardSW
								data={iten} type="vehicles"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="container">
				<h2 className="my-4 text-danger">Planets</h2>
				<div className="row flex-nowrap overflow-auto g-5">
					{store.planets.map((iten) => (
						<div className="col" key={`planet-${iten.uid}`}>
							<CardSW
								data={iten} type="planets"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
