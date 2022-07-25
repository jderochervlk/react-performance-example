import * as _ from 'lodash/fp'
import { useEffect, useState } from 'react'

const OneChild = ({ data }) => {
    const foo = _.prop('one', data)
    const bar = _.prop('two', data)

    console.log('rendering OneChild')

    return (
        <div>
            {foo} {bar}
        </div>
    )
}

export default OneChild
