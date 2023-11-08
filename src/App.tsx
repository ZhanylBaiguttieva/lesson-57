import Toolbar from './ToolBar/ToolBar';
import UserForm from './UserForm/UserForm';
import  {User} from './types';
import {useState} from 'react';
import Users from './Users/Users';


function App() {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'John', email: 'John@gmail.com', status: true, role:  'admin'}
  ]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <header><Toolbar/></header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-4">
            <Users users={users} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
