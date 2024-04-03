
document.querySelectorAll('.image img').forEach(item => {
    item.onclick = function() {
        document.getElementById('modalImage').src = this.src;
        document.getElementById('imageModal').style.display = "block";
        document.getElementById('caption').innerHTML = this.alt;
    }
  });
  

  let close = document.getElementsByClassName("close")[0];
  

  close.onclick = function() {
    document.getElementById('imageModal').style.display = "none";
  }