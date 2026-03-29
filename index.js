const portfolioImages = [
  { src: "images/portfolio-1.jpg", alt: "Garden image 1", caption: "Planting and structure" },
  { src: "images/portfolio-2.jpg", alt: "Garden image 2", caption: "Borders and pathways" },
  { src: "images/portfolio-3.jpg", alt: "Garden image 3", caption: "Atmospheric detail" },
  { src: "images/portfolio-4.jpg", alt: "Garden image 4", caption: "Texture and seasonal tone" },
  { src: "images/portfolio-5.jpg", alt: "Garden image 5", caption: "Landscape view" },
  { src: "images/portfolio-6.jpg", alt: "Garden image 6", caption: "Planting composition" }
];

const currentPage = document.body.dataset.page;
document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  if (
    (currentPage === "home" && href === "index.html") ||
    (currentPage === "pictures" && href === "pics.html") ||
    (currentPage === "map" && href === "map.html") ||
    (currentPage === "about" && href === "about.html") ||
    (currentPage === "contact" && href === "contact.html")
  ) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("#year").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const portfolioGrid = document.getElementById("portfolio-grid");
if (portfolioGrid) {
  portfolioImages.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "portfolio-card";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.loading = "lazy";
    img.className = "img-fluid";

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = item.caption;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    portfolioGrid.appendChild(figure);
  });
}