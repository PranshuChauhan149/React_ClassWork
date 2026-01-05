import React, { useEffect, useState } from "react";
import axios from "axios";
const Axios = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const Axio = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/2"
      );
      setUser(res.data);
      console.log(res);
      setLoading(false);
    };
    Axio();
  }, []);

  if (loading) {
    return <div>profile loading......</div>;
  }

  return (
    <div>
      {user && (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.username}</p>
          <p>{user.website}</p>
          <p>{user.address?.city}</p>
          <p>{user.address?.zipcode}</p>
          <p>{user.address?.street}</p>
        </div>
      )}
    </div>
  );
};

export default Axios;
