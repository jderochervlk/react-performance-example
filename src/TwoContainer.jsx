import { useEffect, useState } from 'react'
import { Map } from 'immutable'
import TwoChild from './TwoChild'
import TwoSpread from './TwoSpread'

const TwoContainer = () => {
    const [val, setVal] = useState(Map({}))

    setInterval(() => {
        setVal(prev => {
            const newVal = Map({ one: 'foo', two: 'bar' })
            return prev.mergeDeep(newVal)
        })
    }, 2000)

    useEffect(() => {
        console.log('rendering two')
    }, [val])

    return (
        <div>
            <h1>Two</h1>
            <TwoChild data={val} />
            <TwoSpread foo={val.get('one')} bar={val.get('two')} />
        </div>
    )
}

export default TwoContainer
