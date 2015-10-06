"use strict";


// $('img').width(200);
$('p').width(500);
// $('img').height(relative);

(function() {
  $.ajax({

    //access json files
    url : "../api/my_boards.json",
    method: "GET",
    success : function(data) {
      // console.log(data);
      $('section').append('<ul>');
      // $('<div>').append('<ul>')
      for (var i = 0; i < data.data.children.length; i++) {

        console.log(data.data.children[i].data.thumbnail);

        var pics = $('<li class="listData">', {
        // var pugPics = $('<div class="small-12 medium-6 large-6 columns>', {
          html : data.data.children[i].data.title
        });
        var thumbs = '<img src="' + data.data.children[i].data.thumbnail + '">';
        var divvy = '<div>';
        var author = 'author: ' + data.data.children[i].data.author;
        var stuff = 'comments: ' + data.data.children[i].data.num_comments + ' : ' + 'score: ' + data.data.children[i].data.score;

        $(pics).append(thumbs, divvy, author, divvy, stuff);
        $('section > ul').append(
          $(pics)

          );
        // $(pugPics).append(thumbs);
        // $('section > div').append(pugPics);
      }
    },
    error : function(err) {
      console.log(err);
    }
  })
})();