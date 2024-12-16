function App() {
  return (
    <div className="container">
      <h1>SWAPI</h1>

      <form className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          https://swapi.dev/api/
        </span>
        <input type="text" className="form-control" placeholder="people/1/" aria-describedby="basic-addon3" />
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
          Get info
        </button>
      </form>

      <div className="card">
        <div className="card-body"></div>
        <pre className="mt-2 mb-0 text-bg-light rounded"></pre>
      </div>
    </div>
  );
}

export default App;
