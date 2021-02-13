import React from 'react';

interface Props {
  categories: string[];
  filterItems: (category: string) => void;
}

const Categories: React.FC<Props> = ({ categories, filterItems }) => {
  return (
    <>
      <div>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="mr-9 text-white  bg-black p-2 w-24 rounded-lg border-gray-400 border-2"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
