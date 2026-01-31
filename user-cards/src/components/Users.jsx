import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Users List</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Name:</span>{" "}
              {user.name}
            </p>

            <p className="mb-2">
              <span className="font-semibold text-gray-700">Username:</span>{" "}
              {user.username}
            </p>

            <p>
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
