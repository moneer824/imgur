var parent = document.getElementById("parent");
var hide = document.getElementById("hide");
var fullSc = document.getElementById("full-screen");
var page = 1;

async function unsplash(query = "random") {
  let res = await fetch(
    `https://api.unsplash.com/search/photos/?page=${page}&query=${query}&per_page=16&client_id=oSepL4SgiY-kAVU0aUW_w3IdwJL9PlnDC-SWpXd7PSY`
  );
  let data = await res.json();
  showImages(data.results);
}

function showImages(data) {
  data.forEach((item) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = item.urls.regular;
    div.onclick = () => {
      fullSc.innerHTML = null;
      let img = document.createElement("img");
      img.src = item.urls.regular;
      fullSc.style.display = "block";
      hide.style.display = "block";
      fullSc.append(img);
    };
    div.append(img);
    parent.append(div);
  });
}

function search() {
  parent.innerHTML = null;
  let inp = document.getElementById("search-inp").value;
  unsplash(inp);
}

function more() {
  let inp = document.getElementById("search-inp").value;
  page++;
  if (inp.length === 0) {
    inp = "random";
  }
  unsplash(inp);
}

function hideImg() {
  fullSc.style.display = "none";
  hide.style.display = "none";
}
unsplash();
