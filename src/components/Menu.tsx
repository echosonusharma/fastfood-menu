import React from 'react';

interface Props {
  menuItems: data[];
}

const Menu: React.FC<Props> = ({ menuItems }) => {
  return (
    <>
      <div>
        {menuItems.map(
          (items: {
            id: number;
            title: string;
            price: number;
            img: string;
            desc: string;
          }) => {
            const { id, title, price, img, desc } = items;
            return (
              <div key={id} className="pt-20">
                <img
                  src={img}
                  alt={title}
                  width="600px"
                  className="h-96 object-center  border-gray-400 border-4 "
                />
                <div className="flex flex-row justify-between w-144 text-lg font-bold pt-1">
                  <h1>{title.toUpperCase()}</h1>
                  <h1>${price}</h1>
                </div>
                <p className="w-144 pt-5">{desc}</p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Menu;
