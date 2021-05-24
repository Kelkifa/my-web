// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("collapsible-active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


$('.collapsible').click(function(){
    $(this).toggleClass('collapsible-active');
    var content = $(this).nextAll();
    if(content.css('display') == 'block'){
        content.css('display', 'none');
    }
    else{
        content.css('display', 'block');
    }
});