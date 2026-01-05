import React, { useEffect, useState } from "react";

const CREDoperations = () => {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // GET
  const getUser = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      if (!res.ok) throw new Error("fetch user error");

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  // DELETE
  const deleteUser = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });

    const filtered = users.filter((item) => item.id !== id);
    setUsers(filtered);
  };

  // EDIT (PUT)
  const editUser = async () => {
    if (!editId || !editName) return;

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${editId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editName }),
      }
    );

    const updatedUser = await res.json();

    const updatedList = users.map((u) =>
      u.id === editId ? { ...u, name: updatedUser.name } : u
    );

    setUsers(updatedList);
    setEditId(null);
    setEditName("");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h3>User Data</h3>

      {editId && (
        <div>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Enter new name"
          />
          <button onClick={editUser}>Update</button>
        </div>
      )}

      {users.map((u) => (
        <div key={u.id}>
          <p>{u.name}</p>
          <button
            onClick={() => {
              setEditId(u.id);
              setEditName(u.name);
            }}
          >
            Edit
          </button>
          <button onClick={() => deleteUser(u.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CREDoperations;
