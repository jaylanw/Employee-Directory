import React, {Component} from "react";
import EmployeeTable from "../EmployeeTable";
import Search from './search';
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

  sortName(event, sortKey) {
    const item = this.state.result;
    switch (sortKey) {
        case "name.a": 
            item.sort((a, b) => a.name.first.localeCompare(b.name.first))
            console.log(item)
            break;
        default:
            break;
        case "name.z":
            item.sort((b, a) => a.name.first.localeCompare(b.name.first))
            break;
    }
    this.setState({item});
}


  render() {
    return (
      <div className="container">
          <div className="col-md-6">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              sortName={this.item}
            />
        </div>
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