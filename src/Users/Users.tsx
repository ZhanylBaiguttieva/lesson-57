import UserItem from './UserItem';
import {User} from '../types';
import React from 'react';
interface Props {
 users: User[];
}
const Users: React.FC<Props> = ({users})=> {
  return (
    <>
      <h4>Users</h4>
      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))};
    </>
  );
};

export default Users;