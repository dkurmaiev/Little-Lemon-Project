import React, { useState } from 'react';

const Menu = () => {
  
  const menuItems = [
    {
      id: 1,
      category: 'Salads',
      name: 'Greek Salad',
      description: 'Fresh salad with tomatoes, cucumbers, olives, and feta cheese.',
      price: 10.99,
      weight: '250g',
    },
    {
      id: 2,
      category: 'Salads',
      name: 'Caesar Salad',
      description: 'Classic Caesar salad with crisp romaine lettuce and Caesar dressing.',
      price: 8.99,
      weight: '220g',
    },
    {
      id: 3,
      category: 'Fried',
      name: 'Fried Chicken',
      description: 'Crispy fried chicken served with a side of coleslaw.',
      price: 12.99,
      weight: '300g',
    },
    {
      id: 4,
      category: 'Fried',
      name: 'Mozzarella Sticks',
      description: 'Golden mozzarella sticks served with marinara sauce.',
      price: 7.99,
      weight: '200g',
    },
    {
      id: 5,
      category: 'Grill',
      name: 'Grilled Steak',
      description: 'Juicy steak seasoned and grilled to perfection.',
      price: 18.99,
      weight: '350g',
    },
    {
      id: 6,
      category: 'Grill',
      name: 'Grilled Salmon',
      description: 'Fresh salmon fillet grilled with herbs and lemon.',
      price: 16.99,
      weight: '250g',
    },
    {
      id: 7,
      category: 'Cold Drinks',
      name: 'Iced Tea',
      description: 'Refreshing iced tea served with lemon slices.',
      price: 2.99,
      volume: '500ml',
    },
    {
      id: 8,
      category: 'Cold Drinks',
      name: 'Lemonade',
      description: 'Homemade lemonade with a hint of mint.',
      price: 3.49,
      volume: '450ml',
    },
    {
      id: 9,
      category: 'Hot Drinks',
      name: 'Cappuccino',
      description: 'Rich and creamy cappuccino topped with frothy milk.',
      price: 4.99,
      volume: '350ml',
    },
    {
      id: 10,
      category: 'Hot Drinks',
      name: 'Hot Chocolate',
      description: 'Indulgent hot chocolate with whipped cream and chocolate shavings.',
      price: 4.49,
      volume: '400ml',
    },
    {
      id: 11,
      category: 'Alcoholic Drinks',
      name: 'Margarita',
      description: 'Classic margarita cocktail with a salted rim.',
      price: 8.99,
      volume: '250ml',
    },
    {
      id: 12,
      category: 'Alcoholic Drinks',
      name: 'Mojito',
      description: 'Refreshing mojito with fresh lime and mint leaves.',
      price: 9.49,
      volume: '300ml',
    },
    {
      id: 13,
      category: 'Pizza',
      name: 'Pepperoni Pizza',
      description: 'Classic pepperoni pizza with tomato sauce and mozzarella cheese.',
      price: 14.99,
      size: '12"',
    },
    {
      id: 14,
      category: 'Pizza',
      name: 'Vegetarian Pizza',
      description: 'Delicious vegetarian pizza with assorted veggies and cheese.',
      price: 13.99,
      size: '12"',
    },
    {
      id: 15,
      category: 'Burger',
      name: 'Cheeseburger',
      description: 'Juicy beef patty topped with cheese, lettuce, and tomato.',
      price: 9.99,
    },
    {
      id: 16,
      category: 'Burger',
      name: 'Veggie Burger',
      description: 'Vegetarian burger with a tasty veggie patty and fresh toppings.',
      price: 8.99,
    },
    {
      id: 17,
      category: 'Pasta',
      name: 'Spaghetti Bolognese',
      description: 'Classic spaghetti with savory meat sauce.',
      price: 11.99,
      weight: '300g',
    },
    {
      id: 18,
      category: 'Pasta',
      name: 'Penne Alfredo',
      description: 'Creamy penne pasta with Alfredo sauce.',
      price: 10.99,
      weight: '250g',
    },
    {
      id: 19,
      category: 'Seafood',
      name: 'Shrimp Scampi',
      description: 'Garlic butter shrimp served with pasta.',
      price: 15.99,
      weight: '250g',
    },
    {
      id: 20,
      category: 'Seafood',
      name: 'Lobster Tail',
      description: 'Grilled lobster tail with garlic butter.',
      price: 19.99,
      weight: '200g',
    },
    {
      id: 21,
      category: 'Desserts',
      name: 'Chocolate Cake',
      description: 'Decadent chocolate cake with a rich chocolate ganache.',
      price: 7.99,
    },
    {
      id: 22,
      category: 'Desserts',
      name: 'Tiramisu',
      description: 'Classic Italian tiramisu dessert with coffee and mascarpone.',
      price: 8.99,
    },
    {
        id: 23,
        category: 'Desserts',
        name: 'Lemon Dessert',
        description: 'Decadent lemon-flavored dessert with a tangy twist.',
        price: 5.99,
      },
      {
        id: 24,
        category: 'Desserts',
        name: 'Chocolate Brownie',
        description: 'Rich chocolate brownie with a scoop of vanilla ice cream.',
        price: 6.49,
      },
      {
        id: 25,
        category: 'Desserts',
        name: 'Tropical Fruit Parfait',
        description: 'Layered parfait with tropical fruits and yogurt.',
        price: 4.99,
      },
    
    {
      id: 26,
      category: 'Sides',
      name: 'French Fries',
      description: 'Crispy golden French fries.',
      price: 3.99,
    },
    {
      id: 27,
      category: 'Sides',
      name: 'Onion Rings',
      description: 'Delicious onion rings with a crunchy coating.',
      price: 4.49,
    },
    {
      id: 28,
      category: 'Sides',
      name: 'Garlic Bread',
      description: 'Toasty garlic bread with garlic butter and herbs.',
      price: 2.99,
    },
    
    {
      id: 29,
      category: 'Bruschetta',
      name: 'Tomato Bruschetta',
      description: 'Classic Italian appetizer with fresh tomatoes and basil.',
      price: 6.99,
    },
    {
      id: 30,
      category: 'Bruschetta',
      name: 'Mushroom Bruschetta',
      description: 'Sautéed mushrooms and garlic on toasted bread.',
      price: 7.49,
    },
    {
      id: 31,
      category: 'Bruschetta',
      name: 'Avocado Bruschetta',
      description: 'Avocado, cherry tomatoes, and balsamic glaze on toasted bread.',
      price: 8.99,
    },
    
    
  ];
  const [cart, setCart] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
 
  

  // Function to update the quantity of selected items
  const updateQuantity = (itemId, amount) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + amount,
    }));
  };

  // Function to add an item to the cart
  const addToCart = (menuItem) => {
    const quantity = itemQuantities[menuItem.id] || 0;
    if (quantity > 0) {
      const itemWithQuantity = { ...menuItem, quantity };
      setCart([...cart, itemWithQuantity]);
    }
  };
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
    
