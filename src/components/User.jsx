import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
	//to get infor on the route i.e /users/enemrocky/user:(...)
	const { userId } = useParams();
	return <div>User: {userId}</div>;
};

export default User;
