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

// 3. feladat
{
  const cb = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated", entry.target.dataset.scrollAnimation);
      }
    });
  };

  const observer = new IntersectionObserver(cb);

  // nem volt gyakon, így lehet azt, hogy újra lefusson az animáció, ha visszagörgetünk
  // https://github.com/daneden/animate.css#usage-with-javascript
  const handleAnimationEnd = event => {
    event.target.classList.remove("animated", event.target.dataset.scrollAnimation);
  };

  document.querySelectorAll("[data-scroll]").forEach(el => {
    observer.observe(el);

    // nem volt gyakon
    el.addEventListener("animationend", handleAnimationEnd);
  });
}

// 6. feladat
// http://aishek.github.io/jquery-animateNumber/
{
  const observer = new IntersectionObserver(cb);
  function cb(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).animateNumber({ number: entry.target.dataset.count });
      }
    });
  }
  document.querySelectorAll("[data-count]").forEach(target => observer.observe(target));
}

// 4. feladat
{
  const progressDiv = $("<div class='progressDiv' />");
  // const progressDiv = document.createElement("div");
  $(document.body).prepend(progressDiv);
  // document.body.prepend(progressDiv);
  // progressDiv.classList.add("progressDiv");

  const cb = () => {
    const maxScroll = document.body.scrollHeight - document.body.clientHeight;
    const ratio = scrollY / maxScroll;
    progressDiv.css("width", `${ratio * 100}%`);
  };
  // window.addEventListener("scroll", _.throttle(cb, 100));
  $(window).on("scroll", _.throttle(cb, 100));
}
