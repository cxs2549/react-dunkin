import styled from 'styled-components'
import NavItem from '../ui/NavItem'

const StyledLinksLeft = styled.nav.attrs({ className: 'w-full' })`
`
const LinksLeft = () => {
	return (
		<StyledLinksLeft>
			<ul className="grid grid-cols-3 xl:gap-3 items-center justify-between w-full max-w-sm md:max-w-md mx-auto xl:mx-0">
				<NavItem text="menu" />
				<div className="hidden xl:block">
					<NavItem text="locations" />
				</div>
				<NavItem text="delivery" />
				<div className="xl:hidden">
					<NavItem text="dd perks" />
				</div>
			</ul>
		</StyledLinksLeft>
	)
}
export default LinksLeft
