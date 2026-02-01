/* -----------------------------
   PERFUME DATA (OBJECTS + ARRAY)
-------------------------------- */

const perfumes = [
  {
  name: "Polo Blue",
  brand: "Ralph Lauren",
  categories: ["summer", "fresh", "aquatic"],
  time: "day",
  description: "A clean aquatic fragrance with melon, cucumber, and fresh citrus notes.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.1198.avif"
},
{
  name: "Stronger With You",
  brand: "Giorgio Armani",
  categories: ["sweet", "winter", "vanilla"],
  time: "night",
  description: "A warm and sweet fragrance with vanilla, chestnut, and soft spices.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.45258.avif"
},
{
  name: "Aventus",
  brand: "Creed",
  categories: ["fruity", "summer", "sweet"],
  time: "day",
  description: "A fruity and smoky fragrance with pineapple, bergamot, and woods.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.9828.avif"
},
{
  name: "The Most Wanted Intense",
  brand: "Azzaro",
  categories: ["woody", "winter", "lavender"],
  time: "night",
  description: "A powerful woody fragrance with spicy notes and smooth vanilla.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.90953.avif"
},
{
  name: "9pm",
  brand: "Afnan",
  categories: ["sweet", "winter", "arabic", "vanilla"],
  time: "night",
  description: "A sweet oriental fragrance with vanilla, apple, and amber.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.65414.avif"
},
{
  name: "Sauvage",
  brand: "Dior",
  categories: ["summer", "fresh", "citrus"],
  time: "day",
  description: "A fresh and spicy fragrance with bergamot, pepper, and ambroxan.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.31861.avif"
},
{
  name: "Valentino Born In Roma",
  brand: "Valentino",
  categories: ["winter", "woody", "lavender"],
  time: "night",
  description: "A modern woody fragrance with vanilla, lavender, and mineral notes.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.78740.avif"
},
{
  name: "Eros Flame",
  brand: "Versace",
  categories: ["citrus", "winter", "sweet"],
  time: "night",
  description: "A warm and spicy fragrance with citrus, vanilla, and woods.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.52180.avif"
},
{
  name: "9am Dive",
  brand: "Afnan",
  categories: ["fruity", "woody", "arabic", "fresh"],
  time: "day",
  description: "A fresh and energetic fragrance with citrus, woods, and aquatic notes.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.78611.avif"
},
{
  name: "Khamrah",
  brand: "Lattafa Perfumes",
  categories: ["sweet", "winter", "arabic"],
  time: "night",
  description: "A rich gourmand fragrance with vanilla, cinnamon, and sweet spices.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.75805.avif"
},
{
  name: "Soleil Blanc",
  brand: "Tom Ford",
  categories: ["sweet", "summer", "unisex"],
  time: "day",
  description: "A creamy summer fragrance with coconut, vanilla, and white florals.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.34893.avif"
},
{
  name: "CK One",
  brand: "Calvin Klein",
  categories: ["citrus", "summer", "unisex"],
  time: "day",
  description: "A light and fresh citrus fragrance with green tea and clean notes.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.276.avif"
},
{
  name: "Eros",
  brand: "Versace",
  categories: ["vanilla", "summer", "winter", "sweet"],
  time: "night",
  description: "A sweet and seductive fragrance with vanilla, mint, and tonka bean.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.16657.avif"
},
{
  name: "Pour Homme",
  brand: "Versace",
  categories: ["summer", "citrus"],
  time: "day",
  description: "A fresh masculine fragrance with lemon, neroli, and light woods.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.40031.avif"
},
{
  name: "Odyssey Mandarin Sky",
  brand: "Armaf",
  categories: ["summer", "citrus", "arabic"],
  time: "day",
  description: "A bright citrus fragrance with mandarin, sweetness, and soft woods.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.83132.avif"
},
{
  name: "Unlimited Hugo Boss",
  brand: "Hugo Boss",
  categories: ["fruity", "citrus", "summer"],
  time: "day",
  description: "A fresh fruity fragrance with mint, citrus, and green notes.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.22528.avif"
},
{
  name: "1 Million Elixir",
  brand: "Paco Rabanne",
  categories: ["vanilla", "sweet", "winter", "fruity"],
  time: "night",
  description: "A rich sweet fragrance with vanilla, apple, and warm amber notes.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.71708.avif"
},
{
  name: "Acqua di Gio",
  brand: "Giorgio Armani",
  categories: ["citrus", "aquatic", "summer"],
  time: "day",
  description: "A fresh aquatic fragrance with citrus and marine notes, perfect for everyday wear in warm weather.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.410.avif"
},
{
  name: "Asad Zanzibar",
  brand: "Lattafa Perfumes",
  categories: ["vanilla", "lavender", "summer", "unisex", "arabic"],
  time: "day",
  description: "A smooth aromatic fragrance with lavender and vanilla, offering a relaxed and modern summer feel.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.90713.avif"
},
{
  name: "Hawas Ice",
  brand: "Rasasi",
  categories: ["fruity", "citrus", "summer", "fresh", "arabic"],
  time: "day",
  description: "An ultra-fresh fragrance with citrus and aquatic notes, ideal for hot summer days.",
  image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.89050.avif"
}
];

/* -----------------------------
   DOM ELEMENTS
-------------------------------- */

const featuredSection = document.querySelector("#products-container");

const categorySelect = document.querySelector("#category");

/* -----------------------------
   FUNCTIONS
-------------------------------- */

// Function 1: Display perfumes
function displayPerfumes(perfumeList) {
  featuredSection.innerHTML = "";

  perfumeList.forEach(perfume => {
    const card = document.createElement("div");
    card.classList.add("perfume-card");

    const tags = perfume.categories
      .map(cat => `<span class="tag tag-${cat}">${cat}</span>`)
      .join("");

    const timeIcon = perfume.time === "day" ? "☀️ Day" : "🌙 Night";

    card.innerHTML = `
      <img src="${perfume.image}" alt="${perfume.name}" loading="lazy">
      <h3>${perfume.name}</h3>
      <p class="brand">${perfume.brand}</p>
      <p>${perfume.description}</p>
      <div class="tags">${tags}</div>
      <p class="time">${timeIcon}</p>
      <button data-name="${perfume.name}">Add to Favorites</button>
    `;

    featuredSection.appendChild(card);
  });
}


// Function 2: Save favorite perfume (localStorage)
function saveFavorite(perfumeName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(perfumeName)) {
    favorites.push(perfumeName);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${perfumeName} added to favorites.`);
  } else {
    alert("This perfume is already in your favorites.");
  }
}

/* -----------------------------
   EVENT LISTENERS
-------------------------------- */

featuredSection.addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    const perfumeName = event.target.dataset.name;
    saveFavorite(perfumeName);
  }
});

categorySelect.addEventListener("change", event => {
  const selectedCategory = event.target.value;
  filterPerfumes(selectedCategory);
});


/* -----------------------------
   INITIAL LOAD
-------------------------------- */

displayPerfumes(perfumes);

function filterPerfumes(category) {
  if (category === "all") {
    displayPerfumes(perfumes);
    return;
  }

  const filtered = perfumes.filter(perfume =>
    perfume.categories.includes(category)
  );

  displayPerfumes(filtered);
}

