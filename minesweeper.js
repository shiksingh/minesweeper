 var size = prompt ('choose matrix size?',3);

var elem = document.getElementById('minesweeper');
for(var i=0;i<size;i++){
	let elemRow = document.createElement('tr');
	//let text = document.createTextNode('row');
	//elemRow.appendChild(text);
	elem.appendChild(elemRow);
	for(var j=0;j<size;j++){
		let elemCol = document.createElement('td');
		elemCol.setAttribute('id',i+','+j);
		//let text = document.createTextNode(i+ ',' +j);
		//elemCol.appendChild(text);
		elemRow.appendChild(elemCol);
	}
}

let matrix = [];
for(let i=0;i<size;i++){
	matrix[i] = [];
	for(let j=0;j<size;j++){
		matrix[i][j] = '';
	}
}

var generateRandomNumber = function(n1,n2){
	return Math.floor(Math.random() * (n2-n1) + n1);
}

let mines = 0;
let totalMines = size<4 ? size : size*2;
while(mines < totalMines){
	let i = this.generateRandomNumber(0,size);
	let j = this.generateRandomNumber(0,size);
	if(matrix[i][j] == ''){
		matrix[i][j] = '*';
		mines++;
	}else{
		continue;
	}
}

let cells = document.getElementsByTagName('td');
for(let i=0;i<cells.length;i++){
	cells[i].addEventListener('click',handleClick);
}

function handleClick(){
	let id = this.getAttribute('id');
	let indices = id.split(',');
	if(matrix[indices[0]][indices[1]] == '*'){
		for(let i=0;i<size;i++){
			for(let j=0;j<size;j++){
				let cell = document.getElementById(i+','+j);
				if(matrix[i][j] == '*'){
					cell.setAttribute('class','mine');
					cell.innerHTML = '*';
				}else{
					cell.setAttribute('class','mine');
				}
			}
		}
	}else{
		let i = Number(indices[0]);
		let j = Number(indices[1]);
		let count = 0;
		let x,y;
		for(x=i-1; x<=i+1; x++){
			for(y=j-1; y<=j+1; y++){
				if(x>-1 && y>-1&& x<size&& y<size){
					if(matrix[x][y] == '*'){
						count+=1;
					}
				}
			}
		}
		this.setAttribute('class','mine');
		this.innerHTML = count;
	}
}




