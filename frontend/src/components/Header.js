const Header = () => {
  return (<div className="header">
    <nav className="bg-dark navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Car Resell Price Predictor</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="https://www.linkedin.com/in/amaan14">linkedin.com/in/amaan14</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="https://www.github.com/amaan1455">github.com/amaan1455</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>);
}
export default Header;