import * as _ from 'lodash/fp'
import { useEffect, useState } from 'react'

const TwoChild = ({ data }) => {
    const foo = data.get('one')
    const bar = data.get('two')

    console.log('rendering TwoChild')

    return (
        <div>
            {foo} {bar}
        </div>
    )
}

export default TwoChild
