import styled from 'styled-components'
import tw from 'twin.macro'

const StyledButton = styled.button.attrs({
	className:
		'font-bold   uppercase rounded-full  px-8 h-10 transition-all duration-200 border-2 border-brandPink'
})`
  font-family: 'Fredoka One', cursive;
`
const Button = ({ text, inverted, lg }) => {
	return (
		<StyledButton
			inverted={inverted}
			className={`${inverted
				? '  text-brandPink bg-white hover:bg-brandPink hover:text-white'
				: 'bg-brandPink text-white hover:bg-white hover:text-brandPink'} ${lg ? 'text-base h-12' : 'text-sm'}`}
		>
			{text}
		</StyledButton>
	)
}
export default Button
