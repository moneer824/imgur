var parent = document.getElementById("parent");
var hide = document.getElementById("hide");
var fullSc = document.getElementById("full-screen");
var page = 1;

async function unsplash(query = "random") {
  let res = await fetch(
    `https://api.unsplash.com/search/photos/?page=${page}&query=${query}&per_page=16&client_id=oSepL4SgiY-kAVU0aUW_w3IdwJL9PlnDC-SWpXd7PSY`
  );
  let data = await res.json();
  console.log(data.results);
  showImages(data.results);
}

function showImages(data) {
  data.forEach((item) => {
    // console.log(item.links.download);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = item.urls.small;
    div.onclick = () => {
      fullSc.innerHTML = null;

      let img = document.createElement("img");
      img.src = item.urls.regular;
      fullSc.style.display = "block";
      hide.style.display = "block";
      fullSc.append(img);
      console.log(item.urls.regular);
    };
    div.append(img);
    parent.append(div);
  });
}

function search() {
  parent.innerHTML = null;
  let inp = document.getElementById("search-inp").value;
  console.log(inp);
  unsplash(inp);
}

function more() {
  let inp = document.getElementById("search-inp").value;
  page++;
  console.log(inp);
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
