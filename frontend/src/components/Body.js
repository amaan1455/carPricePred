import React, { useState, useEffect } from "react";
import axios from "axios";
const Body = () => {
  const [comOp, setcomOp] = useState();
  const [models, setmo] = useState();
  const [moL, setmoL] = useState();
  const [fuels, setFuel] = useState();
  const [years, setYears] = useState();
  const loadData = async () => {
    await axios.get("http://localhost:5000/").then((res) => {
      const comOpD = res.data.companies.map((com) => { return (<option value={com}>{com}</option>) });
      setcomOp(comOpD);
      setmo(res.data.models);
      const fuelsD = res.data.fuels.map((com) => { return (<option value={com}>{com}</option>) });
      setFuel(fuelsD);
      const yearsD = res.data.years.map((com) => { return (<option value={com}>{com}</option>) });
      setYears(yearsD);
    });
  }
  const chCom = () => {
    const moOpD = models.map((model) => {
      var com = document.getElementById('com').value;
      if (model.includes(com)) {
        return (<option value={model}>{model}</option>);
      }
    })
    setmoL(moOpD);
  }
  const submit = (e) => {
    e.preventDefault();
    var fd = new FormData(document.querySelector('form'))
    axios.post("http://localhost:5000/predict", fd).then((res) => {
      console.log(res);
      var out = document.getElementById('out');
      out.innerHTML = "Rs " + res.data;
    })
  }
  useEffect(() => { loadData(); }, []);
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="card mt-50">
            <form method="POST">
              <div className="col-10 form-group">
                <label><h5>Select Company:</h5></label>
                <select className="selectpicker form-control" id="com" name="com" onChange={chCom} required="1">{comOp}</select>
                <label><h5>Select Model:</h5></label>
                <select className="selectpicker form-control" id="mod" name="mod" required="1">{moL}</select>
                <label><h5>Select Year:</h5></label>
                <select className="selectpicker form-control" id="year" name="year" required="1">{years}</select>
                <label><h5>Select Fuel Type:</h5></label>
                <select className="selectpicker form-control" id="fuel" name="fuel" required="1">{fuels}</select>
                <label><h5>Enter no. of KMs driven</h5></label>
                <input className="form-control" type="text" id="kms" name="kms" required="1" />
                <button className="btn btn-primary" onClick={submit}>Predict Price</button>
              </div>
            </form>
            <h1 id="out"></h1>
          </div>
        </div>
      </div>
    </div>);
}
export default Body;