async function criptoCurrency(coin, method) {
    let result = null;
    await fetch(`https://www.mercadobitcoin.net/api/${coin}/${method}/`)
        .then((response) => {
            if (response.ok) {
                result = response;
                return response.json();
            }
        })
        .catch((error)=>{
            console.log(`error: ${error}`);
        })
}
criptoCurrency("BTC", "ticker");
