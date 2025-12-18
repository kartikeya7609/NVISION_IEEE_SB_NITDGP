import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, query, onSnapshot } from "firebase/firestore";
import logo from "../images/ieee-logo-light.png";
import "./Success.css";

const RegNo = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const q = query(collection(db, "Registrations"));
		onSnapshot(q, (querySnapshot) => {
			console.log(q);
			setTasks(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	return (
		<div>
			<nav class="navbar">
				<div class="container">
					<a className="navbar-brand" href="https://www.ieeesbnitdgp.com/">
						<img src={logo} alt="" width="100" height="50" />
					</a>
				</div>
			</nav>
			<div className="container mt-5 p-5">
				<div className="col-md-12 m-auto border">
					<div className="m-auto p-3">
						<h1>{tasks.length}</h1>
						<h4> Registrations so far...</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegNo;
