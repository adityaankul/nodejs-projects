import React, { Component } from 'react'

export class Parent extends Component {

    callParent(childName){
        console.log(`Calling Parent from ${childName}`)
    }
    render() {
        return (
            <div>
                <h1>This is Parent Component</h1>
                <Child callParent={this.callParent} name="Parent"/>
            </div>
        )
    }
}

export default Parent
