const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#292A2B";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "#white";
    document.body.style.color = "#white";
  }
});
