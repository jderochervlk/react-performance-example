import * as _ from 'lodash/fp'
import { useEffect, useState } from 'react'

const TwoSpread = ({ foo, bar }) => {
    console.log('rendering TwoSpread')

    return (
        <div>
            {foo} {bar}
        </div>
    )
}

export default TwoSpread
