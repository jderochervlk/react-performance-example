import { useEffect, useState } from 'react'
import One from './ObjectComponent'
import * as _ from 'lodash/fp'
import Spread from './SpreadComponent'

const ObjectContainer = () => {
    const [val, setVal] = useState({})

    setInterval(() => {
        // Just sets a new JS object to the state value
        setVal({ one: 'foo', two: 'bar' })
    }, 2000)

    useEffect(() => {
        console.log('rendering Object')
    }, [val]) // val is different on every render even though the object values have not changed

    return (
        <div>
            <h1>JS Object</h1>
            <One data={val} />
            <Spread foo={val.one} bar={val.two} />
        </div>
    )
}

export default ObjectContainer
