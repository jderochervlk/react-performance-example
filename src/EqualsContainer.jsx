import { useEffect, useState } from 'react'
import ObjectComponent from './ObjectComponent'
import * as _ from 'lodash/fp'
import Spread from './SpreadComponent'

const EqualsContainer = () => {
    const [val, setVal] = useState({})

    setInterval(() => {
        const newVal = { one: 'foo', two: 'bar' }
        // _.isEqual will do a deep comparison for us and only set the state to the new value if there is a change
        setVal(prev => (_.isEqual(newVal, prev) ? prev : newVal))
    }, 2000)

    useEffect(() => {
        console.log('rendering isEquals')
    }, [val])

    return (
        <div>
            <h1>Lodash Equals</h1>
            <ObjectComponent data={val} />
            <Spread foo={val.one} bar={val.two} />
        </div>
    )
}

export default EqualsContainer
