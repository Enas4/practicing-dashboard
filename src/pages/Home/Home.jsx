const Home = () => {
  const { name } = JSON.parse(localStorage.getItem("user")) || {};

  return <div>Welcome "{name}" to our home page!</div>;
};

export default Home;
