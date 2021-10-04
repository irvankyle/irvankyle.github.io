var highlights = document.getElementById('highlights');
for (let i=0; i<4; i++){
	if(projects[i]){
		var highlight = document.createElement("DIV");
		highlight.className = 'highlight';
		highlight.style.backgroundSize = 'cover';
		highlight.style.backgroundPosition = 'center';
		highlight.style.backgroundImage = projects[i].heroShot;
		var highlightHover = document.createElement("DIV");
		highlightHover.className = 'highlightHover';
		var highlightContent = document.createElement("DIV");
		highlightContent.className = 'highlightContent';
		var highlightTitle = document.createElement("H3");
		highlightTitle.innerText = projects[i].title;
		var highlightDescription = document.createElement("P");
		highlightDescription.innerText = projects[i].shortDescription;
		var highlightBtn = document.createElement("A");
		highlightBtn.setAttribute('href', projects[i].link);
		highlightBtn.innerText = 'View Project';
		
		highlightContent.appendChild(highlightTitle);
		highlightContent.appendChild(highlightDescription);
		highlightContent.appendChild(highlightBtn);
		highlightHover.appendChild(highlightContent);
		highlight.appendChild(highlightHover);
		highlights.appendChild(highlight);
		
		if(projects[i].heroSource){
			photoCredits.push(projects[i].heroSource);			
		}
	}
}
generateCredits(photoCredits);
var displayedHighlights = document.getElementsByClassName('highlight');


document.getElementsByTagName("BODY")[0].onresize = function() {hoverShowHide();};

function hoverShowHide(){
	if(window.innerWidth<1200){
		for (let i=0;i<displayedHighlights.length;i++){
			var highlight = displayedHighlights[i];
			var highlightHover = highlight.children[0];
			highlightHover.style.display = 'flex';	

			highlight.removeEventListener('mouseover', showHighlightInfo);
			highlight.removeEventListener('mouseout', hideHighlightInfo);
		}
		
	}
	else{
		for (let i=0;i<displayedHighlights.length;i++){
			var highlight = displayedHighlights[i];
			var highlightHover = highlight.children[0];
			highlightHover.style.display = 'none';
			
			highlight.addEventListener('mouseover', showHighlightInfo);
			highlight.addEventListener('mouseout', hideHighlightInfo);
		}
	}
}


function showHighlightInfo(){
	var x = event.clientX, y = event.clientY,
	currentHighlight = document.elementFromPoint(x, y);
	if(currentHighlight.className == 'highlight'){
		currentHighlight.children[0].style.display = 'flex';
	}
}
function hideHighlightInfo(){
	for (let i=0;i<displayedHighlights.length;i++){
		displayedHighlights[i].children[0].style.display = 'none';
	}
}

var skillList = document.getElementById('skillsList');
for (let i=0; i<skills.length; i++){
	var skill = document.createElement("DIV");
	var skillIcon = document.createElement("DIV");
	var skillTitles = document.createElement("DIV");
	var skillTitle = document.createElement("H1");
	var skillSubtitle = document.createElement("H2");
	skill.className = 'skill';
	skillIcon.className = 'skillIcon';
	skillTitles.className = 'skillTitles';
	skillIcon.style.backgroundImage = skills[i].icon;
	skillTitle.innerText = skills[i].title;
	skillSubtitle.innerText = skills[i].subtitle;
	skill.appendChild(skillIcon);
	skillTitles.appendChild(skillTitle);
	skillTitles.appendChild(skillSubtitle);
	skill.appendChild(skillTitles);
	skillsList.appendChild(skill);
}

var profilePic = document.getElementById('photo');
profilePic.style.backgroundImage = profile.aboutPic;
var aboutText = document.getElementById('aboutText');
aboutText.innerHTML = profile.about;
var tagLine = document.getElementById('splash').children[1].children[2];
tagLine.innerText = profile.tagLine;






hoverShowHide();


