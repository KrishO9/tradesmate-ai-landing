
export const scrollReveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      if (!element.classList.contains('active')) {
        element.classList.add('active');
      }
    } else {
      // Optional: Remove active class when scrolling back up
      // element.classList.remove('active');
    }
  });
};
