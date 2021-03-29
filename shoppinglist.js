const inputTag = document.getElementsByClassName("inputtag")[0];
const shoppinglist =document.getElementsByClassName("shoppinglist")[0];
//const iconElement=document.getElementsByClassName("fa-trash-alt")[0];
let productId= 1;

const handChang= (event)=>{
		const inputValue =event.target.value;
		const productContainer = document.createElement("div");
		productContainer.classList.add("productContainer");
		const parentDiv =document.createElement("div");
		parentDiv.classList.add("parentClass");
	parentDiv.addEventListener("click",()=>{
			// alert("hello it me");
		const classExit = parentDiv.classList.contains("canlcle");
		if(classExit){
			parentDiv.classList.remove("canlcle");
		} else {
			parentDiv.classList.add("canlcle");
		}
		});

	const spanTag =document.createElement("span");
	const trashIcon =document.createElement("i");
	trashIcon.classList.add("far", "fa-trash-alt");
	trashIcon.addEventListener("click",(event)=>{
		// alert("hay");
		productContainer.remove();
	});
	spanTag.id=productId;
	const product = productId.toString()+ ". " + inputValue;
	spanTag.append(product);
	parentDiv.append(spanTag);
	productContainer.append(parentDiv,trashIcon);
	shoppinglist.append(productContainer);
	inputTag.value = "";
	productId += 1;
}
inputTag.addEventListener("change",handChang);