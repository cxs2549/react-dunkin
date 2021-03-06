import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useOnClickOutside from 'use-onclickoutside'
import NavItem from '../ui/NavItem'
import Button from '../ui/Button'

const subMenuAnimate = {
	enter: {
		opacity: 1,
		pointerEvents: 'all',
		x: 0,
		transition: {
			duration: 0.3
		},
		display: 'block'
	},
	exit: {
		opacity: 0,
		pointerEvents: 'none',
		x: -15,
		transition: {
			duration: 0.3
		},
		transitionEnd: {
			display: 'none'
		}
	}
}

const links = [ 'menu', 'delivery', 'dd perks', 'locations', 'shop', `dunkin' card`, 'careers' ]

const StyledBurger = styled.div.attrs({ className: 'xl:hidden' })`

    button, span, li {
        font-family: 'Fredoka One', cursive;
    }
	li {
		height: 34px;
	}
	li p {
		max-width: min-content;
		white-space: nowrap;
		transition: all 0.2s ease;
	}
	li:hover {
		p {

			color: #D2296F;
			border-bottom: 3px solid #D2296F;
			@media (min-width: 768px) {
			border-bottom: 3px solid #D2296F;
	
			}
		}
    }

`
const Burger = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleOpen = () => {
		setIsOpen(!isOpen)
		document.body.classList.toggle('no-flow')
	}
	const handleClose= () => {
		setIsOpen(false)
		document.body.classList.remove('no-flow')
	}
	const ref = useRef()
	const Menu = ({ children }) => (
		<motion.div
			variants={subMenuAnimate}
			initial="exit"
			animate={isOpen ? 'enter' : 'exit'}
			exit="exit"
			className="fixed top-[100px] left-0 bg-white w-full h-screen z-10"
		>
			{children}
		</motion.div>
	)
	useOnClickOutside(ref, handleClose)
	return (
		<StyledBurger ref={ref}>
			<Hamburger toggle={handleOpen} toggled={isOpen} color="#D2296F" />
			<AnimatePresence>
				{isOpen && (
					<Menu>
						<div className="bg-[#F9F5F2] p-4">
							<div className="flex flex-col items-center justify-center">
								<div className="flex gap-4 mb-2">
									<Button text="sign up" inverted />
									<Button text="sign in" />
									
								</div>
								<p className="text-xs font-medium opacity-80 mb-1">
									Not a DD Perks member?
								</p>
								<span className="uppercase font-bold text-xs text-brandPink hover:underline cursor-pointer">
									learn more
								</span>
							</div>
						</div>
						<ul className="px-8 font-bold text-xl uppercase py-4 flex flex-col gap-6">
							{links.map((link) => (
								<NavItem text={link} />
							))}
						</ul>
					</Menu>
				)}
			</AnimatePresence>
		</StyledBurger>
	)
}
export default Burger
