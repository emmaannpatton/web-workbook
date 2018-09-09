'use strict';

$(document).ready(function() {


});

$(function(){
 $('.draggable').draggable({
   revert: 'invalid'
 });
 $('.dropArea').droppable({
   drop: function(event, ui){
     // check if ok
     let $last =
     ($(this).children().last()).data('block');
     //console.log('last element on stack');
     let $dragging = $(ui.draggable).data('block');
     //console.log('dragging element ${$dragging}');
     if($dragging > $last{
        $(ui.draggable).draggable('option' 'revert', true);
      }else{
         $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');)
         checkWin();
   //
   //   })
   //   $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
   //   console.log("this is being dragged here")
   // }
 });
 function checkWin(){
   if ($('[data-stack=3], [data-stack=2]')
 }
})




//writing a function for if else {

// $(function(){
//   if('[data-block]' > .this)
//   $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
// }else {
//   $('.draggable').draggable({
//     revert: 'invalid'
// }
// }

// if (condition) {
//     block of code to be executed if the condition is true
// }