// Update the quantity of selected items in the cart
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
  };
  
  
  

  const handleOrder = () => {
    if (/^\d{9}$/.test(phoneNumber)) {
      setOrderPlaced(true);
    } else {
      alert('Please enter a valid phone number with exactly 9 digits.');
    }
  };
  
  return (
    <div className="menu">
      <div className="cart">
        <h2 className="cart-title">Cart</h2>
        {cart.length === 0 && !orderPlaced ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <button onClick={() => removeFromCart(item.id)} className="remove-from-cart-button">Delete</button>
                  {item.quantity}x {item.name} - ${item.price * item.quantity}
                </li>
              ))}
            </ul>
            <p className="cart-total">
              Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </p>
            {!orderPlaced ? (
              <div className="order-details">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button
                  className="order-button"
                  onClick={handleOrder}
                >
                  Order
                </button>
              </div>
            ) : (
              <p className="order-placed-message">Our manager will contact you shortly to confirm your order.</p>
            )}
          </>
        )}
      </div>
    <div className="menu-center">
      <h1 className="menu-title">Menu</h1>
      {menuItems.reduce((acc, menuItem) => {
        const lastCategory = acc[acc.length - 1];
        if (lastCategory && lastCategory.category === menuItem.category) {
          lastCategory.items.push(menuItem);
        } else {
          acc.push({
            category: menuItem.category,
            items: [menuItem],
          });
        }
        return acc;
      }, []).map((category) => (
        <div key={category.category}>
          <h2 className="menu-category">{category.category}</h2>
          {category.items.map((menuItem) => (
            <div key={menuItem.id} className="menu-item">
              <h2 className="menu-item-title">{menuItem.name}</h2>
              <p className="menu-item-description">{menuItem.description}</p>
              <p className="menu-item-price">Price: ${menuItem.price}</p>
              <div className="menu-item-controls">
                <button
                  className="menu-item-quantity-button"
                  onClick={() => updateQuantity(menuItem.id, -1)}
                >
                  -
                </button>
                <span className="menu-item-quantity">
                  {itemQuantities[menuItem.id] || 0}
                </span>
                <button
                  className="menu-item-quantity-button"
                  onClick={() => updateQuantity(menuItem.id, 1)}
                >
                  +
                </button>
                <div className="menu-item-button-separator"></div>
                <button
                  className="menu-item-button"
                  onClick={() => addToCart(menuItem)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);
};
export default Menu;
