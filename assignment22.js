var form=document.getElementbyId('form');

form.addEventlistener('submit', function(event){
	event.preventDefault();
	var name = form.name.value;
	var description= form.project_Description.value;
	var Date= new Date(form.due_date.value);

	let arr = [name, id, Date];

	localstorage.setItem("li1",arr);

	var display = document.getElementbyId('display');
	var links= document.createElement('u1');

	links.setAttribute("href", "VictorChirwa.html");
	links.setAttribute("class","link");

	var form1 = document.createTextNode(name);
	links.appendchild(project);
	display.appendchild(links);
	form.reset();
