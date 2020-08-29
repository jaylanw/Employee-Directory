import React, {Component} from "react";
import EmployeeTable from "../EmployeeTable";
import api from './API';
import "./style.css";


class Container extends Component {
  state = {
    result: [],
    search: "",
    filterBy: "fName",
    currentSort: "default",
    sortField: "",
  };

  componentDidMount() {
    api
      .getEmployee()
      .then((response) => {
        console.log(response);
        this.setState({
          result: response.data.results.map((emp, idx) => ({
            fName: emp.name.first,
            lName: emp.name.last,
            picture: emp.picture.large,
            email: emp.email,
            key: idx,
          })),
        });
      })
      .catch((err) => 
      console.log("error", err));
  }

  searchEmp = (search) => {
    var filterEmp = this.state.result.filter(
      (person) => person.fName === search
    );
    this.setState({
      result: filterEmp,
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.searchEmp(value);
    this.setState({
      [name]: value
    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <table className="table table-hover">
        <thead>
            <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            </tr>
            </thead>
            <tr>
            {[...this.state.result].map((item) => 
            <EmployeeTable 
            picture={item.picture}
            fName={item.fName}
            lName={item.lName}
            email={item.email}
            />
            )}
            </tr>
          </table>
        </div>
    );
  }
}

export default Container;