// JavaScript Document
const heading = 'VICUS AIRLINES';
let i = 0;

const typing = () => {
	if(i < heading.length){
		document.querySelector('.title').innerHTML += heading.charAt(i);
		i++;
		
		setTimeout(typing, 150);
	}
}
typing();