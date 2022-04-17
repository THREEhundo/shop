const hamburger = document.querySelector('.menu')
const dropDownMenu = document.querySelector('.drop-down-menu')
const mobileListItems = document.querySelectorAll('.mobile-list-item')

function toggleMobileMenu() {
	dropDownMenu.classList.toggle('block')
	dropDownMenu.classList.toggle('none')
	document.body.classList.toggle('top-fixed')
}

hamburger.addEventListener('click', () => toggleMobileMenu())

mobileListItems.forEach((item) =>
	item.addEventListener('click', () => {
		toggleMobileMenu()
		hamburger.classList.toggle('opened')
	}),
)

const productImg = document.querySelector('.product-img')
const mq700 = window.matchMedia('(max-width: 700px)')

function productAnimation() {
	return productImg.classList.add('animate__animate', 'animate__fadeInRight')
}

function screenTest(e) {
	/*** e.matches checks to see if the viewport is 700px or less */
	e.matches && productImg
		? productImg.classList.add('animate__animated', 'animate__fadeInRight')
		: !e.matches && productImg
		? productImg.classList.remove('animate__animated', 'animate__fadeInRight')
		: ''
}

/*** Animates product on browser size change & window load */
mq700.addEventListener('change', screenTest)
document.addEventListener('DOMContentLoaded', function (e) {
	screenTest(mq700)
})

/*** Animates shop list items on load */
document.addEventListener('DOMContentLoaded', function (e) {
	const donutsList = document.querySelector('.donuts-list')
	return donutsList
		? donutsList.classList.add('animate__animated', 'animate__fadeIn')
		: ''
})

// ! Add event listener to freeze y scroll & close on escape
const modal = document.querySelector('#modal')
const loginBtn = document.querySelector('a[href="#login"]')
console.log(loginBtn)
const resetPasswordBtn = document.querySelector('a[href="#reset-password"]')
const body = document.querySelector('body')
const loginModal = document.querySelector('#login')
const resetPasswordModal = document.querySelector('#reset-password')
const createAccountModal = document.querySelector('#create-account')

// Opens Login Modal
loginBtn.addEventListener('click', (e) => {
	//body.style.overflowY = 'hidden'
	//modal.classList.toggle('hide')
	//modal.classList.add('login-pane')
	toggleModal()

	/**
	 *
	 * conditional (press escape key)
	 * 	- turn off body overflowY hidden
	 * 	- toggle hide on modal
	 * 	- toggle login-pane class on modal
	 *
	 *	conditional
	 */
})

// EventListener for closing Login Modal with Escape key if it's open
body.addEventListener('keydown', (e) => {
	console.log(e.key)
	return e.key === 'Escape' && !modal.classList.contains('hide')
		? toggleModal()
		: ''
})

// ! Only targets the Aside modal and not it's children
modal.addEventListener('click', (e) =>
	e.target === modal ? toggleModal() : '',
)

function toggleModal() {
	// turn off overflowY
	body.style.overflowY === 'hidden'
		? (body.style.overflowY = 'visible')
		: (body.style.overflowY = 'hidden')
	// toggle hide class
	modal.classList.toggle('hide')
	// toggle login-pane or add it
	modal.classList.contains('login-pane')
		? modal.classList.toggle('login-pane')
		: modal.classList.add('login-pane')
}
resetPasswordBtn.addEventListener('click', openForgotPasswordModal)
// When Login-Container is open & forgot password link is clicked
function openForgotPasswordModal() {
	//hide login section
	loginModal.classList.toggle('hide', 'login-container')
	resetPasswordModal.classList.toggle('hide')
	resetPasswordModal.classList.add('login-container')
}

/**
 * Create login module
 * 1. frosted background div
 * 2. container div
 * 3. welcome h1
 * 3. form
 * 4. email input
 * 5. password input
 * 6. sign in button
 * 7. forgot password? anchor tag
 * 8. create account anchor tag
 * 9. event listener on forgot password link
 * 9. JS add class display none to login
 * 10. add display: grid to forgot-password section
 * 11. event listener on create account link
 * 12. add display: grid to create account section
 * 13. login-container display: none
 */

/**
 * Forgot password module
 * 1. Reset password header
 * 2.email input
 * 3. send reset link button
 * 4. back to sign in anchor
 */

/**
 * Create account module
 * 1.Create Account Header
 * 2. First Name Input
 * 3. Last Name input
 * 4. email input
 * 5. Create Password Input
 * 6. Re-type password input
 * 7. Create Account Button
 * 8. Already have an account? Sign in anchor
 */
