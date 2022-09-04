var sticky = "<div class='note draggable'><div class='text'><textarea class='note-title' placeholder='Enter note title' maxlength='40'></textarea><textarea class='note-description' placeholder='Enter note description here'></textarea></div></div>"

// newNote Fn
function newNote() {
  $(sticky).hide().appendTo("#board").show("fade",300).draggable({containment: "video", scroll: false});

  // mousedwon => trashbin
  $(".note").mousedown(trashBin)  

}
 
// trashbin Fn
function trashBin() {
  $(".trashbin").show();
  $(".note").mouseup(function() {
    $(".trashbin").hide();
  })
  $(".trashbin").droppable({
    drop: function(event,ui) {
      $(ui.draggable).remove();
    }
  })
}



// start simulation
$(document).ready(function () {
  $(".btn-new-task").click(newNote)


  // first sticky
  newNote();
});






































