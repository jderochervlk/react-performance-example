import * as ReactDOM from 'react-dom/client'
import { Map } from 'immutable'
import { useMemo, useEffect, useState } from 'react'
import OneContainer from './OneContainer'
import TwoContainer from './TwoContainer'

const App = () => (
    <div>
        <OneContainer />
        <TwoContainer />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
