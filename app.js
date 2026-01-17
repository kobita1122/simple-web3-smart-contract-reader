document.getElementById("connectBtn").addEventListener("click", async () => {
  await connectWallet();
  await updateNetwork();
});

document.getElementById("readBtn").addEventListener("click", async () => {
  await readContractData();
});
