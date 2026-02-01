function getFileName(path) {
  return path.split('/').pop();
}

function highlightActiveLink() {
  const currentPath = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    const linkFile = getFileName(linkPath);

    if (linkFile === currentPath) {
      link.classList.add('text-blue-500', 'font-bold', 'underline');
    } else {
      link.classList.remove('text-blue-500', 'font-bold', 'underline');
    }
  });
}

highlightActiveLink();
