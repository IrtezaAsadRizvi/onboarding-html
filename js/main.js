
// STEP TRANSITION
var current_fs, next_fs;
var current_step;

$(".ob-submit").click(function(){
  current_fs = $(this).parent().parent().parent().parent().parent();
  next_fs = $(this).parent().parent().parent().parent().parent().next();
  current_fs.addClass('slide-out').delay(300).hide();
  next_fs.fadeIn(300);

  console.log($(this).parent().parent().parent().parent().parent().next().index());
  // progress step web
  $(".progress-step").eq(current_fs.index()).removeClass('active')
  $(".progress-step").eq(next_fs.index()).addClass('active')
  // progress bar fill
  $("#progress-bar-fill").css('width', (($(this).parent().parent().parent().parent().parent().next().index() + 1)*33.33)+'%')
})



// $(document).bind('dragover', function (e) {
//     // FILE UPLOAD
//     var dropZone = $('.zone'),
//         timeout = window.dropZoneTimeout;
//     if (!timeout) {
//         dropZone.addClass('in');
//     } else {
//         clearTimeout(timeout);
//     }
//     var found = false,
//         node = e.target;
//     do {
//         if (node === dropZone[0]) {
//             found = true;
//             break;
//         }
//         node = node.parentNode;
//     } while (node != null);
//     if (found) {
//         dropZone.addClass('hover');
//     } else {
//         dropZone.removeClass('hover');
//     }
//     window.dropZoneTimeout = setTimeout(function () {
//         window.dropZoneTimeout = null;
//         dropZone.removeClass('in hover');
//     }, 100);
//
// });
