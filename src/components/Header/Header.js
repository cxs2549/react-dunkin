import styled from 'styled-components'
import Burger from './Burger'
import logo from '../../assets/logo.jpg'
import { GrLocation } from 'react-icons/gr'
import LinksLeft from './LinksLeft'

const StyledHeader = styled.div.attrs({ className: 'bg-white' })`
    svg path {
        stroke: #D2296F;
    }
`
const Header = () => {
	const Container = ({ children, height, classes }) => (
		<div className={`max-w-7xl mx-auto px-6 xl:px-0 flex items-center justify-between relative ${height} ${classes}`}>
			{children}
		</div>
	)
	const Logo = () => (
		<div className="absolute left-1/2 transform -translate-x-1/2">
			<img src={logo} alt="" className="w-40" />
		</div>
	)
	return (
		<StyledHeader>
			<Container height="h-24" classes="border-b">
				<Burger />
				<Logo />
				<GrLocation size={32} />
			</Container>
            <Container height="h-12" classes="border-b">
                <LinksLeft />
            </Container>
		</StyledHeader>
	)
}
export default Header
