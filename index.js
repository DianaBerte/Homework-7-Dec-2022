//<!-- EXERCISE 3
//Create a button "Remove Last Task" to trigger the method "removeLast"
//-->

/*c
    //remove last child from Ul in ex5(?)
}*/

/* EXERCISE 5 (JS from here on): 
                Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the LI child to the UL
*/

const addingNewTask = function () {
    let ulNode = document.getElementById('myTaskList')[0];
    let inputNode = document.getElementById('colorPicker')[0];

    let newItemNode = document.createElement('li');
    ulNode.appendChild(newItemNode)
}

/* EXERCISE 6: 
Create a method "removeLast" which removes the last item from the task list
*/

const removeLast = function () {
    let ulNode = document.getElementById('myTaskList')[0];
    let lastNode = ulNode.removeChild(lastNode.lastElementChild)
}

/* EXERCISE 7: 
Create a method "removeFirst" which removes the first item from the task list
*/

const removeFirst = function () {
    let ulNode = document.getElementById('myTaskList')[0];
    ulNode.removeChild(ulNode.firstElementChild);
}

