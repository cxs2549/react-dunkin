import styled from 'styled-components'
import tw from 'twin.macro'
const StyledLinksLeft = styled.nav.attrs({ className: 'w-full'  })`
li {
    font-family: 'Fredoka One', cursive;
    ${tw`text-center cursor-pointer flex justify-center items-center h-10`}
    p {
        ${tw`border-b-2 border-transparent whitespace-nowrap transition-colors duration-200`};
        max-width: min-content;
        max-height: min-content;
        
    }
    &:hover p {
        color: #D2296F;
        border-bottom: 2px solid #D2296F;
        @media (min-width: 768px) {
        border-bottom: 3px solid #D2296F;
        }
    }
}

`
const LinksLeft = () => {
return (
<StyledLinksLeft>
    <ul className="grid grid-cols-3 xl:gap-3 items-center justify-between w-full max-w-sm md:max-w-md font-bold uppercase text-sm md:text-base mx-auto xl:mx-0">
        <li>
            <p className="">menu</p>
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