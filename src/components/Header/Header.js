import styled from 'styled-components'
import Burger from './Burger'
import logo from '../../assets/logo.jpg'
import { GrLocation } from 'react-icons/gr'
import {MdLocationOn} from 'react-icons/md'
import LinksLeft from './LinksLeft'
import LinksRight from './LinksRight'

const StyledHeader = styled.header`
    svg path {
		color: #D2296F;
    }
`
const Header = () => {
	const Container = ({ children, height, id }) => (
		<div
			id={id}
			className={`max-w-[1350px] mx-auto px-4 xl:px-0 flex items-center justify-between relative bg-white ${height}`}
		>
			{children}
		</div>
	)
	const Logo = () => (
		<a href="/" className="absolute left-1/2 transform -translate-x-1/2 xl:top-[87px] z-10 transition-transform duration-300">
			<img src={logo} alt="" className="w-40" />
		</a>
	)
	return (
		<StyledHeader>
			<div id="top" className="border-b">
				<Container height="h-[100px] xl:h-[60px]">
					<Burger />
					<Logo />
					<div className="w-12 h-12 grid place-items-center xl:hidden cursor-pointer">
						<MdLocationOn size={32} className="relative transform -translate-y-0.5" />
					</div>
					<div className="hidden xl:flex items-center h-full gap-4 ml-auto text-xs">
						<button className="font-bold border-[#D2296F] border-2 text-[#D2296F]  uppercase rounded-full  px-8 py-2 bg-white hover:bg-[#D2296F] hover:text-white transition-all duration-200 ">
							sign up
						</button>
						<button className="bg-[#D2296F] text-white font-bold  uppercase rounded-full  px-8 py-2 hover:bg-white hover:text-[#D2296F] transition-colors duration-200 border-2 border-[#D2296F]">
							sign in
						</button>
					</div>
				</Container>
			</div>
			<Container id="bottom" height="h-[40px] xl:h-[80px]">
				<LinksLeft />
				<LinksRight />
			</Container>
		</StyledHeader>
	)
}
export default Header
