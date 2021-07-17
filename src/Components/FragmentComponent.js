import React, { Component, Fragment } from 'react'

export default class FragmentComponent extends Component {
    render() {
        return (
            <Fragment>
                <div className="first-div">
                    Div one content
                </div>
                <div className="second-div">
                    Div second content
                </div>
                <div className="third-div">
                    Div third content
                </div>
            </Fragment>

        )
    }
}
