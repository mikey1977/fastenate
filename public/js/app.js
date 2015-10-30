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
      $('section').append('<div class="posts">');
      // $('<div>').append('<ul>')
      for (var i = 0; i < data.data.children.length; i++) {

        var pugPics = $('<div class="outsideBox"><div class="small-12 medium-6 large-6 columns">', {
          html : data.data.children[i].data.title
        });

        var thumbs = '<div class="image"><img src="' + data.data.children[i].data.url + '" class="images"></div>';
        var container = '<div class="container">';
        var title = '<div class="title">' + 'Title: ' + data.data.children[i].data.title;
        var divvy = '<div>';
        var author = '<div class="author">' + 'Author: ' + data.data.children[i].data.author;
        var stuff = '<div class="stuff">' + 'Comments: ' + data.data.children[i].data.score;

        $(pugPics).append(thumbs, divvy, title, divvy, author, divvy, stuff);
        $('section').append(pugPics);
      }
    },
    error : function(err) {
      console.log(err);
    }
  });
})();