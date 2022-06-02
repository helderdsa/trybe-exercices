const API_URL = 'https://api.coincap.io/v2/assets';
const ulCoins = document.querySelector('#coins');

const append = (coin) => {
  const li = document.createElement('li');
  li.innerHTML = `${coin.id} ${coin.symbol}: USD ${coin.priceUsd}`

  ulCoins.appendChild(li)
}

const getWebCoins = async () => {
  try {
    const response = await fetch(API_URL);
    const allCoins = await response.json();
    const dezPrimeiras = allCoins.data.filter((coin) => coin.rank <= 10)
  
    dezPrimeiras.forEach(element => {
      append(element)
    });
    console.log(allCoins);
  } catch (error) {
    console.log(`vixe deu bo ${error}`);
  }
};
window.onload = () => getWebCoins();
