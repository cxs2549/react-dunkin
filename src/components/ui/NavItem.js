import styled from 'styled-components'
import tw from 'twin.macro'

const StyledNavItem = styled.li.attrs({ className: '' })`
    font-family: 'Fredoka One', cursive;
    ${tw`cursor-pointer flex items-center justify-center font-bold uppercase text-sm md:text-base`};
    p {
        ${tw`border-b-2 text-center border-transparent transition-colors duration-200`};
        /* max-width: 50%; */
        max-height: min-content;
        /* max-width: min-content; */
    }
    &:hover p {
        color: #D2296F;
        border-bottom: 2px solid #D2296F;
        @media (min-width: 768px) {
        border-bottom: 3px solid #D2296F;
        }
    }
`
const NavItem = ({text, sm}) => {
	return (
		<StyledNavItem>
			<p className={`${sm && 'text-xs'}`}>{text}</p>
		</StyledNavItem>
	)
}
export default NavItem
