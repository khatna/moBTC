var Socket = new WebSocket("ws://134.209.106.19:8080");

// Add event listener
var input = document.getElementById("input");
input.addEventListener('change', e => {
    Socket.send(e.target.value);
});

// Create a new transcation list item
var createTx = tx => {
    let { txid, value, from, to } = tx;
    var li = document.createElement("li");
    
    li.innerHTML = 
    `
        <span class="value">${value} BTC<\span> sent from ${from} to ${to}. 
        <div class="txid">
            <a href="https://mempool.space/tx/${txid}" target="blank">TXID: ${txid}</a>
        <\div>
    `;

    document.getElementById("tx-list").prepend(li);
}

Socket.onmessage = e => {
    createTx(JSON.parse(e.data));
};

