// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()}
function scrollFunction() 
{
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {document.getElementById("myBtn").style.display = "block";
	document.getElementById("myBtn").style.transition = "all 0.5s";						  
																			  } 
 else {document.getElementById("myBtn").style.display = "none";
	  document.getElementById("myBtn").style.transition = "all 0.5s";
	  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}