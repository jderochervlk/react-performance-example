import * as _ from 'lodash/fp'
import { useEffect, useState } from 'react'

/**
 * Always try and pass in primitive types for props for the best performance
 * string, number, bool, etc...
 */
const Spread = ({ foo, bar }) => (
    <div>
        {foo} {bar}
    </div>
)

export default Spread
