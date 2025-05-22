import React from "react";

const ProductCard = ({ 
  imageSrc, 
  discount, 
  label, 
  brand, 
  title, 
  price, 
  oldPrice, 
  ratingIcon, 
  heartIcon,
  labelColor = "#44d810"
}) => (
  <div className="product-card-cat">
    <div className="image-container-cat">
      <img className="product-image-cat" src={imageSrc} alt={title} />
      {discount && (
        <div className="discount-badge-cat">
          <div className="discount-text-cat">{discount}</div>
        </div>
      )}
      {label && (
        <div className="label-badge-cat" style={{ backgroundColor: labelColor }}>
          <div className="label-text-cat">{label}</div>
        </div>
      )}
    </div>
    
    <div className="product-info-cat">
      <div className="brand-cat">{brand}</div>
      <div className="title-cat">{title}</div>
      <img className="rating-cat" src={ratingIcon} alt="Rating" />
      
      <div className="price-container-cat">
        <div className="current-price-cat">
          <span className="price-value-cat">{price}$</span>
          <span className="price-unit-cat">/шт.</span>
        </div>
        {oldPrice && (
          <div className="old-price-cat">
            <span className="old-price-value-cat">{oldPrice}$</span>
            <span className="price-unit-cat">/шт.</span>
          </div>
        )}
      </div>
      
      <div className="details-cat">
        <div className="detail-item-cat">
          <div className="delivery-dot-cat"></div>
          <span>Доставка</span>
        </div>
        <div className="detail-item-cat">
          <div className="stock-dot-cat"></div>
          <span>В наявності</span>
        </div>
      </div>
    </div>
    
    <img className="heart-icon-cat" src={heartIcon} alt="Like" />
  </div>
);

export function CatalogMain() {
  const products = [
    {
      imageSrc: "image1.png",
      discount: "-40%",
      label: "Новинка",
      brand: "BISTRUP",
      title: "Стілець обідній BISTRUP оливковий/дуб",
      price: "60",
      oldPrice: "100",
      ratingIcon: "group-900.svg",
      heartIcon: "heart0.svg"
    },
    {
      imageSrc: "image3.png",
      discount: "-40%",
      label: "Новинка",
      brand: "BISTRUP",
      title: "Стілець обідній BISTRUP оливковий/дуб",
      price: "60",
      oldPrice: "100",
      ratingIcon: "group-901.svg",
      heartIcon: "heart1.svg"
    },
    // ... остальные продукты
  ];

  return (
    <div className="catalog-container-cat">
      <div className="header-cat">
        <div className="results-cat">
          <span className="results-count-cat">188</span>
          <span className="results-text-cat">результатів для: ---</span>
        </div>
        
        <div className="breadcrumbs-cat">
          <span>Домашня сторінка</span>
          <img className="separator-cat" src="vector-70.svg" alt=">" />
          <span>Результат пошуку</span>
        </div>
        
        <div className="filters-cat">
          <div className="filter-active-cat">Товари(100)</div>
          <div className="filter-inactive-cat">Сторінки(50)</div>
        </div>
      </div>

      <div className="products-grid-cat">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}