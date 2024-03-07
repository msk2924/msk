document.addEventListener("click", function() {
    var audio = document.getElementById("background-audio");
    audio.play();
  });

  const textElement = document.getElementById('text');
        const words = textElement.innerText.split(' ');
        textElement.innerHTML = ''; // Clear the text content

        words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word + '\xa0'; // Add a non-breaking space to keep the words separated
            span.className = 'word';
            textElement.appendChild(span);
        });
        function disableScroll() {
            // Add event listener to prevent default scroll behavior
            window.addEventListener('scroll', preventDefaultScroll);
        }

        function enableScroll() {
            // Remove event listener to allow default scroll behavior
            window.removeEventListener('scroll', preventDefaultScroll);
        }

        function preventDefaultScroll(event) {
            // Prevent default scroll behavior
            event.preventDefault();
        }

        // Call disableScroll to disable scrolling
        disableScroll();

        // To enable scrolling, call enableScroll
        // enableScroll();