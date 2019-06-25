/* things to do: 
when the value is entered, append it to the bottom of the list
check command - 
toddle between checking and unchecking
delete command
remove permanently the item from the list
use the THIS event delegation*/

// submit the value
$(function enterNewItem() {  // i had forgotten to open and close parenthesis!
    //check if I have to do this with the id of unput or id of form
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault(); 
        let newText = $('#shopping-list-entry').val();
       
       $('ul').append('<li>' +  // if I add only the <li> tag, parts like style attribues and buttons will not be rendered!
        '<span class="shopping-item">' +
        newText + 
        '</span>' +
        '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
        '</button>' +
        '</div>' +
        '</li>');
       $('#shopping-list-entry').val('');
    });
    
});


// delete
$(function deleteItem() {
    /*   
   $('li').click(function(event) {
       this.remove();
       }); /// this will not target the future creation of li
       need event delegation
       */
      $('ul').on('click', '.shopping-item-delete', function(event) {
       this.closest('li').remove();
     }); 
   });


//toggle of checks

$(function handleChecks () {
 /*   
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        //add the this ---how?
        $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item__checked');
            //after the toggleClass DO NOT place the DOT before the class name
            //same thing for adding, removing and changing class
    });

});
*/

$('ul').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

});


$(enterNewItem);
$(deleteItem);
$(handleChecks);

