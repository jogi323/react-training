import React, { Component, Fragment } from 'react';
import axios from "axios";
import { connect } from "react-redux";

import ProductsTableComponent  from "./ProductsTableComponent";
import SearchProductsComponent from "./SearchProductsComponent";

import ProductsContext from "../ProductsContext";
import { getUserData } from "../../Actions/UserDataAction";

class ProductsListComponents extends Component {
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
            inStockOnly: false,
            userData: props.userData.data
        }
    }

    static getDerivedStateFromProps = (nextProps, state) => {
        // console.log(nextProps);
        if (state.userData !== nextProps.userData) {
            // console.log(nextProps.userData)
            return {
                userData: nextProps.userData.data
            }
        }
    }

    componentDidMount () {
        this.props.getUserData();
        // const url = 'https://randomuser.me/api/?results=100';
        // axios.get(url).then((res) => {
        //     console.log(res)
        // });
        //get data GET
        // axios.get("./JSON/products.json")
        //     .then((res) => console.log(res), (err) => {console.log(err)})
            
        // // Post the data
        // const payload = {
        //     method: "POST",
        //     header: {"Content-type": "application/json"},
        //     data: JSON.stringify({title: "React Post request example"})
        // }
        // fetch("https://reqres.in/api/post", payload)
        //     .then((res) => res.json())
        //     .then((data => console.log(data)));
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
        const { productsLit, searchText, inStockOnly, userData } = this.state;
        // console.log(userData)
        return (
            <Fragment>
                <div className="container col-6">
                <ProductsContext.Consumer>
                {
                            (products) => {
                                console.log(products);
                                return <h1>Testing123</h1>
                            }
                        }
                    </ProductsContext.Consumer> 
                Products List

                <SearchProductsComponent searchTextChanged={this.inptChanged} on/>
                <ProductsTableComponent productsList ={productsLit} searchText={searchText} inStockOnly={inStockOnly} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        userData: state.UserData
    }
}

const mapDispatchStateToProp = (dispatch) => {
    return {
        getUserData: () => dispatch(getUserData()),
    }
}
export default connect(mapStateToProp, mapDispatchStateToProp)(ProductsListComponents);