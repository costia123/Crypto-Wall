function test(){
    console.log("first")
    axios.get(`https://api.wsf.fr/rss.xml`).then((res) => {
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