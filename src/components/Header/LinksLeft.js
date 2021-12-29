import styled from 'styled-components'
import tw from 'twin.macro'
const StyledLinksLeft = styled.nav.attrs({ className: 'w-full'  })`
li {
    font-family: 'Fredoka One', cursive;
    ${tw`text-center`}
}
`
const LinksLeft = () => {
return (
<StyledLinksLeft>
    <ul className="grid grid-cols-3 items-center justify-between w-full max-w-sm font-bold uppercase text-sm mx-auto">
        <li>
            menu
        </li>
        <li>
            delivery
        </li>
        <li>
            dd perks
        </li>
    </ul>
</StyledLinksLeft>
)
}
export default LinksLeft