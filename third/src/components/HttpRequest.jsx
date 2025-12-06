import React, { useState } from "react";
import axios from "axios";

const HttpRequest = () => {
  const [data, setData] = useState([]);

  // -------------------------
  // 📌 GET ALL USERS
  // -------------------------
  const getAllUsers = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      setData(res.data.users);
      console.log("All Users:", res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  // -------------------------
  // 📌 DELETE USER
  // -------------------------
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);

      // Remove from UI
      setData((prev) => prev.filter((user) => user.id !== id));

      console.log("Deleted User with ID:", id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={getAllUsers}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Load All Users
      </button>

      <h1 className="text-xl font-bold mb-3">Users Table</h1>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">
                  {user.firstName} {user.lastName}
                </td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.age}</td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="border p-3 text-center text-gray-500"
              >
                No Data Loaded
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
// dsf

export default HttpRequest;
