
for (let i=0; i<projects.length; i++){
	if(projects[i]){
		var projBox = document.createElement("DIV");
		projBox.className = 'projBox';
		var projImg = document.createElement("DIV");
		projImg.className = 'projImg';
		projImg.style.backgroundSize = 'cover';
		projImg.style.backgroundPosition = 'center';
		projImg.style.backgroundImage = "url(" + projects[i].heroShot + ")";
		var projText = document.createElement('DIV');
		projText.className = 'projText';
		var projTitle = document.createElement("H3");
		projTitle.innerText = projects[i].title;
		var projDescription = document.createElement("P");
		projDescription.innerText = projects[i].shortDescription;
		var projBtn = document.createElement("A");
		projBtn.setAttribute('href', projects[i].id + ".html");
		projBtn.innerText = 'View Project';
		if(projects[i].sensitive == 'yes'){
			projTitle.innerHTML += "&nbsp <img src='img/lock.png' />";
		}
		
		
		projBox.appendChild(projImg);
		projText.appendChild(projTitle);
		projText.appendChild(projDescription);
		projText.appendChild(projBtn);	
		projBox.appendChild(projText);
		
		document.getElementById('projList').appendChild(projBox);
	}
}

