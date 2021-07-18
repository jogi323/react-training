import React, { Component, Fragment } from 'react';
import ProductsTableComponent  from "./ProductsTableComponent";
import SearchProductsComponent from "./SearchProductsComponent";

export default class ProductsListComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsLit: [
                {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
                {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
                {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
                {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
                {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
                {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
            ],
            searchText: "",
            inStockOnly: false
        }
    }

    componentDidMount () {
        //get data GET
        fetch("./JSON/products.json")
            .then((res) => res.json())
            .then((data => console.log(data)));
        // Post the data
        const payload = {
            method: "POST",
            header: {"Content-type": "application/json"},
            data: JSON.stringify({title: "React Post request example"})
        }
        fetch("https://reqres.in/api/post", payload)
            .then((res) => res.json())
            .then((data => console.log(data)));
    }
    
    inptChanged = (key, value) => {
        console.log(key, value);
        if (key === "searchText") {
            this.setState({
                searchText: value
            })
        } else if (key === "inStockOnly") {
            this.setState({
                inStockOnly: value
            })
        }
        // this.setState({
        //     searchText: text
        // })
    }
    render() {
        const { productsLit, searchText, inStockOnly } = this.state;
        return (
            <Fragment>
                <div className="container col-6">

                Products List

                <SearchProductsComponent searchTextChanged={this.inptChanged} on/>
                <ProductsTableComponent productsList ={productsLit} searchText={searchText} inStockOnly={inStockOnly} />
                </div>
            </Fragment>
        )
    }
}
