import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() =>{

    fetchItems();

  }, []);


  const [data, setItems] = useState([]);

  const fetchItems = async () => {

    const items= await fetch(

      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMzI4YjNkMC03YjFmLTAxM2EtNGFjNS01ZmNkODM1NzQ2MTIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjQ2MDkyNTgwLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InVwY29taW5naW5wdWJnIn0.F3vso-J20uOsuJi_0LYsfLtB2v-PmCXUWjWltzJ9GBE '

    );

    const data = await items.json();
    console.log(data);
    setItems(data.data);
  };

  return (
    <div>
      {data.map(item =>(
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}

export default Shop;
