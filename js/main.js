const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

work.addEventListener("click", () => {
  window.open("https://lab.hasic.me/", "_blank");
});

resume.addEventListener("click", () => {
  window.open(
    "https://docs.google.com/document/d/1luzOgdv-2uQRj9-0XTg4DsvlfIH2QoxT8YQiICWtacs/edit?usp=sharing/",
    "_blank"
  );
});
