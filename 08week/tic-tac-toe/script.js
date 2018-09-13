'use strict';

$(document).ready(function() {
  var turn= 'X';

  $('[data-cell]').on('click', function(){
    console.log('current turn', turn)
    $("#announce-winner").text('current turn: ' + turn)


    if ($(this).text()) {
      // console.log('this has text in it')
      // let $value = $(this).text();
      // $value++;
      // $(this).text($value);
    } else {
      console.log('this is blank and it is player ' + turn)
      $(this).text(turn);
      if (turn === 'X'){
        turn = 'O';
      }else{
        turn ='X';
      }
      console.log('next turn', turn)
    }

    // if(!$(this).text()){
    //   console.log($(this).text())
    //   console.log('i am being run because the value is blank')
    //   $(this).text('1');
    // }else{
    //   let $value = $(this).text();
    //   $value++;
    //   $(this).text($value);
    // }
    // limit(24);
  });

  // function limit(target){
  //   let total = 0;
  //   $('[data-cell]').each(function(){
  //    total += Number($(this).text());
  //     // console.log(total);
  //   })
  //   if(total === target){
  //     $('#announce-winner').text(`HIT ${target}`);
  //   }
  // }
})
