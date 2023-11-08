import Toolbar from './ToolBar/ToolBar';
import UserForm from './UserForm/UserForm';


function App() {
  return (
    <>
      <header><Toolbar/></header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm />
          </div>
          <div className="col-4">

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
