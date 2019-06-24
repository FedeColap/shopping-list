/* things to do: 
when the value is entered, append it to the bottom of the list
check command - 
toddle between checking and unchecking
delete command
remove permanently the item from the list
use the THIS event delegation*/

// submit the value
$(function enterNewItem) {
    //check if I have to do this with the id of unput or id of form
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault(); 
        let newText = $('#js-shopping-list-form').val();
       
       
       $('ul').append('<li>' + newText + '<li>');
       $('#js-shopping-list-form').val('');
    });
    
});

$(enterNewItem());

//toggle of checks
$(function handleChecks () {
    $('.shopping-item-toggle').click(function(event) {
        //add the this ---how?
    $('li').find('.shopping-item').toggleClass('.shopping-item__checked');
//remember to put the keyboard too
    });

});
$(handleChecks());

// delete
$(function deleteItem() {
$('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).remove();
    });
});


// i believe these may be redundant, as the construction $(function ....):  \
// triggers the function when the page is loaded
$(enterNewItem());
$(handleChecks());
$(deleteItem());