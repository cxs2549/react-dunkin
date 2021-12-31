import styled from 'styled-components'
import tw from 'twin.macro'
import location from '../../assets/location.png'
import find from '../../assets/find.png'
import Button from '../../components/ui/Button'

import { BsTelephone } from 'react-icons/bs'

const StyledVisit = styled.div.attrs({ className: 'py-10 md:py-0 border-b' })`
h1 { 
    ${tw`text-4xl xl:text-5xl uppercase font-extrabold text-center`} 
}
`
const Visit = () => {
	return (
		<StyledVisit>
			<div className="max-w-[1440px] mx-auto px-4 md:px-0 md:flex">
				<div className="hidden md:block w-10/12">
					<img src={find} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="flex flex-col items-center xl:justify-center gap-1  w-full md:pb-8 md:pt-4">
					<img src={location} alt="" className="md:hidden" />
					<h1 className="text-[hsl(15.7,_85.9%,_58.7%)] mt-4">come visit</h1>
					<p className="xl:text-xl">Find a Dunkin' Near You</p>
					<div className="mt-4 flex flex-col items-center gap-1">
						<span className="text-xs text-brandPink font-medium">CLOSEST DUNKIN'®</span>
						<p className="text-brandPink mt-1">1614 S Crenshaw Blvd</p>
						<span>Los Angeles, CA 90019</span>
						<p>Today: 5:00am - 5:00pm</p>
						<div className="flex items-center gap-2 mt-3 mb-8">
							<BsTelephone size={24} className="text-brandPink" />
							<span className="text-sm font-medium">Phone:</span>
							<Button text="view details" inverted />
						</div>
						<Button text="view all locations" lg />
					</div>
				</div>
			</div>
		</StyledVisit>
	)
}
export default Visit
