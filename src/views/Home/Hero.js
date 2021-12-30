import styled from 'styled-components'
import tw from 'twin.macro'
import coffee from '../../assets/coffee.png'
import donut from '../../assets/donut.png'

const StyledHero = styled.div.attrs({ className: 'flex items-center justify-center' })`
h1 { 
    ${tw`text-5xl xl:text-6xl uppercase font-extrabold text-center`} 
}
p {
    ${tw`text-center text-sm md:text-lg xl:text-xl`}
}
img {
		/* max-width: 50%; */
		${tw`w-full absolute hidden md:block`}
		object-fit: contain;
}
`
const Hero = () => {
	return (
		<StyledHero>
			<div className="max-w-[1440px] mx-auto relative w-full overflow-hidden">
				<img src={coffee} alt="" className="left-0 top-1/2 transform -translate-y-1/2 max-w-[240px]" />
				<div className="flex flex-col items-center py-9 border-b gap-2 ">
					<h1 className="text-[hsl(15.7,_85.9%,_58.7%)]">bring on</h1>
					<h1 className="text-[#D2296F]">the perks</h1>
					<p className="font-normal"> DD Perks rewards members on every Dunkin' run. </p>
					<div className="flex flex-col gap-4 my-2 text-base w-full max-w-[190px]">
						<button className="font-bold border-[#D2296F] border-2 text-[#D2296F]  uppercase rounded-full  px-8 py-2 bg-white hover:bg-[#D2296F] hover:text-white transition-all duration-200 ">
							sign up
						</button>
						<button className="bg-[#D2296F] text-white font-bold  uppercase rounded-full  px-8 py-2 hover:bg-white hover:text-[#D2296F] transition-colors duration-200 border-2 border-[#D2296F] ">
							learn more
						</button>
					</div>
				</div>
				<img src={donut} alt="" className="right-0 top-1/2 transform -translate-y-1/2 max-w-[240px] " />
			</div>
		</StyledHero>
	)
}
export default Hero
