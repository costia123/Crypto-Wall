function test(){
    console.log("first")
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
           "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          'X-CMC_PRO_API_KEY': '307ff52f-acda-4891-9c37-68cb910c20c1',
        },
      }).then((res) => {
        console.log(res)
    })
    var l = "le prix est dynamic"
    return l;
}

function test2() {
    console.log("firstss")
    var l = "le prix est dynamic et reload !!!"
    document.getElementById("BTC_price").innerHTML = l
}