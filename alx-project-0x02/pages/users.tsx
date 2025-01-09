import React, { useEffect, useState } from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const formattedUsers = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          address: user.address,
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default Users;
