import styled from 'styled-components'
import tw from 'twin.macro'
const StyledLinksRight = styled.nav.attrs({ className: 'w-full hidden xl:block'  })`
li {
    font-family: 'Fredoka One', cursive;
    ${tw`text-center cursor-pointer flex justify-center items-center h-10`}
    p {
        ${tw`border-b-2 border-transparent whitespace-nowrap transition-colors duration-200`};
        max-width: min-content;
        
    }
    &:hover p {
        color: #D2296F;
        border-bottom: 2px solid #D2296F;
        @media (min-width: 1280px) {
        border-bottom: 3px solid #D2296F;

        }
    }
}
`
const LinksRight = () => {
return (
<StyledLinksRight>
    <ul className="grid grid-cols-3 xl:gap-3 items-center justify-between w-full max-w-lg font-bold uppercase text-sm xl:text-base mx-auto xl:ml-auto xl:mr-0">
        <li>
        <p>dd perks</p>
        </li>
        <li>
            <p>dunkin' card</p>
        </li>
        <li>
            <p>shop</p>
        </li>
    </ul>
</StyledLinksRight>
)
}
export default LinksRight