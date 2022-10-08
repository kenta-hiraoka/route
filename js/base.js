const main = document.querySelector("main");

  const article = this.document.createElement("article");
  const route_order_container_item = this.document.createElement("div");
  route_order_container_item.className = "route_order_container_item";

  const remove_item = this.document.createElement("img");
  remove_item.className = "remove_item";
  remove_item.setAttribute("src","images/btn_close_graygreen.png");

  const route_order_container_item_number = this.document.createElement("div");
  route_order_container_item_number.className = "route_order_container_item_number";

  const item_number_char = this.document.createElement("p");
  item_number_char.className = "route_order_container_item_number p";
  item_number_char.textContent = "2";

  const route_order_container_image_area = this.document.createElement("div");
  route_order_container_image_area.className = "route_order_container_image_area";

  const route_order_container_image_area_img = this.document.createElement("img");
  route_order_container_image_area_img.className = "route_order_container_item_area_image";
  route_order_container_image_area_img.setAttribute("src","./images/3160544_s.jpg");

  const route_order_container_text_area = this.document.createElement("div");
  route_order_container_text_area.className = "route_order_container_text_area";

  const route_order_container_item_area_title = this.document.createElement("div");
  route_order_container_item_area_title.className = "route_order_container_item_area_title p";
  route_order_container_item_area_title.textContent = "2番目の目的地名";

  const route_order_container_item_area_description = this.document.createElement("div");
  route_order_container_item_area_description.className = "route_order_container_item_area_description";
  route_order_container_item_area_description.textContent = "2番目の説明が入ります。2番目の説明が入ります。2番目の説明が入ります。2番目の説明が入ります。2番目の説明が入ります。2番目の説明が入ります。2番目の説明が入ります。2番目の説明が入ります。2番目の説明が入ります。2番目の説明が入ります。";

function createArticle() {
  article.appendChild(route_order_container_item);
  route_order_container_item.appendChild(remove_item);
  route_order_container_item.appendChild(route_order_container_item_number);
  route_order_container_item_number.appendChild(item_number_char);
  route_order_container_item.appendChild(route_order_container_image_area);
  route_order_container_image_area.appendChild(route_order_container_image_area_img);
  route_order_container_item.appendChild(route_order_container_text_area);
  route_order_container_text_area.appendChild(route_order_container_item_area_title);
  route_order_container_text_area.appendChild(route_order_container_item_area_description);
  main.appendChild(article);
}

function removeArticle() {
  article.removeChild(route_order_container_item);
  route_order_container_item.removeChild(remove_item);
  route_order_container_item.removeChild(route_order_container_item_number);
  route_order_container_item_number.removeChild(item_number_char);
  route_order_container_item.removeChild(route_order_container_image_area);
  route_order_container_image_area.removeChild(route_order_container_image_area_img);
  route_order_container_item.removeChild(route_order_container_text_area);
  route_order_container_text_area.removeChild(route_order_container_item_area_title);
  route_order_container_text_area.removeChild(route_order_container_item_area_description);
  main.removeChild(article);
}

const items = [""];

function createArticles() {
  items.forEach(function (item) {
  createArticle(item);
  });
}


$(function() {
  // チェックボックスのクリックを無効化
  $('.button_close').click(function() {
    return true;
  });
});

// 画像がクリックされた時の処理です。
$('.image_box').on('click', function() {
  if (!$(this).is('.checked')) {
    // チェックが入っていない画像をクリックした場合チェックを入れる
    $(this).addClass('checked');
    createArticles();
    items.push();
  }
  else {
    // チェックが入っている画像をクリックした場合チェックを外す
    $(this).removeClass('checked');
    removeArticle();
  }
});

$(document).on('click', '.remove_item', function() {
  removeArticle();
  $('.image_box').removeClass('checked');
});