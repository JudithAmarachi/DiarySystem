
    // JudyWeb Source Code

    // Const variable declaration
    const container = document.getElementById('add-items');
    const AddToContainer = document.getElementById('text_input');
    const AddToContainer2 = document.getElementById('time_input');

    // Function trigger: this lines of code will execute the add and remove buttons

    function trigger(){

    // Creates and append an element "singleItem" inside the container
    let singleItem = document.createElement('p');
    let inputtext = AddToContainer.value;
    let input_text = document.createTextNode(inputtext);
    singleItem.appendChild(input_text);

    // Creates and append an empty space 
    let empty = document.createTextNode(" ");
    singleItem.appendChild(empty);

    // Creates and append date in the container
    let inputtime = AddToContainer2.value;
    let input_time = document.createTextNode(inputtime);
    singleItem.appendChild(input_time);

    // Creates another empty space
    let empty1 = document.createTextNode(" ");
    singleItem.appendChild(empty1);
   
    // Removes  all items in the container using the remove btn 
    let deletebtn = document.getElementById('removeitem');
    deletebtn.addEventListener('click', () => {
    container.removeChild(singleItem);
    });
    
    // Clears the input
    document.getElementById('text_input').value = " ";
    document.getElementById('time_input').value = " ";
   
    // Creates a delete btn on the container
    let removebtn = document.createElement('button');
    let btntext = document.createTextNode('delete');
    removebtn.appendChild(btntext);
    removebtn.addEventListener('click', () => {
    container.removeChild(singleItem);
     });
    
    // styling 
    singleItem.style.padding = "10px";
    singleItem.style.fontSize = "18px"; 
    singleItem.style.borderRight = "1px solid lightgray"; 
   
    //  Evaluates the singleItem
    if(singleItem.textContent == 0){
        alert('enter value');
    } else{
        singleItem.appendChild(removebtn);
        container.append(singleItem);
        return;
    }

        
    
        
        
    };

    