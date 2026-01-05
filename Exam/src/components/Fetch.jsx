import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/2");

        const data = await res.json();

        setUser(data);
        setLoading(false);
      } catch (error) {}
    };

    fetchUser();
  }, []);
  if (loading) {
    return <div>Loading profile...</div>;
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
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
          <p>{user.address.street}</p>
        </div>
      )}
    </div>
  );
};

export default Fetch;
