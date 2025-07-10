function autoCalculate() {
  const basePrice = parseFloat(document.getElementById("basePrice").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);

  const taxedPrice = !isNaN(basePrice) ? basePrice * 1.10 : null;
  const costPerItem = (!isNaN(taxedPrice) && !isNaN(quantity) && quantity > 0)
    ? taxedPrice / quantity : null;
  const itemsPer8 = (!isNaN(sellingPrice) && sellingPrice > 0)
    ? Math.floor(8 / sellingPrice) : null;
  const rm8Packs = (!isNaN(quantity) && itemsPer8 > 0)
    ? Math.floor(quantity / itemsPer8) : null;
  const totalRevenue = (!isNaN(rm8Packs) && rm8Packs > 0)
    ? rm8Packs * 8 : null;
  const profit = (!isNaN(totalRevenue) && !isNaN(basePrice))
    ? totalRevenue - basePrice : null;
  const retailPrice = (!isNaN(taxedPrice) && !isNaN(quantity) && quantity > 0)
    ? (taxedPrice / quantity) * 1.8 : null;

  document.getElementById("taxedPrice").value = taxedPrice !== null ? taxedPrice.toFixed(2) : "-";
  document.getElementById("costPerItem").value = costPerItem !== null ? costPerItem.toFixed(2) : "-";
  document.getElementById("itemsPer8").value = itemsPer8 !== null ? itemsPer8 : "-";
  document.getElementById("rm8Packs").value = rm8Packs !== null ? rm8Packs : "-";
  document.getElementById("totalRevenue").value = totalRevenue !== null ? totalRevenue.toFixed(2) : "-";
  document.getElementById("profit").value = profit !== null ? profit.toFixed(2) : "-";
  document.getElementById("retailPrice").value = retailPrice !== null ? retailPrice.toFixed(2) : "-";

  document.getElementById("qtyText").innerText = !isNaN(quantity) ? quantity : "-";
  document.getElementById("packText").innerText = !isNaN(rm8Packs) ? rm8Packs : "-";
}

function clearAll() {
  document.getElementById("basePrice").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("sellingPrice").value = "";

  document.getElementById("taxedPrice").value = "-";
  document.getElementById("costPerItem").value = "-";
  document.getElementById("itemsPer8").value = "-";
  document.getElementById("rm8Packs").value = "-";
  document.getElementById("totalRevenue").value = "-";
  document.getElementById("profit").value = "-";
  document.getElementById("retailPrice").value = "-";

  document.getElementById("qtyText").innerText = "-";
  document.getElementById("packText").innerText = "-";
}

window.addEventListener("DOMContentLoaded", () => {
  ["basePrice", "quantity", "sellingPrice"].forEach(id => {
    document.getElementById(id).addEventListener("input", autoCalculate);
  });

  document.getElementById("clearButton").addEventListener("click", clearAll); // <--- THIS!
  
  autoCalculate(); // Optional to initialize output
});
