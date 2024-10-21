function performSearch() {
  const searchQuery = document.getElementById("searchInput").value;
  if (searchQuery) {
    alert("Searching for: " + searchQuery);
  } else {
    alert("Please enter a problem to search for.");
  }
}
