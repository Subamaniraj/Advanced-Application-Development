import React, { useState, useEffect } from 'react';
import '../../assets/css/user.css';

const UserManagement = () => {
  const initialUser = { id: null, name: '', email: '' };
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [editing, setEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const saveUser = () => {
    if (editing) {
      setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));
    } else {
      setUsers([...users, { ...currentUser, id: users.length + 1 }]);
    }
    sessionStorage.setItem('users', JSON.stringify(users));
    setEditing(false);
    setCurrentUser(initialUser);
    setShowForm(false); // Hide the form after saving
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
    sessionStorage.setItem('users', JSON.stringify(users.filter(user => user.id !== id)));
  };

  const editUser = user => {
    setCurrentUser({ ...user });
    setEditing(true);
    setShowForm(true); // Show the form when editing
  };

  return (
    <div className="user-container">
      <h2>User Management</h2>
      {!showForm && ( // Render the form only if showForm is true
        <button className='new-user-button'onClick={() => setShowForm(true)}>New User</button>
      )}
      {showForm && (
  <div>
    <div className="overlay" /> {/* Overlay */}
    <form className="user-form" >
    <button className="close-button" onClick={() => setShowForm(false)}>X</button> {/* Close button */}
      <label>Name:</label>
      <input type="text" value={currentUser.name} onChange={e => setCurrentUser({ ...currentUser, name: e.target.value })} />
      <label>Email:</label>
      <input type="email" value={currentUser.email} onChange={e => setCurrentUser({ ...currentUser, email: e.target.value })} />
      <label>Password:</label>
      <input type="password" value={currentUser.password} onChange={e => setCurrentUser({ ...currentUser, password: e.target.value })} />
      <button className='user-submit-button'onClick={saveUser}>{editing ? 'Update' : 'Add'}</button>
    </form>
  </div>
)}

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="action-buttons">
                <button onClick={() => editUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
