import React, { Component } from 'react'

export default class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSet: [
                {name: "React", createdBy: "Facebook", year: 2012, id:1},
                {name: "Angular", createdBy: "Google", year: 2010, id:2}
            ]
        }
    }
    render() {
        const data = this.state.dataSet.filter((x) => x.id === 1);
        const obj = this.state.dataSet.find((x) => x.id === 2);
        const index = this.state.dataSet.findIndex((x) => x.id === 2);
        console.log(data, obj, index);
        return (
            <div>
                {this.state.dataSet.map((item,index) => {
                   return <li key={item.name + index}>{item.name} - {item.createdBy} - {item.year}</li>
                }
                )}
            </div>
        )
    }
}
