import React, { useState, useMemo } from "react";
import "../beverageMenu.css";

function BeverageSubmenu() {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const drinkMenu = [
    // Beer & Cider 🍺
    {
      name: "Heineken Lager",
      alcoholPercent: 5.0,
      category: "Beer & Cider",
      sizes: [
        { size: "Pint", price: 5.0 },
        { size: "Half Pint", price: 2.8 },
        { size: "Bottle (330ml)", price: 4.5 },
      ],
    },
    {
      name: "Guinness Draught",
      alcoholPercent: 4.2,
      category: "Beer & Cider",
      sizes: [
        { size: "Pint", price: 5.2 },
        { size: "Half Pint", price: 3.0 },
      ],
    },
    {
      name: "Budweiser",
      alcoholPercent: 4.5,
      category: "Beer & Cider",
      sizes: [
        { size: "Bottle (330ml)", price: 4.0 },
        { size: "Can (500ml)", price: 5.5 },
      ],
    },
    {
      name: "Stella Artois",
      alcoholPercent: 5.2,
      category: "Beer & Cider",
      sizes: [
        { size: "Pint", price: 5.1 },
        { size: "Half Pint", price: 2.9 },
        { size: "Bottle (330ml)", price: 4.7 },
      ],
    },
    {
      name: "Strongbow Cider",
      alcoholPercent: 4.5,
      category: "Beer & Cider",
      sizes: [
        { size: "Pint", price: 4.8 },
        { size: "Half Pint", price: 2.7 },
        { size: "Bottle (500ml)", price: 5.0 },
      ],
    },
    {
      name: "Kopparberg Strawberry & Lime",
      alcoholPercent: 4.0,
      category: "Beer & Cider",
      sizes: [{ size: "Bottle (500ml)", price: 5.2 }],
    },

    // Wine 🍷
    {
      name: "Echo Falls Merlot",
      alcoholPercent: 13.0,
      category: "Wine",
      sizes: [
        { size: "Glass (175ml)", price: 4.2 },
        { size: "Bottle (750ml)", price: 16.0 },
      ],
    },
    {
      name: "Yellow Tail Shiraz",
      alcoholPercent: 13.5,
      category: "Wine",
      sizes: [
        { size: "Glass (175ml)", price: 4.5 },
        { size: "Bottle (750ml)", price: 17.0 },
      ],
    },
    {
      name: "Jacob's Creek Chardonnay",
      alcoholPercent: 12.0,
      category: "Wine",
      sizes: [
        { size: "Glass (175ml)", price: 4.3 },
        { size: "Bottle (750ml)", price: 16.5 },
      ],
    },
    {
      name: "Blossom Hill Rosé",
      alcoholPercent: 11.5,
      category: "Wine",
      sizes: [
        { size: "Glass (175ml)", price: 4.0 },
        { size: "Bottle (750ml)", price: 15.5 },
      ],
    },
    {
      name: "Barefoot Pinot Grigio",
      alcoholPercent: 12.5,
      category: "Wine",
      sizes: [
        { size: "Glass (175ml)", price: 4.4 },
        { size: "Bottle (750ml)", price: 16.8 },
      ],
    },

    // Spirits 🥃
    {
      name: "Jack Daniel's Whiskey",
      alcoholPercent: 40.0,
      category: "Spirits",
      sizes: [
        { size: "Single (25ml)", price: 4.5 },
        { size: "Double (50ml)", price: 8.5 },
      ],
    },
    {
      name: "Jameson Irish Whiskey",
      alcoholPercent: 40.0,
      category: "Spirits",
      sizes: [
        { size: "Single (25ml)", price: 4.7 },
        { size: "Double (50ml)", price: 8.7 },
      ],
    },
    {
      name: "Smirnoff Vodka",
      alcoholPercent: 37.5,
      category: "Spirits",
      sizes: [
        { size: "Single (25ml)", price: 4.0 },
        { size: "Double (50ml)", price: 7.8 },
      ],
    },
    {
      name: "Absolut Vodka",
      alcoholPercent: 40.0,
      category: "Spirits",
      sizes: [
        { size: "Single (25ml)", price: 4.5 },
        { size: "Double (50ml)", price: 8.3 },
      ],
    },
    {
      name: "Bacardi White Rum",
      alcoholPercent: 35.0,
      category: "Spirits",
      sizes: [
        { size: "Single (25ml)", price: 4.2 },
        { size: "Double (50ml)", price: 7.9 },
      ],
    },
    {
      name: "Captain Morgan Spiced Rum",
      alcoholPercent: 35.0,
      category: "Spirits",
      sizes: [
        { size: "Single (25ml)", price: 4.5 },
        { size: "Double (50ml)", price: 8.2 },
      ],
    },
    {
      name: "Gordon's Gin",
      alcoholPercent: 37.5,
      category: "Spirits",
      sizes: [
        { size: "Single (25ml)", price: 4.0 },
        { size: "Double (50ml)", price: 7.8 },
      ],
    },
    {
      name: "Bombay Sapphire Gin",
      alcoholPercent: 40.0,
      category: "Spirits",
      sizes: [
        { size: "Single (25ml)", price: 4.8 },
        { size: "Double (50ml)", price: 9.0 },
      ],
    },

    // Soft Drinks 🧃
    {
      name: "Coca-Cola",
      alcoholPercent: 0.0,
      category: "Soft Drinks",
      sizes: [
        { size: "Can (330ml)", price: 2.0 },
        { size: "Bottle (500ml)", price: 2.5 },
      ],
    },
    {
      name: "Diet Coke",
      alcoholPercent: 0.0,
      category: "Soft Drinks",
      sizes: [
        { size: "Can (330ml)", price: 2.0 },
        { size: "Bottle (500ml)", price: 2.5 },
      ],
    },
    {
      name: "Fanta Orange",
      alcoholPercent: 0.0,
      category: "Soft Drinks",
      sizes: [
        { size: "Can (330ml)", price: 2.0 },
        { size: "Bottle (500ml)", price: 2.5 },
      ],
    },
    {
      name: "Sprite",
      alcoholPercent: 0.0,
      category: "Soft Drinks",
      sizes: [
        { size: "Can (330ml)", price: 2.0 },
        { size: "Bottle (500ml)", price: 2.5 },
      ],
    },
    {
      name: "Appletiser",
      alcoholPercent: 0.0,
      category: "Soft Drinks",
      sizes: [{ size: "Bottle (275ml)", price: 2.5 }],
    },
    {
      name: "Still Water",
      alcoholPercent: 0.0,
      category: "Soft Drinks",
      sizes: [
        { size: "500ml", price: 1.5 },
        { size: "1L", price: 2.5 },
      ],
    },
    {
      name: "Sparkling Water",
      alcoholPercent: 0.0,
      category: "Soft Drinks",
      sizes: [
        { size: "500ml", price: 1.5 },
        { size: "1L", price: 2.5 },
      ],
    },
  ];

  const categoryIcons = {
    Wine: "🍷",
    Spirits: "🥃",
    "Beer & Cider": "🍺",
    "Soft Drinks": "🧃",
  };

  const groupedByCategory = useMemo(() => {
    const groups = {};
    drinkMenu.forEach((drink) => {
      if (!groups[drink.category]) groups[drink.category] = [];
      groups[drink.category].push(drink);
    });
    return groups;
  }, []);

  // Flatten grouped drinks into a single array but keep category info for pagination
  const flattenedDrinks = useMemo(() => {
    let arr = [];
    Object.entries(groupedByCategory).forEach(([category, drinks]) => {
      drinks.forEach((drink) => arr.push({ ...drink, category }));
    });
    return arr;
  }, [groupedByCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(flattenedDrinks.length / ITEMS_PER_PAGE);

  // Drinks for current page
  const currentDrinks = flattenedDrinks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Group current page drinks again by category for display
  const pageGroupedByCategory = useMemo(() => {
    const groups = {};
    currentDrinks.forEach((drink) => {
      if (!groups[drink.category]) groups[drink.category] = [];
      groups[drink.category].push(drink);
    });
    return groups;
  }, [currentDrinks]);

  return (
    <div className="submenu-container">
      <h3 className="submenu-heading">Drinks Menu</h3>
      <p className="pageCount">
        Page {currentPage} of {totalPages}
      </p>

      {Object.entries(pageGroupedByCategory).map(([category, drinks]) => (
        <div key={category} className="submenu-section">
          <h4 className="submenu-subheading">
            {category}
          </h4>
          <ul className="submenu-list">
            {drinks.map((drink) => (
              <li key={drink.name} className="menu-item">
                <strong>{drink.name}</strong> —{" "}
                <div className="sizes-row">
  {drink.sizes.map(({ size, price }) => (
    <span key={size} className="size-price">
      {size} — £{price.toFixed(2)}
    </span>
  ))}
</div>
                {drink.alcoholPercent > 0
                  ? `(${drink.alcoholPercent}% ABV)`
                  : "(Non-alcoholic)"}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="pagination-buttons">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BeverageSubmenu;
