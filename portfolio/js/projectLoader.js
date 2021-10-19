var project = {};
if (document.getElementById('mainContent').className == 'project'){
	var projectId = window.location.href.substring(window.location.href.lastIndexOf('/')+1, window.location.href.length-5);
	for (let i=0; i<projects.length; i++){
		if (projects[i].id == projectId){
			project = projects[i];
		}
	}
	document.getElementById('heroImg').style.backgroundImage = "url(" + project.heroShot + ")";
	var projectDetails = document.getElementById('projectDetails')
	if(project.sensitive == 'yes'){
		projectDetails.innerHTML += "<h1>"+project.title+"&nbsp <img src='img/lock.png' /></h1>";
	}
	else{projectDetails.innerHTML += "<h1>"+project.title+"</h1>";}
	projectDetails.innerHTML += "<h2>Project Details</h2>";
	projectDetails.innerHTML += "<b>Solution Type:</b> " + project.type; 
	projectDetails.innerHTML += "<br /><b>Client:</b> " + project.client; 
	projectDetails.innerHTML += "<br /><b>Skills Used:</b> " + project.skills; 
	projectDetails.innerHTML += "<br /><b>Tools Used:</b> " + project.tools; 
	projectDetails.innerHTML += "<br /><b>Description:</b> " + project.shortDescription; 
	
	
	
	if(project.link){		
		projectDetails.innerHTML += "<br /><a class='solutionLink' target='_blank' href=" + project.link + ">View Solution</a>"; 
	}
	
	
	if(project.problem){
		document.getElementById('problem').innerHTML += project.problem;
	}
	else{
		document.getElementById('problem').style.display = 'none';
	}
	if(project.solution){
		document.getElementById('solution').innerHTML += project.solution;
	}
	else{
		document.getElementById('solution').style.display = 'none';
	}
	if(project.process){
		document.getElementById('process').innerHTML += project.process;
	}
	else{
		document.getElementById('process').style.display = 'none';
	}	
	if(project.detailShot){
		document.getElementById('detailImg').src = project.detailShot;
	}
	else{
		document.getElementById('detailImg').style.display = 'none';
	}
	
	
	var title = "Kyle Irvan | " + project.title;
	document.title = title;
	
	photoCredits.push(project.heroSource);			
	generateCredits(photoCredits);
	
}

