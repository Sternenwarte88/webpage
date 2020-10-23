const mobileNavBtn = document.querySelector('.fa-bars');
const mobileMainNav = document.querySelector('.mobile-main-nav');
const dropDownBtn = document.querySelector('.mobile');
const dropDownContent = document.querySelector('.mobile-content');

function displayMobileNav() {
	mobileMainNav.classList.toggle('display-flex');
}

function dropdownTest() {
	dropDownContent.classList.toggle('display-block');
}

mobileNavBtn.addEventListener('click', displayMobileNav);
dropDownBtn.addEventListener('click', dropdownTest);

(function() {
	window.__insp = window.__insp || [];
	__insp.push(['wid', 775028669]);
	var ldinsp = function(){
	if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=775028669&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
	setTimeout(ldinsp, 0);
	})();