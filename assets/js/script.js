$(function() {
  $('#carre').css({'height': '60px', 'width': '80px','background-color' : 'red'});

  // Pixel
  $('#pixel').click(function() {
    let h = $('#carre').height();
    h = h + 10;
    if (h <= 100) {
      $('#carre').css('height', h);
    } else {
      h = 10;
      $('#carre').css('height', h);
    }
  });
  // Vert
  $('#vert').click(function() {
    $('#carre').css('background-color', 'green');
  });
  // Default
  $('#default').click(function() {
    $('#carre').css('background-color', 'red');
  });
  // Hide
  $('#hide').click(function() {
    $('#carre').css('visibility', 'hidden');
  });
  // Show
  $('#show').click(function() {
    $('#carre').css('visibility', 'visible');
  });
});
