import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='group h-14 rounded-full bg- box-border py-2 z-50 absolute -translate-x-14'>
      <input
        className='float-left w-0 bg-inherit outline-black text-cyan-400 leading-10 duration-500 ease-in-out group-hover:w-48 absolute -translate-x-40'
        type='text'
        name='Search'
        placeholder='Type to Search'
        value={searchTerm}
        onChange={handleChange}
        // onClick={handleClick}
      />
      <div
        className='float-right flex h-10 w-10 items-center justify-center rounded-full bg-white text-black no-underline duration-500 group-hover:text-cyan-400'
        href='#'
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl z-10' />
      </div>
      {searchTerm.length > 0 && (
        <ul className='bg-white absolute -translate-x-40 translate-y-10 w-48'>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
