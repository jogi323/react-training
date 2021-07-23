import React, { Component } from 'react';
import ProductsContext from "../ProductsContext";

function ProductRow (props) {
    return (
        <tr key={props.index+props.product.name} className={!props.product.stocked ? "out-of-stock" : ""}>
            <td>{props.product.category}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.stocked ? "Yes" : "Out of stock"}</td>
        </tr>
    )
}

export default class ProductsTableComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let elements = [];
        this.props.productsList.map((product, index) => {
            if (product.name.toLowerCase().indexOf(this.props.searchText) === -1 &&  product.category.toLowerCase().indexOf(this.props.searchText) === -1) {
                return;
            } 
            if (this.props.inStockOnly && !product.stocked) {
                return;
            }
            elements.push(<ProductRow  product={product} index={index} key={index+product.name}/>)
        })
        return (
            <div>
                   <ProductsContext.Consumer>
                        {
                            (products) => {
                                console.log(products);
                                return <h1>Testing123</h1>
                            }
                        }
                    </ProductsContext.Consumer> 
                Products Table:
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Category</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Available in Stcok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div>
        )
    }
}
