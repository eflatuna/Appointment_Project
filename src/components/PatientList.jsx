import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const PatientList = ({ hastalar, setHastalar, doctors }) => {
	return (
		<div>
			{hastalar.map((patient) => (
				<div>
					{doctors.map(
						(dr) =>
							dr.doctorName === patient.doktor && (
								<div
									className={
										patient.bittiMi
											? "trueStyle"
											: "falseStyle"
									}
									onDoubleClick={() =>
										setHastalar(
											hastalar.map((hst) =>
												hst.id === patient.id
													? {
															...patient,
															bittiMi:
																!hst.bittMi,
													  }
													: hst
											)
										)
									}
								>
									<div className="list">
										<div>
											<h3>{patient.doktor}</h3>
										</div>
										<div>
											{" "}
											<h3>
												{" "}
												<span
													style={{ color: "#809cff" }}
												>
													{" "}
													Patient:{" "}
												</span>
												{patient.text}
											</h3>
										</div>
										<div>
											<h4 style={{ color: "#809cff" }}>
												{patient.day}
												<FaTimesCircle
													onClick={() =>
														setHastalar(
															hastalar.filter(
																(a) =>
																	a.id !==
																	patient.id
															)
														)
													}
													style={{ color: "#fff" }}
												/>
											</h4>
										</div>
									</div>
								</div>
							)
					)}
				</div>
			))}
		</div>
	);
};

export default PatientList;
