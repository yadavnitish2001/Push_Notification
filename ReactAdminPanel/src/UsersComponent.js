import React, { useState, useEffect } from "react";
import { firestore } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import PushNotificationComponent from "./PushNotificationComponent";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(firestore, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersData = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleCheckboxChange = (event, userId) => {
    if (event.target.checked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    }
  };

  return (
    <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  value={user.id}
                  checked={selectedUsers.includes(user.id)}
                  onChange={(e) => handleCheckboxChange(e, user.id)}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Selected Users</h3>
        <ul>
          {selectedUsers.map((userId) => {
            const user = users.find(user => user.id === userId);
            return user ? <li key={user.id}>{user.name} ({user.email})</li> : null;
          })}
        </ul>
      </div>
      {selectedUsers.length > 0 && <PushNotificationComponent selectedUsers={selectedUsers} />}
    </div>
  );
};

export default AdminDashboard;
