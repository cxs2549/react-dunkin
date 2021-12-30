import styled from 'styled-components'
import jetBlue from '../../assets/jet-blue.png'
import baskin from '../../assets/baskin.png'
import nhl from '../../assets/nhl.png'
import logo from '../../assets/logo-2.png'

const StyledFooter = styled.footer.attrs({ className: '' })`
h2 {
    position: relative;
    &::before {
        content: '';
        position: absolute;
        right: 110%;
        top: 50%;
        transform: translateY(-50%);
        height: 1px;
        width: 120px;
        background-color: #CBCBCB;
    }
    &::after {
        content: '';
        position: absolute;
        left: 110%;
        top: 50%;
        transform: translateY(-50%);
        height: 1px;
        width: 120px;
        background-color: #CBCBCB;
    }
}
`
const quickLinks = [
	'press room',
	'mobile app',
	'corporate',
	'sustainability',
	'site map',
	'contact us',
	'about us',
	'franchising'
]

const followUs = [ 'facebook', 'twitter', 'instagram', 'youtube', 'pinterest' ]

const siteLinks = [
	'terms of use',
	'privacy policy',
	'ca privacy',
	'your ad choices',
	'do not sell my personal info',
	'ca transparency in supply chains act'
]

const Footer = () => {
	const Container = ({ children }) => (
		<div
			className={`max-w-[1150px] mx-auto px-4 xl:px-0 flex flex-col items-center justify-between relative py-10 gap-16`}
		>
			{children}
		</div>
	)
	return (
		<StyledFooter>
			<Container>
				{/* logo */}
				<img src={logo} alt="" className="w-40" />
				<div className="flex flex-col xl:flex-row items-center justify-between gap-16 w-full">
					{/* quick links */}
					<div className="w-full">
						<ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-16 w-10/12 mx-auto items-center font-semibold uppercase text-sm">
							{quickLinks.map((link, index) => <li key={index}>{link}</li>)}
						</ul>
					</div>
					{/* follow us */}
					<div className="w-full px-4 md:px-8 xl:px-0 md:max-w-md xl:max-w-sm">
						<ul className="flex justify-between text-center font-semibold uppercase text-xl">
							{followUs.map((link, index) => (
								<li
									key={index}
									className=""
								>
									<div className="bg-[#EA2D79] cursor-pointer text-white rounded-full w-10 h-10 grid place-items-center">
										<i className={`fa fa-${link}`} aria-hidden="true" />
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* our partners */}
				<div className="flex items-center justify-between w-full max-w-xs md:max-w-xl mx-auto">
					<img src={jetBlue} alt="" />
					<img src={baskin} alt="" />
					<img src={nhl} alt="" />
				</div>
				{/* site links */}
				<div className="w-full text-[11px] xl:w-9/12 xl:mx-auto ">
					<ul className="grid grid-cols-2 md:grid-cols-3 xl:flex xl:flex-wrap xl:justify-center gap-y-2 gap-x-6 w-10/12 xl:w-full mx-auto font-semibold uppercase">
						{siteLinks.map((link, index) => <li key={index} className="xl:whitespace-nowrap">{link}</li>)}
					</ul>
				</div>
				{/* copyright */}
				<span className="text-center text-[11px]">
					©2021 CxS Development for DD IP Holder LLC
				</span>
			</Container>
		</StyledFooter>
	)
}
export default Footer
