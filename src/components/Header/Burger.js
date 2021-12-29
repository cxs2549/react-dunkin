import styled from 'styled-components'
import tw from 'twin.macro'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'

const StyledBurger = styled.div.attrs({ className: ''  })`
& { 
// h1 { ${tw`text-4xl`} }
}
`
const Burger = () => {
    const [isOpen, setIsOpen] = useState(false)
return (
<StyledBurger>
    <Hamburger toggle={setIsOpen} toggled={isOpen} color="#D2296F" />
</StyledBurger>
)
}
export default Burger