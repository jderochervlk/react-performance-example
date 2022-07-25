import * as _ from 'lodash/fp'
import { useEffect, useState } from 'react'

const ObjectComponent = ({ data }) => {
    const foo = _.prop('one', data)
    const bar = _.prop('two', data)

    return (
        <div>
            {foo} {bar}
        </div>
    )
}

export default ObjectComponent
