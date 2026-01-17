async function updateNetwork() {
  const network = await getNetworkName();
  document.getElementById("network").innerText = network;
}

function updateResult(value) {
  document.getElementById("result").innerText = value;
}
