import React, { Component, Fragment } from 'react'

export default class SearchProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            inStockOnly: false
        }
    }
    handleInputChange = (e) => {
        let key = e.target.name;
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [key]: value
        }, () => {
            this.props.searchTextChanged(key, value);
        })
    }
    render() {
        const { searchText, inStockOnly } = this.state;
        return (
            <Fragment>
                Search Products by name
                <label htmlFor="exampleInputEmail1">Search Text</label>
                <input name="searchText" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type here to filter products" value={searchText} onChange={this.handleInputChange}/>
                <input name="inStockOnly" type="checkbox" className="form-check-input" id="exampleCheck1" checked={inStockOnly} onChange={this.handleInputChange}/>
                <label className="form-check-label" htmlFor="exampleCheck1">Only show products in the list</label>
            </Fragment>
        )
    }
}
