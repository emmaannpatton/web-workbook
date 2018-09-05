
'use strict';

$(document).ready(function() {
  var turn= 'X';

  $('[data-cell]').on('click', function()
  {
    console.log('current turn', turn);



    if ($(this).text()) {
      // console.log('this has text in it')
      // let $value = $(this).text();
      // $value++;
      // $(this).text($value);
    }
    else
    {
      console.log('this is blank and it is player ' + turn);
      $(this).text(turn);
      checkWin(turn);
      if (turn == 'X')
      {
        turn = 'O';
      }
      else
      {
        turn ='X';
      }
      console.log('next turn', turn);
    }

  });
});

function checkWin(turn){
   if($('[data-cell="0"]').text() === turn &&
     $('[data-cell="1"]').text() === turn &&
     $('[data-cell="2"]').text() === turn)
    {
     $('#announce-winner').text(`${turn} wins`);
    }

    else if ($('[data-cell="3"]').text() === turn &&
      $('[data-cell="4"]').text() === turn &&
      $('[data-cell="5"]').text() === turn)
      {
      $('#announce-winner').text(`${turn} wins`);
      }
    else if ($('[data-cell="6"]').text() === turn &&
      $('[data-cell="7"]').text() === turn &&
      $('[data-cell="8"]').text() === turn)
      {
      $('#announce-winner').text(`${turn} wins`);
      }
    else if ($('[data-cell="0"]').text() === turn &&
      $('[data-cell="3"]').text() === turn &&
      $('[data-cell="6"]').text() === turn)
      {
      $('#announce-winner').text(`${turn} wins`);
      }
    else if ($('[data-cell="1"]').text() === turn &&
      $('[data-cell="4"]').text() === turn &&
      $('[data-cell="7"]').text() === turn)
      {
      $('#announce-winner').text(`${turn} wins`);
      }
    else if ($('[data-cell="2"]').text() === turn &&
      $('[data-cell="5"]').text() === turn &&
      $('[data-cell="8"]').text() === turn)
      {
      $('#announce-winner').text(`${turn} wins`);
      }
    else if ($('[data-cell="0"]').text() === turn &&
      $('[data-cell="4"]').text() === turn &&
      $('[data-cell="8"]').text() === turn)
      {
      $('#announce-winner').text(`${turn} wins`);
      }
    else if ($('[data-cell="2"]').text() === turn &&
      $('[data-cell="4"]').text() === turn &&
      $('[data-cell="6"]').text() === turn)
      {
      $('#announce-winner').text(`${turn} wins`);
      }
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
  //});

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
//});

//if ('[data-cell]'="0", '[data-cell]'="1" '[data-cell]'="2"]=== 'X') {
  //return "Player X Wins!";
//}
// } else {
//   console.log('this is blank and it is player ' + turn)
//   $(this).text(turn);
//   if (turn === 'X'){
//     turn = 'O';
//   }else{
//     turn ='X';
  // }
  // console.log('next turn', turn)
