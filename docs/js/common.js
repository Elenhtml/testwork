var body = document.querySelector(".no-js");

body.classList.remove("no-js");
body.classList.add("js");

var cards = document.querySelectorAll(".card");

if (cards.length > 0) {
  cards.forEach(function (choose) {
    choose.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (this.classList.contains("card--free")) {
        this.classList.remove("card--free");
        this.classList.add("card--selected");
      } else {
        this.classList.remove("card--selected");
        this.classList.add("card--free");
      }
    });
  });
  cards.forEach(function (thinkOver) {
    thinkOver.addEventListener("mouseleave", function (evt) {
      var _this = this;
      if (evt.target === _this) {
        if (_this.classList.contains("card--selected")) {
          _this.classList.add("card--selected-hover");
          setTimeout(function () {
            _this.classList.remove("card--selected-hover");
          }, 2000);
        }
      }
    });
  });
}
