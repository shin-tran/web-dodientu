import {
  blogPosts,
  categories,
  featuredProducts,
  footerCategoryLinks,
  footerQuickLinks,
  navLinks,
  newArrivals,
  testimonials,
} from "./data.js";
import { renderStars } from "./utils.js";

const renderNavigation = (containerId, links) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  links.forEach((link) => {
    html += `
      <li>
        <a href=${link.href} class="text-white hover:text-secondary px-3 py-2 font-medium">
          <span><i class="${link.icon} mr-1"></i>${link.text}</span>
        </a>
      </li>
    `;
  });
  container.innerHTML = html;
};

const renderCategories = (containerId, categoriesData) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  categoriesData.forEach((category) => {
    html += `
      <div class="group bg-gray-100 p-6 rounded-lg text-center transition duration-300 hover:shadow-lg hover:bg-primary group-hover:text-white cursor-pointer">
        <div class="text-4xl mb-3">
          <i class="${category.icon} category-icon group-hover:text-white"></i>
        </div>
        <h3 class="font-medium group-hover:text-white">${category.name}</h3>
      </div>
    `;
  });
  container.innerHTML = html;
};

const renderFeaturedProducts = (containerId, productsData) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  productsData.forEach((product) => {
    html += `
      <div class="bg-white rounded-lg overflow-hidden shadow-md product-card transition duration-300">
        <div class="relative">
          <img class="w-full product-image" src=${product.imgSrc} alt="${
      product.alt
    }" />
          ${
            product.badge
              ? `<div class="absolute top-0 right-0 ${product.badgeClass} text-white px-2 py-1 m-2 rounded-md text-sm font-medium">${product.badge}</div>`
              : ""
          }
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
          <div class="flex items-center mb-2">
            <div class="flex text-yellow-400">
              ${renderStars(product.star)}
            </div>
            <span class="text-gray-600 text-sm ml-2">(${
              product.reviews
            } đánh giá)</span>
          </div>
          <p class="text-gray-600 mb-4 text-sm">${product.description}</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-xl font-bold text-primary">${
                product.price
              }</span>
              ${
                product.oldPrice
                  ? `<span class="text-sm text-gray-500 line-through ml-2">${product.oldPrice}</span>`
                  : ""
              }
            </div>
            <button class="bg-primary hover:bg-blue-700 text-white py-1 px-3 rounded-full transition duration-300">
              <i class="fas fa-shopping-cart mr-1"></i>Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
};

const renderNewArrivals = (containerId, productsData) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  productsData.forEach((product) => {
    html += `
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md flex product-card transition duration-300">
        <img class="w-1/3 object-cover" src=${product.imgSrc} alt="${
      product.alt
    }" />
        <div class="p-4 flex flex-col justify-between w-2/3">
          <div>
            <div class="text-xs text-primary font-semibold">MỚI</div>
            <h3 class="text-lg font-semibold mb-1">${product.name}</h3>
            <div class="flex items-center mb-2">
              <div class="flex text-yellow-400 text-sm">
                ${renderStars(product.star)}
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <span class="text-primary font-bold">${product.price}</span>
            <button
              class="bg-primary hover:bg-blue-700 text-white py-1 px-2 text-xs rounded-full transition duration-300">
              <span><i class="fas fa-eye mr-1"></i>Chi tiết</span>
            </button>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
};

const renderBlogPosts = (containerId, blogPostsData) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  blogPostsData.forEach((blogPost) => {
    html += `
      <div class="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
        <img class="w-full h-48 object-cover" src=${blogPost.imgSrc} alt="${blogPost.alt}" />
        <div class="p-6">
          <div class="flex items-center text-sm mb-2">
            <span><i class="far fa-calendar-alt text-primary mr-2"></i>${blogPost.date}</span>
            <span><i class="far fa-user text-primary mx-2"></i>${blogPost.author}</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">
            ${blogPost.title}
          </h3>
          <p class="text-gray-600 mb-4">
            ${blogPost.excerpt}
          </p>
          <a href=${blogPost.link} class="text-primary hover:text-blue-700 font-medium">Đọc tiếp<i class="fas fa-arrow-right ml-1"></i></a>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
};

const renderTestimonials = (containerId, testimonialsData) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  testimonialsData.forEach((testimonial) => {
    html += `
      <div class="bg-gray-100 p-6 rounded-lg">
        <div class="flex text-yellow-400 mb-4">
          ${renderStars(testimonial.star)}
        </div>
        <p class="text-gray-700 italic mb-4">
          "${testimonial.quote}"
        </p>
        <div class="flex items-center">
          <div class="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <img src=${testimonial.imgSrc} alt="${testimonial.alt}" />
          </div>
          <div class="ml-3">
            <h4 class="font-bold">${testimonial.name}</h4>
            <p class="text-gray-600 text-sm">${testimonial.title}</p>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
};

const renderFooterQuickLinks = (containerId, footerQuickLinksData) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  footerQuickLinksData.forEach((footerQuickLink) => {
    html += `
      <li>
        <a href=${footerQuickLink.href} class="text-gray-400 hover:text-white">${footerQuickLink.text}</a>
      </li>
    `;
  });
  container.innerHTML = html;
};

const renderFooterCategoryLinks = (containerId, footerCategoryLinksData) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  footerCategoryLinksData.forEach((footerCategoryLink) => {
    html += `
      <li>
        <a href=${footerCategoryLink.href} class="text-gray-400 hover:text-white">${footerCategoryLink.text}</a>
      </li>
    `;
  });
  container.innerHTML = html;
};

renderNavigation("main-nav-ul", navLinks);
renderCategories("product-categories-grid", categories);
renderFeaturedProducts("featured-products-grid", featuredProducts);
renderNewArrivals("new-arrivals-grid", newArrivals);
renderBlogPosts("blog-posts-grid", blogPosts);
renderTestimonials("testimonials-grid", testimonials);
renderFooterQuickLinks("footer-quick-links", footerQuickLinks);
renderFooterCategoryLinks("footer-category-links", footerCategoryLinks);
