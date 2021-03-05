$(function () {
  // この中に記述
  $(".button").on("click", function () {
    // click
    //alert(1)
    let t = $("#title").val();
    let v = $("#text").val();
    console.log(v);
    console.log(t);

    if (v === "") {
      alert("何も入力されていません");
    }

    localStorage.setItem(t, v);
  });

  $(".button2").on("click", function () {
    // click
    //alert(1)
    //const value = localStorage.getItem("キー");
    //console.log(value);
    //$(".kekka").html(`<p>${value}</p>`);
    //localStorage.setItem("キー", v);
    for(let i =0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const data = localStorage.getItem(key)
      // htmlを表示する雛形
      const html = `
        <div class="data">
          <p class="title">${key}</p>
          <p class="text">${data}</p>
        </div>
      `
      $(".kekka").append(html);
    }

  });
  // この下は消しちゃダメ
});
