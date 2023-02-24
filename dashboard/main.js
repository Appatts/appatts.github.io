function showFeed() {
  document.getElementById("Feed").style.display = "block";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Profile").style.display = "none";
}

function showProjects() {
  document.getElementById("Feed").style.display = "none";
  document.getElementById("Projects").style.display = "block";
  document.getElementById("Profile").style.display = "none";
}

function showProfile() {
  document.getElementById("Feed").style.display = "none";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Profile").style.display = "block";
}
