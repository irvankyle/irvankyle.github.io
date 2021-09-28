var header = document.getElementById('header');
var footer = document.getElementById('footer');

var headerContent = document.createElement('DIV');
var logo = document.createElement('DIV');
var icon = document.createElement('DIV');
var logoText = document.createElement('DIV');
var logoTitle = document.createElement('H1');
var logoSubtitle = document.createElement('H2');

headerContent.className = 'headerContent';

icon.className = 'headerIcon';

logoTitle.innerText = "Kyle Irvan";
logoSubtitle.innerText = "INSTRUCTIONAL DESIGNER";

logoText.appendChild(logoTitle);
logoText.appendChild(logoSubtitle);

logo.appendChild(icon);
logo.appendChild(logoText);
logo.className = 'headerLogo';

var nav = document.createElement('DIV');
var homeBtn = document.createElement('A');
var portfolioBtn = document.createElement('A');
var contactBtn = document.createElement('A');

homeBtn.innerText = "Home";
portfolioBtn.innerText = "Portfolio";
contactBtn.innerText = "Contact";

homeBtn.setAttribute('href', 'index.html');
portfolioBtn.setAttribute('href', 'portfolio.html');
contactBtn.setAttribute('href', 'contact.html');

nav.appendChild(homeBtn);
//nav.appendChild(portfolioBtn);
nav.appendChild(contactBtn);

var mobileNav = nav.cloneNode(true);

nav.className = 'nav';
mobileNav.className = 'mobileNav'

headerContent.appendChild(logo);
headerContent.appendChild(nav);
headerContent.appendChild(mobileNav);
header.appendChild(headerContent);

var footerLogo = logo.cloneNode(true);

footer.prepend(footerLogo);

var hamburger = document.createElement('DIV');
hamburger.id = 'hamburger';


hamburger.addEventListener('click',function(){
	if(mobileNav.style.display == "block"){
		mobileNav.style.display = 'none';
	}
	else{mobileNav.style.display = 'block';}
});
document.getElementById('mainContent').addEventListener('click', function(){
	if(mobileNav.style.display == "block"){
		mobileNav.style.display = 'none';
	}
	if(credits.style.display == 'flex'){
		credits.style.display = 'none';
	}
});

if(document.getElementById('photoCreditsBtn')){
	var creditsBtn = document.getElementById('photoCreditsBtn');
	var credits = document.getElementById('photoCredits');
	creditsBtn.addEventListener('click', function(){
		if(credits.style.display == 'flex'){
			credits.style.display = 'none';
		}
		else{
			credits.style.display = 'flex';
		}
	});
}

window.addEventListener('resize', mobileNavSwitch);

function mobileNavSwitch(){
	if(window.innerWidth<900){
		if(headerContent.contains(nav)){
			headerContent.removeChild(nav);
			headerContent.appendChild(hamburger);
		}
	}
	else{
		if(headerContent.contains(hamburger)){
			headerContent.removeChild(hamburger);
			headerContent.appendChild(nav);
		}
	}
}
mobileNavSwitch();