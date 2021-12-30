import styled from 'styled-components'
import Burger from './Burger'
import logo from '../../assets/logo.jpg'
import { GrLocation } from 'react-icons/gr'
import LinksLeft from './LinksLeft'
import LinksRight from './LinksRight'

const StyledHeader = styled.div.attrs({ className: 'bg-white border-b w-full' })`
    svg path {
        stroke: #D2296F;
    }
	button {
        font-family: 'Fredoka One', cursive;
    }
`
const Header = () => {
	const Container = ({ children, height }) => (
		<div
			className={`max-w-[1350px] mx-auto px-4 xl:px-0 flex items-center justify-between relative ${height}`}
		>
			{children}
		</div>
	)
	const Logo = () => (
		<div className="absolute left-1/2 transform -translate-x-1/2 xl:translate-y-[70px] transition-transform duration-300">
			<img src={logo} alt="" className="w-40" />
		</div>
	)
	return (
		<StyledHeader>
			<div className="border-b">
				<Container height="h-[100px] xl:h-[60px]">
					<Burger />
					<Logo />
					<div className="w-12 h-12 grid place-items-center xl:hidden">
						<GrLocation size={32} className="relative transform -translate-y-0.5" />
					</div>
					<div className="hidden xl:flex items-center h-full gap-4 ml-auto text-xs">
						<button className="font-bold h-10 border-[#D2296F] border-2 text-[#D2296F]  uppercase rounded-full  px-8 py-2 bg-white">
							sign up
						</button>
						<button className="bg-[#D2296F] text-white font-bold h-10  uppercase rounded-full  px-8 py-2">
							sign in
						</button>
					</div>
				</Container>
			</div>
			<Container height="h-[40px] xl:h-[80px]">
				<LinksLeft />
				<LinksRight />
			</Container>
		</StyledHeader>
	)
}
export default Header
