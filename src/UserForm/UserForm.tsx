import {CheckBox, User, UserMutation} from '../types';
import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    status: '',
    role: '',
  });

  const[checkState, setCheckState] = useState<CheckBox>({
    checkbox: false
  });
  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setUser((prev)  => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
      status: checkState.checkbox,
    });
  };

  const checkBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setCheckState({checkbox: value});
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user </h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Email</label>
        <textarea
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-control"
          value={user.role}
          onChange={changeUser}
        >
          <option value='user'>user</option>
          <option value='editor'>editor</option>
          <option value='admin'>admin</option>
        </select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="status">Status: Active / Not Active </label>
        <input
          type="checkbox"
          name="status"
          id="status"
          checked={checkState.checkbox}
          onChange={checkBoxChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;