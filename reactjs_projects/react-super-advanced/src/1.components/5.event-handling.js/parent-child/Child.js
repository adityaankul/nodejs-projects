import React from 'react'
function Child(props){
    return(
        <div>
            <button onClick={() => props.callParent('Child Component')}>Call Parent</button>
        </div>
    )
}