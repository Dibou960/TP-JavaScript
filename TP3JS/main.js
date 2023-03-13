const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let color = button.classList[0];
    let notification = document.createElement('div');
    notification.classList.add('notification', color);
    notification.textContent = color;
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 1000);
  });
});