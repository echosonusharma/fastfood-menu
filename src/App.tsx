import React, { useState } from 'react';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<data[]>(items);
  const [categories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <div className="m-auto w-1/2">
        <div className="h-40 pt-7">
          <h1 className="text-6xl font-semibold">Menu</h1>
          <div className="bg-gray-500 w-24 h-2 rounded-lg" />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </div>
    </>
  );
};

export default App;
