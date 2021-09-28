var project = {};
if (document.getElementById('mainContent').className == 'project'){
	var projectId = window.location.href.substring(window.location.href.lastIndexOf('/')+1, window.location.href.length-5);
	for (let i=0; i<projects.length; i++){
		if (projects[i].id == projectId){
			project = projects[i];
		}
	}
	document.getElementById('heroImg').style.backgroundImage = project.heroShot;
	var projectDetails = document.getElementById('projectDetails')
	projectDetails.innerHTML += "<h1>"+project.title+"</h1>";
	projectDetails.innerHTML += "<h2>Project Details</h2>";
	projectDetails.innerHTML += "<b>Solution Type:</b> " + project.type; 
	projectDetails.innerHTML += "<br /><b>Client:</b> " + project.client; 
	projectDetails.innerHTML += "<br /><b>Skills Used:</b> " + project.skills; 
	projectDetails.innerHTML += "<br /><b>Tools Used:</b> " + project.tools; 
	projectDetails.innerHTML += "<br /><b>Description:</b> " + project.shortDescription; 
	
	
	
	document.getElementById('problem').innerHTML += project.problem;
	document.getElementById('solution').innerHTML += project.solution;
	document.getElementById('process').innerHTML += project.process;
	
	
	
	document.getElementById('detailImg').src = project.detailShot;
	
	
	
	
	
	
	
	
	
	
	
	
	
}

