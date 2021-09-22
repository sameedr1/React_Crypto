import CoinGecko from "coingecko-api";
import React, { Component } from 'react'
import Link from 'next/link'

const coinGeckoClient = new CoinGecko();

export default function Home(props) {
  const { data } = props.result;

  return (
    
    <body>
      <nav>
      <div >
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
      </nav>
      
    <table className="table">
      <thead>
        <tr>
          <th> Coin Icon </th>
          <th> Coin Name </th>
         
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.id}>
            <td>
              <img
                src={coin.image}
                style={{ width: 25, height: 25, marginRight: 10 }}
              />
              
            </td>
            <td>{coin.symbol.toUpperCase()}</td>
      
          </tr>
        ))}
      </tbody>
      
    </table>
   
    </body>
  );
}

export async function getServerSideProps(context) {
  //pre-render this page on each request using the data returned
  const params = {
    order: CoinGecko.ORDER.PRICE_ASC,
  }; //Order results by price (ascending)
  const result = await  coinGeckoClient.coins.markets({ params });
  return {
    props: {
      result,
    },
  };
}