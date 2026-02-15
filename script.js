document.addEventListener('DOMContentLoaded', () => {
  // Update Footer Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Demo Data Injection
  const articlesContainer = document.getElementById('articles');
  const template = document.getElementById('article-template');

  const demoData = [
    {
      title: "Global Markets Reach Record Highs in 2026",
      category: "Business",
      date: "Feb 15, 2026",
      excerpt: "Investors are showing renewed confidence as inflation cools and tech earnings exceed expectations...",
      img: "https://picsum.photos/seed/market/800/450"
    },
    {
      title: "New AI Developments in Sustainable Energy",
      category: "Tech",
      date: "Feb 14, 2026",
      excerpt: "Scientists have announced a breakthrough in using neural networks to optimize power grid efficiency...",
      img: "https://picsum.photos/seed/tech/800/450"
    }
  ];

  if (articlesContainer && template) {
    demoData.forEach(post => {
      const clone = template.content.cloneNode(true);
      clone.querySelector('.card-title').textContent = post.title;
      clone.querySelector('.category-tag').textContent = post.category;
      clone.querySelector('.meta').textContent = post.date;
      clone.querySelector('.excerpt').textContent = post.excerpt;
      clone.querySelector('.thumb').src = post.img;
      articlesContainer.appendChild(clone);
    });
  }
});