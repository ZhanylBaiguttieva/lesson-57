const UserForm = () => {
  return (
    <form>
      <h4>Add new dish</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Email</label>
        <textarea
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <input
          name="status"
          id="status"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <input
          name="role"
          id="role"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;