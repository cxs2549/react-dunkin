import styled from 'styled-components'
import tw from 'twin.macro'
const StyledLinksRight = styled.nav.attrs({ className: 'w-full hidden xl:block'  })`
li {
    font-family: 'Fredoka One', cursive;
    ${tw`text-center cursor-pointer`}
}
`
const LinksRight = () => {
return (
<StyledLinksRight>
    <ul className="grid grid-cols-3 xl:gap-3 items-center justify-between w-full max-w-lg font-bold uppercase text-sm xl:text-base mx-auto xl:ml-auto xl:mr-0">
        <li>
        dd perks
        </li>
        <li>
            dunkin' card
        </li>
        <li>
            shop
        </li>
    </ul>
</StyledLinksRight>
)
}
export default LinksRight