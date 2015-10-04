"use strict";

(function() {
  $.ajax({

    //access json files
    url : "../api/my_boards.json",
    method: "GET",
    success : function(data) {
      // console.log(data);
      $('section').append('<div>');
      for (var i = 0; i < data.data.children.length; i++) {

        console.log(data.data.children[i].data.thumbnail)
        var pugPics = $('<div class="small-12 medium-6 large-6 columns>', {
          html : data.data.children[i].data.title
        });
        var thumbs = '<img src="' + data.data.children[i].data.thumbnail + '">';

        $(pugPics).append(thumbs);
        $('section > div').append(pugPics);
      }
    },
    error : function(err) {
      console.log(err);
    }
  })
})();