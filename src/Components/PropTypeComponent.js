import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class PropTypeComponent extends Component {
    render() {
        return (
            <div>
                Prop types
                {this.props.name.toUpperCase()}
                {this.props.data.name.toUpperCase()}
                {this.props.render()}
            </div>
        )
    }
}

PropTypeComponent.defaultProps = {
    name: "React"
}

PropTypeComponent.propTypes = {
    data: PropTypes.object,
    name: PropTypes.string,
    handleChange: PropTypes.func,
    products: PropTypes.array
}

