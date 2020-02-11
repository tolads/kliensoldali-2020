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

// 2. feladat
{
  // 1. változat:
  // window.addEventListener("scroll", () => {
  //   document.querySelector("nav").classList.toggle("navbar-scrolled", scrollY > 200);
  // });

  // 2. változat:
  // let ticking = false;
  // window.addEventListener("scroll", () => {
  //   if (ticking) return;
  //   document.querySelector("nav").classList.toggle("navbar-scrolled", scrollY > 200);
  //   window.requestAnimationFrame(() => {
  //     ticking = false;
  //   });
  //   ticking = true;
  // });

  // 3. változat:
  // https://lodash.com/docs/4.17.15#throttle
  const cb = () => {
    document.querySelector("nav").classList.toggle("navbar-scrolled", scrollY > 200);
  };
  window.addEventListener("scroll", _.throttle(cb, 100));
}
