document.getElementById('tampilkanBTN').onclick=function(){
	var Name=document.getElementById('Name').value.trim();
	if (Name===""){ 
	    Name="(Name have to be fill in)";
		
	}
	
	var Birthday=document.getElementById('Birthday').value.trim();
	if (Birthday===""){ 
	    Birthday="(Birthday have to be fill in)";
		
	}
	var Age=document.getElementById('Age').value.trim();
	if (Age===""){ 
	    Age="(Age have to be fill in)";
		}
	
	var gender="";
	var radios=document.getElementsByName('gender');
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
			gender=radios[i].value;
		break;
		}
	}
	if (gender===""){
		gender="(Please Fill in the gender)";
	}
	var Total people="";
	var radios=document.getElementsByName('Total people');
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
			Totalpeople=radios[i].value;
		break;
		}
	}
	if (Total===""){
		Total people="(Pls input the numbers of people)";
	}
	var hasilText="Name:"+Name+"Birthday:"+Birthday+"Age:"+Age+"\nGender:" + gender +"\nTotal people:"+Total people;
	document.getElementById('hasil').innerText=hasilText;
}	
