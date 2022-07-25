import * as _ from 'lodash/fp'
import { useEffect, useState } from 'react'

/**
 * @param {*} Map({ one: string, two: string })
 * @returns JSX
 */
const MapComponent = ({ data }) => {
    const foo = data.get('one')
    const bar = data.get('two')

    console.log('rendering MapComponent')

    return (
        <div>
            {foo} {bar}
        </div>
    )
}

export default MapComponent
