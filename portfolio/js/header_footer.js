var header = document.getElementById('header');
var footer = document.getElementById('footer');

var headerContent = document.createElement('DIV');
var logo = document.createElement('A');
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

logo.setAttribute('href', 'index.html');
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
nav.appendChild(portfolioBtn);
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
});

var photoCredits =[];

function generateCredits(photoCreditsInfo){
	if(photoCreditsInfo.length>0){
		var creditsBtn = document.createElement("DIV");
		creditsBtn.id="photoCreditsBtn";
		creditsBtn.innerText = "Photo Credits";
		footer.appendChild(creditsBtn);
		var credits = document.getElementById('photoCredits');
		var credits = document.getElementById('photoCredits');
		creditsBtn.addEventListener('click', function(){
			if(credits.style.display == 'flex'){
				credits.style.display = 'none';
			}
			else{
				credits.style.display = 'flex';
			}
		});
		document.getElementById('mainContent').addEventListener('click', function(){
			if(credits.style.display == 'flex'){
				credits.style.display = 'none';
			}
		});
		
	}
	for(let i=0; i<photoCreditsInfo.length; i++){
		var credit = document.createElement("DIV");
		credit.className = 'photoCredit';
		var creditOriginal = document.createElement("IMG");
		creditOriginal.src = photoCreditsInfo[i].original;
		var creditLink = document.createElement("A");
		creditLink.setAttribute('href', photoCreditsInfo[i].link);
		creditLink.innerHTML = "'"+photoCreditsInfo[i].title+"'<br />by "+photoCreditsInfo[i].photographer;
		
		credit.appendChild(creditOriginal);
		credit.appendChild(creditLink);
		
		credits.appendChild(credit);
		
	}
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