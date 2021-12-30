import styled from 'styled-components'
import tw from 'twin.macro'
const StyledLinksLeft = styled.nav.attrs({ className: 'w-full'  })`
li {
    font-family: 'Fredoka One', cursive;
    ${tw`text-center cursor-pointer`}
}
`
const LinksLeft = () => {
return (
<StyledLinksLeft>
    <ul className="grid grid-cols-3 xl:gap-3 items-center justify-between w-full max-w-sm md:max-w-md font-bold uppercase text-sm md:text-base mx-auto xl:mx-0">
        <li>
            menu
        </li>
        <li>
            <p className="xl:hidden">delivery</p>
            <p className="hidden xl:block">location</p>
        </li>
        <li>
            <p className="xl:hidden">dd perks</p>
            <p className="xl:block hidden">delivery</p>

        </li>
    </ul>
</StyledLinksLeft>
)
}
export default LinksLeft