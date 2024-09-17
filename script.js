$(document).ready(function() {
    const $heroTrigger = $('#heroTrigger');
    const $heroSection = $('#hero');
    let timer;

    $heroTrigger.on('mouseenter', function() {
      $heroSection.show().addClass('show');

      // Clear any existing timer
      clearTimeout(timer);

      // Set a timeout to hide the hero section after 5 seconds
      timer = setTimeout(function() {
        $heroSection.hide().removeClass('show');
      }, 5000); // 5 seconds
    });

    $heroTrigger.on('mouseleave', function() {
      // Clear the timer if the user moves the mouse out before 5 seconds
      clearTimeout(timer);
    });

    $heroSection.on('mouseenter', function() {
      // Clear the timer if the user hovers over the hero section
      clearTimeout(timer);
    });

    $heroSection.on('mouseleave', function() {
      // Hide the hero section if the user moves the mouse out after 5 seconds
      timer = setTimeout(function() {
        $heroSection.hide().removeClass('show');
      }, 5000); // 5 seconds
    });
  });