// 1. feladat
{
  // Az Array.from csak régi böngészőkben (pl. IE 11 kellene, újabban már nem kell)
  // const links = Array.from(document.querySelectorAll("#mainNav a"));
  const links = document.querySelectorAll("#mainNav a");
  links.forEach(el => {
    const cb = event => {
      event.preventDefault();
      document.querySelector(event.target.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
      history.pushState(null, null, event.target.getAttribute("href"));
    };
    el.addEventListener("click", cb);
  });
}
