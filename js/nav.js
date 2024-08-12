// document.addEventListener('DOMContentLoaded', () => {
//     const navBrand = document.querySelector('.nav-brand');
  
//     navBrand.addEventListener('mouseenter', () => {
//       navBrand.textContent = '<- go home';
//     });
  
//     navBrand.addEventListener('mouseleave', () => {
//       navBrand.textContent = '•ᴗ•';
//     });
//   });

document.addEventListener('DOMContentLoaded', () => {
    const navBrand = document.querySelector('.nav-brand');
  
    // Ensure the content of the spans is set
    navBrand.innerHTML = '<span class="first">•ᴗ•</span><span class="second"><- go home</span>';
  });
  