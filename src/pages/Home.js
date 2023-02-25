import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/todos');
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/todos">the list of todos</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;