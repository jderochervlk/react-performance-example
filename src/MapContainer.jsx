import { useEffect, useState } from 'react'
import { Map, mergeDeep } from 'immutable'
import Two from './MapComponent'
import Spread from './SpreadComponent'

const MapContainer = () => {
    const [val, setVal] = useState(Map({}))

    setInterval(() => {
        setVal(prev => {
            const newVal = Map({ one: 'foo', two: 'bar' })
            // instead of trying to compare the new state and old state we use mergeDeep. It's
            return prev.mergeDeep(newVal)
        })
    }, 2000)

    useEffect(() => {
        console.log('rendering Map')
    }, [val])

    return (
        <div>
            <h1>Immutable.js Map</h1>
            <Two data={val} />
            <Spread foo={val.get('one')} bar={val.get('two')} />
        </div>
    )
}

export default MapContainer
