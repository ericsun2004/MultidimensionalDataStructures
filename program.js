
function clickHandler(i){ 

	let note = (i.srcElement.id);
	console.log(note);

	if (document.getElementById(note).style.backgroundColor == "white"){
		document.getElementById(note).style.backgroundColor = "black";		
	}

	else if (document.getElementById(note).style.backgroundColor == "black"){
		document.getElementById(note).style.backgroundColor = "white";		
	}

}

function input() {

	console.log('hi');

	let numW = Number((document.getElementById("numInputW").value));

	let numL = Number((document.getElementById("numInputL").value));

	box(numW, numL);



} 

function box(numW, numL) {

	let divArray3D = [];

	for (let a = 0; a < numL; a++){

		let divArray = [];

		for (let i = 0; i < numW; i++){

			let div = document.createElement('div');
			div.id = a.toString() + i.toString();
			divArray.push(a.toString() + i.toString());
			document.body.appendChild(div);

		}

		divArray3D.push(divArray);

	}

	console.log(divArray3D);

	
	for (let a = 0; a < numL; a++) {

		for (let i = 0; i < numW; i++){

			document.getElementById(divArray3D[a][i]).style.backgroundColor = "white";

			document.getElementById(divArray3D[a][i]).style.float = "left";

			document.getElementById(divArray3D[a][i]).style.height = 97.5/divArray3D[a].length + "vw";
			document.getElementById(divArray3D[a][i]).style.width = 97.5/divArray3D[a].length + "vw";
		
		}

	}

	for (let a = 0; a < numL; a++) {

		for (let i = 0; i < numW; i++){

			let element = document.getElementById(divArray3D[a][i]); 
			element.addEventListener('click', clickHandler);
		
		}
	}

}