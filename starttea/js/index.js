$(function () {
  //*** 頁首照片輪播
  function moveStore() {
    // 回傳 "0px"、"-960px"、"-1920px"
    let imgMarginLeft = $(".starttea img.store1").css("margin-left");
    // 根據 imgMarginLeft 的字數length，做出 margin-left 調整
    if (Number(imgMarginLeft.length) > 6) {
      // "-1920px" 第三張照片，需移至第一張
      $(".starttea .store img.store1").animate(
        {
          marginLeft: "0",
        },
        500
      );
    } else if (
      Number(imgMarginLeft.length) > 3 &&
      Number(imgMarginLeft.length) < 7
    ) {
      // "-920px" 第二張照片，需移至第三張
      $(".starttea .store img.store1").animate(
        {
          marginLeft: "-1920",
        },
        500
      );
    } else if (Number(imgMarginLeft.length) === 3) {
      // "0px" 第一張照片，需移至第二張
      $(".starttea .store img.store1").animate(
        {
          marginLeft: "-960",
        },
        500
      );
    }
  }
  // setInterval(moveStore, 2700);

  //*** 點擊 Menu 圖示
  $(".starttea .store_title .up .menu").on("click", function () {
    console.log("in");
    $(".starttea .open_menu").css({
      display: "block",
    });
  });
  // 關 open menu
  $(".starttea .open_menu").on("click", "div", function () {
    if ($(this).attr("class") === "close" || $(this).attr("class") === "item") {
      $(".starttea .open_menu").css({
        display: "none",
      });
    }
  });

  //*** 點擊快訊圖片，顯示詳細圖片
  $(".starttea .message").on("click", "img", function () {
    if (
      $(this).attr("class") === "message1" ||
      $(this).attr("class") === "message_btn1"
    ) {
      $(".starttea .open_message").css({
        display: "block",
      });
      $(".starttea .open_message .message_detail1").css({
        display: "block",
      });
      $(".starttea .open_message .close1").css({
        display: "block",
      });
    } else if (
      $(this).attr("class") === "message2" ||
      $(this).attr("class") === "message_btn2"
    ) {
      $(".starttea .open_message").css({
        display: "block",
      });
      $(".starttea .open_message .message_detail2").css({
        display: "block",
      });
      $(".starttea .open_message .close2").css({
        display: "block",
      });
    } else if (
      $(this).attr("class") === "message3" ||
      $(this).attr("class") === "message_btn3"
    ) {
      $(".starttea .open_message").css({
        display: "block",
      });
      $(".starttea .open_message .message_detail3").css({
        display: "block",
      });
      $(".starttea .open_message .close3").css({
        display: "block",
      });
    }
  });
  // 關 message detail
  $(".starttea .open_message").on("click", "div", function () {
    if ($(this).attr("class") === "close1") {
      $(".starttea .open_message").css({
        display: "none",
      });
      $(".starttea .open_message .message_detail1").css({
        display: "none",
      });
      $(".starttea .open_message .close1").css({
        display: "none",
      });
    } else if ($(this).attr("class") === "close2") {
      $(".starttea .open_message").css({
        display: "none",
      });
      $(".starttea .open_message .message_detail2").css({
        display: "none",
      });
      $(".starttea .open_message .close2").css({
        display: "none",
      });
    } else if ($(this).attr("class") === "close3") {
      $(".starttea .open_message").css({
        display: "none",
      });
      $(".starttea .open_message .message_detail3").css({
        display: "none",
      });
      $(".starttea .open_message .close3").css({
        display: "none",
      });
    }
  });
});
