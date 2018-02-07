
//jQuery time
var current_fs, next_fs;
var current_step;

$(".ob-submit").click(function(){
  current_fs = $(this).parent().parent();
	next_fs = $(this).parent().parent().next();
  current_fs.addClass('slide-out').delay(300).hide();
  next_fs.fadeIn(300);

  console.log($(this).parent().parent().next().index());

  $(".progress-step").eq($(this).parent().parent().index()).removeClass('active')
  $(".progress-step").eq($(this).parent().parent().next().index()).addClass('active')

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
