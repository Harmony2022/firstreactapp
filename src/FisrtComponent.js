import React from 'react'
import { useState} from 'react'

function FirstComponent() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>First Component</h2>
           {counter}
        </div>
    )
}

export default FirstComponent;