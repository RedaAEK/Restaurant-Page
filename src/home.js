export function renderHome(div) {
  const container = document.createElement("div");
  container.classList.add("container");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const imageUrls = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
  ];

  const images = imageFactory();

  div.appendChild(container);

  container.appendChild(images.mainImage());
  container.appendChild(createTitle());
  container.appendChild(createDescription());
  container.appendChild(imgContainer);

  for (let source of imageUrls) {
    imgContainer.appendChild(images.menuImage(source));
  }
}

// title
function createTitle() {
  const title = document.createElement("h1");
  title.textContent = "The Art of Mindful Dining";
  return title;
}

// description
function createDescription() {
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "Wellness is a lifestyle, not a restriction. At Equilibrium, we’ve mastered the chemistry of flavor and nutrition. Our menu features lean proteins, complex grains, and vibrant aromatics curated to provide a perfectly balanced meal without the heavy aftermath. Discover a dining experience where indulgence is guilt-free and every bite is a step toward a healthier you.";
  return description;
}

// image factory
function imageFactory() {
  function mainImage() {
    const image = document.createElement("img");
    image.src = "/images/b5c76f1aab.jpg";
    return image;
  }

  function menuImage(src) {
    const image = document.createElement("img");
    image.src = src;
    return image;
  }

  return {
    mainImage,
    menuImage,
  };
}
