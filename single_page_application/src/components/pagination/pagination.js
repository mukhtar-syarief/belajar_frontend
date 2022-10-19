import paginationBtn from "../buttons/paginationButtons.js";

var elShow = document.querySelector('#app');

function addClass(btnElem, prevBtn){
	prevBtn.forEach(elem => elem.classList.remove('active'));
	btnElem.classList.add('active');
}

export function btnPagination (datas, size = 12) {
    var elPagination = document.querySelector('.pagination_item');
	elPagination.innerHTML = "";
    for(let i = 0; i < datas.length/size;i++){
        elPagination.append(paginationBtn(i+1))
    }
	
	Array.from(elPagination.children).forEach((elem,i) => {
		elem.addEventListener('click', () => {
			smartList(i); 
			addClass(elem,Array.from(elPagination.children));
		});
	});
	smartList(0);
	
	function smartList(page,size = 12){
		var btnPag = Array.from(elPagination.children);
		let arrayList = [];
		arrayList = datas.slice().splice(page*size,size);
		elShow.innerHTML= "";
		for(let i = 0; i < arrayList.length; i++){
			elShow.append(arrayList[i])
		}
		btnPag[0].classList.add('active');
	}
}
