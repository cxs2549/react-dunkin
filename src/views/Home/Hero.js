import styled from 'styled-components'
import tw from 'twin.macro'
import coffee from '../../assets/coffee.png'
import donut from '../../assets/donut.png'
import Button from '../../components/ui/Button'

const StyledHero = styled.div.attrs({ className: 'flex items-center justify-center' })`
h1 { 
    ${tw`text-5xl xl:text-6xl uppercase font-extrabold text-center`} 
}
p {
    ${tw`text-center text-sm md:text-lg xl:text-2xl mb-1`}
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
					<h1 className="text-brandOrange">bring on</h1>
					<h1 className="text-brandPink">the perks</h1>
					<p className="font-normal"> DD Perks rewards members on every Dunkin' run. </p>
					<div className="flex flex-col gap-4 my-2 text-base w-full max-w-[190px]">
						<Button text="sign up" lg />
						<Button text="learn more"  inverted lg />
					</div>
				</div>
				<img src={donut} alt="" className="right-0 top-1/2 transform -translate-y-1/2 max-w-[240px] " />
			</div>
		</StyledHero>
	)
}
export default Hero
