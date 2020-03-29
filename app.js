const menuBtn = document.getElementById('menu-btn');
const sideNav = document.getElementById('side-nav');

sideNav.style.right = '-25rem';
menuBtn.onclick = () => {
	if (sideNav.style.right == '-25rem') {
		sideNav.style.right = '0';
	} else {
		sideNav.style.right = '-25rem';
	}
};
