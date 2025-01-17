document.getElementById('comment-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const commentInput = this.querySelector('textarea');
  const commentText = commentInput.value.trim();

  if (commentText) {
    const commentList = document.getElementById('comment-list');

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentText;

    commentList.appendChild(newComment);

    commentInput.value = '';
  } else {
    alert('Lütfen bir yorum yazın.');
  }
});

function setDifficultyFromHTML() {
  const starsContainer = document.getElementById('difficulty-stars');
  const difficultyLevel = parseInt(starsContainer.dataset.difficulty, 10); // HTML'deki data-difficulty değerini oku
  const stars = starsContainer.querySelectorAll('.star');

  stars.forEach((star, index) => {
    if (index < difficultyLevel) {
      star.innerHTML = '&#9733;'; // Dolu yıldız: ★
      star.classList.add('filled');
    } else {
      star.innerHTML = '&#9734;'; // Boş yıldız: ☆
      star.classList.remove('filled');
    }
  });
}

setDifficultyFromHTML();
