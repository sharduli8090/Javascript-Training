class ShoppingList{
    constructor(){
        this.items = [];
    }
    
    addItem(item){
        this.items.push(item);
    }

    displayItems(){
        const itemList = document.getElementById("item-list");
        itemList.innerHTML="";

        this.items.forEach(function(item){
            const li = document.createElement('li');
            li.innerHTML = item;
            itemList.appendChild(li);
        });
    }
}

const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("add-button");


const shoppinglist  = new ShoppingList();

addBtn.addEventListener('click',function(){
    const itemText = itemInput.value.trim();
    if(itemText!=""){
        shoppinglist.addItem(itemText);
        shoppinglist.displayItems();
        itemInput.value="";
    }
})