var highlights = document.getElementsByClassName('highlight');
for (let i=0;i<highlights.length;i++){
	var highlight = highlights[i];
	highlight.style.backgroundSize = 'cover';
	highlight.style.backgroundPosition = 'center';
	highlight.style.backgroundImage = projects[i].heroShot;
	
	var highlightHover = highlight.children[0];
	var highlightContent = highlightHover.children[0];
	for (let k=0; k<highlightContent.children.length; k++){
		switch (highlightContent.children[k].tagName){
			case 'H3':
				highlightContent.children[k].innerText = projects[i].title;
				break;
			case 'P':
				highlightContent.children[k].innerText = projects[i].shortDescription;
				break;
			case 'A':
				highlightContent.children[k].setAttribute('href', projects[i].link);
		}
	}
		

}

document.getElementsByTagName("BODY")[0].onresize = function() {hoverShowHide();};

function hoverShowHide(){
	if(window.innerWidth<1200){
		for (let i=0;i<highlights.length;i++){
			var highlight = highlights[i];
			var highlightHover = highlight.children[0];
			highlightHover.style.display = 'flex';	

			highlight.removeEventListener('mouseover', showHighlightInfo);
			highlight.removeEventListener('mouseout', hideHighlightInfo);
		}
		
	}
	else{
		for (let i=0;i<highlights.length;i++){
			var highlight = highlights[i];
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
	currentHighlight.children[0].style.display = 'flex';
}
function hideHighlightInfo(){
	for (let i=0;i<highlights.length;i++){
		highlights[i].children[0].style.display = 'none';
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





hoverShowHide();


