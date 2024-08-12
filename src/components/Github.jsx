import React, { useEffect, useState } from "react";

const Github = () => {
	const [data, setData] = useState("");
	useEffect(() => {
		fetch("https://api.github.com/users/enemrocky").then((response) =>
			response.json().then((data) => {
				console.log(data);
				setData(data);
			})
		);
	}, []);

	return (
		<div>
			<img src={data.avatar_url} className="w-80" />
			<p>Number of public repos: {data.public_repos}</p>
		</div>
	);
};

export default Github;
