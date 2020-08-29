import React from "react";

function Search(props) {
    return (
        <form>
            <div className="form-group" >
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
        <br/>
        <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
            </div>
            </div>
        </form>
    );
}

export default Search;