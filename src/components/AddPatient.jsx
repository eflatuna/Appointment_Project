import React, { useState } from "react";

const AddPatient = ({ hastalar, setHastalar, doctors }) => {
	const [hastaName, setHstName] = useState("");
	const [date, setDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setHastalar([
			...hastalar,
			{
				id: 7,
				text: hastaName,
				day: date,
				bittiMi: false,
				doktor: doctors[0].doctorName,
			},
		]);

		setHstName("");
		setDate("");
	};

	return (
		<div>
			<section className="form-section">
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<label htmlFor="name">Patient Information</label>
						<input
							type="text"
							id="name"
							name="name"
							onChange={(e) => setHstName(e.target.value)}
							value={hastaName}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="text">Day&Time</label>
						<input
							type="date"
							id="day"
							name="day"
							onChange={(e) => setDate(e.target.value)}
							value={date}
						/>
					</div>
					<div>
						<button className="btn btn-submit" type="submit">
							Create Registration for{" "}
							<span>{doctors[0].doctorName}</span>
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default AddPatient;
