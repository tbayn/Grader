function grade() 
{
	
	var students = Number(prompt("How many students"))
	var points = [students]
	
	var table = document.getElementById("table1");
	var row = table.insertRow(1)
	var cell0 = row.insertCell(0)
	var cell1 = row.insertCell(1)
	var cell2 = row.insertCell(2)
	var cell3 = row.insertCell(3)
	var cell4 = row.insertCell(4)
	var cell5 = row.insertCell(5)
	var cell6 = row.insertCell(6)
	var cell7 = row.insertCell(7)
	cell0.innerHTML = "Name"
	cell1.innerHTML = "Attendance"
	cell2.innerHTML = "Homework"
	cell3.innerHTML = "Midterm"
	cell4.innerHTML = "Final"
	cell5.innerHTML = "Course Grade"
	cell6.innerHTML = "Round Grade"
	cell7.innerHTML = "Letter Grade"
	cell0.style.borderStyle = "outset"
	cell1.style.borderStyle = "outset"
	cell2.style.borderStyle = "outset"
	cell3.style.borderStyle = "outset"
	cell4.style.borderStyle = "outset"
	cell5.style.borderStyle = "outset"
	cell6.style.borderStyle = "outset"
	cell7.style.borderStyle = "outset"
	row.style.backgroundColor = "lightgreen"
	row.style.height = "40px"
	row.style.fontWeight = "bold"
	table.style.borderSpacing = "5px"
	
	
	
	for(i = 0; i< students; i++) {
		
		var rows = table.insertRow(i+2)
		if (rows.rowIndex%2 == 0)
		{
		rows.style.backgroundColor = "beige"
		}
		var studentInfo =   // object containing student data
	{
		sName: prompt("what is your name"), // student name
		mGrade: Number(prompt("What was your midterm grade")), //Midterm grade
		fGrade: Number(prompt("What was your final grade?")), //Final exam
		att: Number(prompt("What was your attendance grade?")), //attendance
		hmw: Number(prompt("What was your homework grade?")), //homeowork
	}
		
		 points[i] = studentInfo
		 var courseGrade = (points[i].mGrade * 0.3) + (points[i].fGrade * 0.4) + (points[i].att *0.1) + (points[i].hmw * 0.2)
		 var truncGrade = courseGrade.toFixed(2)
		 var roundGrade = Math.round(courseGrade)
		 var cells0 = rows.insertCell(0)
		 var cells1 = rows.insertCell(1)
		 var cells2 = rows.insertCell(2)
		 var cells3 = rows.insertCell(3)
		 var cells4 = rows.insertCell(4)
		 var cells5 = rows.insertCell(5)
		 var cells6 = rows.insertCell(6)
		 var cells7 = rows.insertCell(7)
		cells0.innerHTML = points[i].sName
		cells1.innerHTML = points[i].att
		cells2.innerHTML = points[i].hmw
		cells3.innerHTML = points[i].mGrade
		cells4.innerHTML = points[i].fGrade
		cells5.innerHTML = truncGrade
		cells6.innerHTML = roundGrade
		if(roundGrade<=59){
			cells7.innerHTML = "F"
			cells7.style.color = "red"}
		else if(roundGrade>=60 && roundGrade<70){
		cells7.innerHTML = "D"}
		else if(roundGrade>=70 && roundGrade<80){
		cells7.innerHTML = "C"}
		else if(roundGrade>=80 && roundGrade<90){
		cells7.innerHTML = "B"}
		else { cells7.innerHTML = "A"}	
		cells0.style.borderStyle = "outset"
		cells1.style.borderStyle = "outset"
		cells2.style.borderStyle = "outset"
		cells3.style.borderStyle = "outset"
		cells4.style.borderStyle = "outset"
		cells5.style.borderStyle = "outset"
		cells6.style.borderStyle = "outset"
		cells7.style.borderStyle = "outset"
	}
		
}	
