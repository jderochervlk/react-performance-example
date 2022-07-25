import * as ReactDOM from 'react-dom/client'
import { Map } from 'immutable'
import { useMemo, useEffect, useState } from 'react'
import ObjectContainer from './ObjectContainer'
import EqualsContainer from './EqualsContainer'
import MapContainer from './MapContainer'

const App = () => (
    <div>
        <ObjectContainer />
        <EqualsContainer />
        <MapContainer />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
