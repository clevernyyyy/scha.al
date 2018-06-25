$(document).ready(function () {
  var x = 0,
  velocity = 0,
  moving = false,
  dragInterval = null;

  $("#draggable" ).draggable({
    drag: function( event, ui ){    
      velocity = (ui.offset.left - x) * 2;
      ratio = parseInt( velocity * 100 / 360 );
    
      $(this).css('transform','rotateZ('+(ratio*2)+'deg)');
    
      x = ui.offset.left;
    },
    stop: function( event, ui ){ 
      var _this = $(this);
    
      _this.css('-webkit-transition-duration','.25s');
      _this.css('transform','rotateZ(0)');
      setTimeout(function()
        {
          _this.css('-webkit-transition-duration','');
          x = _this.css('left');
        },500);
    }
  });
});
