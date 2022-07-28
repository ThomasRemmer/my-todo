import {useState} from 'react'

function CardContainer() {
    const [list, setList] = useState([])
    const [noItems, setNoItems] = useState(true)

  return (
    <>{noItems && <p>Nothing to see yet... Add a task in the field above!</p>}</>
  )
}

export default CardContainer