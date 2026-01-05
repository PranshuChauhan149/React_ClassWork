import React, { useEffect, useState } from "react";

const Getfetch = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetch Example</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Getfetch;
