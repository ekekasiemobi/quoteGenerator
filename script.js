const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "An unexamined life is not worth living.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "Happiness is not something ready-made. It comes from your own actions.",
  ];
  
  document.getElementById("generate-btn").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  });
  