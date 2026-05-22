document.getElementById('tampilkanBTN').onclick=function(){
	var nama=document.getElementById('nama').value.trim();
	if (nama===""){ 
	    nama="(nama harus di isi)";
		
	}
	
	var kelas=document.getElementById('kelas').value.trim();
	if (kelas===""){ 
	    kelas="(kelas harus di isi)";
		
	}
	var Umur="";
	var Checkbox=document.getElementsByName('Umur');
	for (var i=0; i<Checkbox.length; i++){
		if(Checkbox[i].checked){
			Umur=Checkbox[i].value;
		break;
		}
	}
	if (Umur===""){
		Umur="(mohon masukkan umur anda)";
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
		gender="(mohon masukkan jenis kelamin)";
	}
	var tingkat="";
	var radios=document.getElementsByName('tingkat');
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
			tingkat=radios[i].value;
		break;
		}
	}
	if (tingkat===""){
		tingkat="(mohon masukkan tingkatan)";
	}
	var hasilText="Nama:"+nama+"kelas:"+kelas+"\nUmur:"+Umur+"\nJenis kelamin:" + gender +"\ntingkat:"+tingkat;
	document.getElementById('hasil').innerText=hasilText;
}	