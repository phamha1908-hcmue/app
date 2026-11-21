/* ---------- 3.2.1 ---------- */
var divEl = document.getElementById("hover_div");
divEl.onmouseover = function () { divEl.innerHTML = "Mouse Event"; divEl.classList.add("dang-hover"); };
divEl.onmouseout  = function () { divEl.innerHTML = "Hover Me";    divEl.classList.remove("dang-hover"); };

var img = document.getElementById("hinh");
var W = 80, H = 80;                          // kích thước gốc
img.onmouseover = function () {              // tăng 10%
  img.style.width  = (W * 1.1) + "px";
  img.style.height = (H * 1.1) + "px";
};
img.onmouseout = function () {
  img.style.width  = W + "px";
  img.style.height = H + "px";
};

document.getElementById("btn_time").onclick = function () {
  var s = "Ngày giờ hiện tại: " + new Date().toLocaleString("vi-VN");
  document.getElementById("kq_time").innerHTML = s;
  try { alert(s); } catch (e) {}
};

document.getElementById("btn_hoa").onclick = function () {
  var t = document.getElementById("txt_hoa");
  t.value = t.value.toUpperCase();
};

/* ---------- 3.2.2 ---------- */
function xemGia() {
  var ten = document.getElementById("ten_hoa_qua").value.trim().toLowerCase();
  var kq = document.getElementById("kq_gia");
  var gia;
  switch (ten) {
    case "ổi":        gia = "20000 VNĐ/kg"; break;
    case "dưa hấu":   gia = "20000 VNĐ/kg"; break;
    case "táo":       gia = "30000 VNĐ/kg"; break;
    case "cam":       gia = "40000 VNĐ/kg"; break;
    case "chôm chôm": gia = "40000 VNĐ/kg"; break;
    case "măng cụt":  gia = "50000 VNĐ/kg"; break;
    default:          gia = null;
  }
  kq.innerHTML = gia ? '<span class="gia">' + gia + '</span>'
                     : '<span class="khong">Tìm không thấy</span>';
}

// Nút gợi ý: bấm vào để điền sẵn tên hoa quả
var dsHoaQua = ["Ổi", "Dưa Hấu", "Táo", "Cam", "Chôm Chôm", "Măng Cụt"];
for (var i = 0; i < dsHoaQua.length; i++) {
  var b = document.createElement("button");
  b.className = "phu";
  b.textContent = dsHoaQua[i];
  b.onclick = (function (ten) {
    return function () {
      document.getElementById("ten_hoa_qua").value = ten;
      xemGia();
    };
  })(dsHoaQua[i]);
  document.getElementById("goi_y").appendChild(b);
}
document.getElementById("ten_hoa_qua").onkeydown = function (e) { if (e.key === "Enter") xemGia(); };

/* ---------- 3.2.3 ---------- */
function tinhSoNgay() {
  var t = parseInt(document.getElementById("thang").value);
  var kq = document.getElementById("kq_ngay");
  switch (t) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      kq.innerHTML = 'Tháng ' + t + ' có <span class="ngay"><b>31</b> ngày</span>'; break;
    case 4: case 6: case 9: case 11:
      kq.innerHTML = 'Tháng ' + t + ' có <span class="ngay"><b>30</b> ngày</span>'; break;
    case 2:
      kq.innerHTML = 'Tháng 2 có <span class="ngay"><b>28 hoặc 29</b> ngày</span>'; break;
    default:
      kq.innerHTML = '<span class="khong">Tháng không hợp lệ, hãy nhập số từ 1 đến 12</span>';
  }
}
document.getElementById("thang").onkeydown = function (e) { if (e.key === "Enter") tinhSoNgay(); };
