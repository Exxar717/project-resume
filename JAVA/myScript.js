function hideContent(obj) {
  for (var i = 0; i < obj.length; i++) {
    document.getElementById([obj[i]]).style.display = "none";
  }
  document.getElementById("Education").style.display = "block";
}

function hideContent1(obj) {
  for (var i = 0; i < obj.length; i++) {
    document.getElementById([obj[i]]).style.display = "none";
  }
  document.getElementById("JobExp").style.display = "block";
}

function hideContent2(obj) {
  for (var i = 0; i < obj.length; i++) {
    document.getElementById([obj[i]]).style.display = "none";
  }
  document.getElementById("Skill_hobb").style.display = "block";
}