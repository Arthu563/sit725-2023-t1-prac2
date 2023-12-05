// Additional Custom JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Materialize components (if using Materialize features)
  // Example: M.AutoInit();

  // Example: Add click event to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
    });
  });

  // Example: Add functionality based on user interactions
  // For instance, modify elements, fetch data from a server, etc.
});
