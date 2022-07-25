import { useEffect, useState } from 'react'
import OneChild from './OneChild'
import * as _ from 'lodash/fp'
import OneSpread from './OneSpread'

const OneContainer = () => {
    const [val, setVal] = useState({})

    setInterval(() => {
        const newVal = { one: 'foo', two: 'bar' }
        setVal({ one: 'foo', two: 'bar' })
        // setVal((prev) => (_.isEqual(newVal, prev) ? prev : newVal))
    }, 2000)

    useEffect(() => {
        console.log('rendering one')
    }, [val])

    return (
        <div>
            <h1>One</h1>
            <OneChild data={val} />
            <OneSpread foo={val.one} bar={val.two} />
        </div>
    )
}

export default OneContainer
