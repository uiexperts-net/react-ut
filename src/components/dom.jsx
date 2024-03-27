import React, { useState } from "react"

export const DOMTesting = () => {
    const [isConnected, setConnect] = useState('NO');

    return (
        <div data-testid='root'>
            <h1> DOM Testing</h1>
            <div>Connect Status : <span data-testid='connect-status'>Status:{isConnected}</span></div>
            <button onClick={()=>setConnect('YES')}>Connect</button>
        </div>
    )

}