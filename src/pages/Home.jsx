import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

const Home = () => {
	const [doctors, setDoctors] = useState(doctorData);
	const [hastalar, setHastalar] = useState(hastaData);
	const [show, setShow] = useState(true);

	const doctorClick = () => {
		setShow(!show);
		set;
	};

	return (
		<div>
			<main>
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
								onClick={() => doctorClick(dr)}
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
					<div>
						{!show && (
							<AddPatient
								hastalar={hastalar}
								setHastalar={setHastalar}
							/>
						)}
					</div>
					<div>
						<PatientList
							hastalar={hastalar}
							setHastalar={setHastalar}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
