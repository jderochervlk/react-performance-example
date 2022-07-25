import * as _ from 'lodash/fp'
import { useEffect, useState } from 'react'

const OneSpread = ({ foo, bar }) => {
    console.log('rendering OneSpread')

    return (
        <div>
            {foo} {bar}
        </div>
    )
}

export default OneSpread
