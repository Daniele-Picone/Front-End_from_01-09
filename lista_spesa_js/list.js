



let items =[];


function addItem(){
    let input = document.getElementById('inputValue');
    let itemText = input.value.trim();
    let list= document.querySelector('.list')
    if(itemText !== ""){   
            items.push(itemText)
            list.innerHTML= "";

            for(let  itemText of items ){
            let li = document.createElement('li')
            li.textContent = itemText

            list.appendChild(li);

        }
    input.value = ""
    }
}

