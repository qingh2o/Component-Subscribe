   // Get the current page URL
   var currentPageUrl = window.location.href;

   // Get the anchor elements
   var links = document.querySelectorAll('nav ul li a');

   // Loop through each anchor element
   links.forEach(function (link) {
       // Check if the anchor element's href matches the current page URL
       if (link.href === currentPageUrl) {
           // Add the 'active' class to the parent list item
           link.parentNode.classList.add('active');
       }
   });