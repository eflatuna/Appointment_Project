import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

const Home = () => {
	const [doctors, setDoctors] = useState(doctorData);
	const [hastalar, setHastalar] = useState(hastaData);
	const [show, setShow] = useState(true);

	const doctorClick = (idD) => {
		setShow(!show);
		setDoctors(show ? doctors.filter((a) => a.id === idD) : doctorData);
	};

	return (
		<div>
			<main className="main">
				<div className="doctors">
					{doctors.map((dr) => (
						<div key={dr.id}>
							<img
								className="btn"
								style={{
									background: show ? "#cad6ff" : "#809cff",
								}}
								src={dr.doctorImg}
								alt=""
								width="150px"
								height="225px"
								onClick={() => doctorClick(dr.id)}
							/>
							<h4
								style={{
									background: show ? "#cad6ff" : "#809cff",
								}}
							>
								{dr.doctorName}
							</h4>
						</div>
					))}
				</div>
				<div
					style={{
						display: show ? "block" : "flex",
					}}
				>
					<div className="add-list">
						<div>
							{!show && (
								<AddPatient
									hastalar={hastalar}
									setHastalar={setHastalar}
									doctors={doctors}
								/>
							)}
						</div>
						<div>
							<PatientList
								hastalar={hastalar}
								setHastalar={setHastalar}
								doctors={doctors}
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
