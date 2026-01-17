async function readContractData() {
  const address = document.getElementById("contractInput").value;
  const contract = new ethers.Contract(address, CONTRACT_ABI, provider);

  const data = await contract[DEFAULT_METHOD]();
  updateResult(data);
}
