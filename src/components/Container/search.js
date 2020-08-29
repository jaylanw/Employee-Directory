import React from "react";



function Search(props) {
  return (
    <form>
      <div className="form-group">
        <div className="row">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For Employee By Name"
            id="search"
          />
          <br />
          <button onClick={props.handleSearchCHange} className="btn btn-primary">
            Search
          </button>
        </div>
        <button className="btn btn-primary m-2" onClick={e => this.sortName(e, 'name.a')} >
                    Sort Names A - Z
                </button>
                <button className="btn btn-primary" onClick={e => this.sortName(e, 'name.z')} >
                    Sort Names Z - A
                </button>
      </div>
    </form> 

  )}

export default Search;
