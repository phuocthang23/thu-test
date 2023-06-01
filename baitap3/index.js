//Bai tập trên lớp

var arrayMenu = [
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbfgidlp48WaQ9-QNdDDWfl9_BsmLzZzERw&usqp=CAU',
        ten: 'Nguyên lý kế toán',
        sochi: '3',
        giatien: '2400000',
        
    },
    {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbfgidlp48WaQ9-QNdDDWfl9_BsmLzZzERw&usqp=CAU',
        ten: 'Tư tưởng HỒ CHI minh',
        sochi: '2',
        giatien: '1600000',
        
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbfgidlp48WaQ9-QNdDDWfl9_BsmLzZzERw&usqp=CAU',
        ten: 'Tin Học Ứng Dụng',
        sochi: '4',
        giatien: '3200000',
    },
    {
        id: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbfgidlp48WaQ9-QNdDDWfl9_BsmLzZzERw&usqp=CAU',
        ten: 'Toán Cao Cấp A1',
        sochi: '2',
        giatien: '1600000',
    },
    {
        id: 6,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbfgidlp48WaQ9-QNdDDWfl9_BsmLzZzERw&usqp=CAU',
        ten: 'Lịch sử Văn minh thế giới',
        sochi: '1',
        giatien: '800000',
    },
]
var arrayGioHang = []

// hiển thị danh sách môn học 
var i = 0;
var xHtml = '';
for(i; i < arrayMenu.length; i++) {
    xHtml += '<li>'+
                '<img src="'+arrayMenu[i].img+'">'+
                '<div class="btn-adding" data-attr="'+arrayMenu[i].id+'">+</div>'+
                '<span class="ten">'+'Môn học :'+' '+arrayMenu[i].ten+'</span>'+
                '<div class="sochi">'+'Số chỉ :'+' '+arrayMenu[i].sochi+'</div>'+
                '<div class="giatien">'+'Giá tiền :'+' '+arrayMenu[i].giatien+ ' VND' + '</div>'
            '</li>';
}

// khai báo số lượng môn chọn trong giỏ hàng
loadGioHang()

// sử dụng câu lênh getElementById() để innerHTML vào file html
document.getElementById('thucdon').innerHTML = xHtml

// khởi tạo sự kiện click chuột vào các nút trong danh sách
btnClass = document.getElementsByClassName('btn-adding');
var j = 0;
var htmlThanhToan = ''
for(j; j < btnClass.length; j++) {
    btnClass[j].addEventListener('click', function(){
        console.log("test")
      var id = this.getAttribute('data-attr');
      console.log(id);
      var doUongDuocChon = arrayMenu.find(x => x.id === Number(id))
    // kiểm tra trùng id
        var kiemTraId = arrayGioHang.find(y => y.id === doUongDuocChon.id)
        if (kiemTraId != doUongDuocChon) {
            // thêm vô giỏ hàng
            arrayGioHang.push(doUongDuocChon)
            loadGioHang()
        } else {
            setTimeout(function() { alert("Trùng môn học đã được đăng ký"); }, time = 1);
        }
    })
}

// nút xóa

var body = document.querySelector('body');
    body.addEventListener('click', event => {
        console.log("click vao body....")
        console.log(event.target)
    if(event.target.matches(".btn-xoa")){
        var viTriCanXoa = event.target.getAttribute('data-attr');
        console.log(viTriCanXoa)
        arrayGioHang.splice(viTriCanXoa, 1);
        loadGioHang()
    }
})

// btnClassXoa = document.getElementsByClassName('btn-xoa');
// var f = 0
// for(f; f < btnClassXoa.length; f++) {
//     btnClassXoa[f].addEventListener('click', function(){
//         var viTriCanXoa = this.getAttribute('data-attr');
//         arrayGioHang.splice(viTriCanXoa, 1);
//         loadGioHang()
//     })
// }

//nút đăng ký 
document.getElementById('btn-dk').addEventListener('click', function(){
    var soTien = 0;
    for(var k = 0; k < arrayGioHang.length; k++) {
        soTien += Number(arrayGioHang[k].giatien)
    }
    // kiểm tra điều kiện xem có thêm môn chưa
   if (soTien === 0) {
       xThongBao = 'chưa có môn học nào được đăng ký'
       document.getElementById('ketqua').innerHTML = xThongBao;
       document.getElementById('ketqua').style.display = "block";
   } else {
    xThongBao = ' Số môn đã học đăng ký : ' + arrayGioHang.length + ' môn' + '<br/>'
    +'tổng tiền sẽ trả :'+' ' + soTien.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' VND';;
    document.getElementById('ketqua').innerHTML = xThongBao;
    // show ra thông báo
    document.getElementById('ketqua').style.display = "block";
   }
})

// nút reset
document.getElementById('btn-reset').addEventListener('click', function(){
    
    // xác nhận điều kiện để reset
    if(confirm('bạn có muốn reset tất cả không ?') === true){
        htmlThanhToan = ''
    document.getElementById('thanhtoan').innerHTML = htmlThanhToan
    // reset thành phần trong ô thanh toán
    arrayGioHang =[];
    // reset số tiền về ko 
    soTien = 0;
    document.getElementById('tongsotien').innerHTML = soTien.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' VND';   
    // 
    soLuong = 0;
    document.getElementById('soluong').innerHTML = soLuong + ' Môn';  
    // xoa thong bao 
    xThongBao =''
    document.getElementById('ketqua').innerHTML = xThongBao;
    document.getElementById('ketqua').style.display = "none";
    } else{

    } 
})

// nút random
document.querySelector('btn-reset').addEventListener('click', function(){
    var ranDom ='';
    ranDom = arrayMenu[Math.floor(Math.random() * arrayMenu.length)];
    arrayGioHang.push(arrayMenu)
            loadGioHang()
})

//function() - 
function loadGioHang() {
    var soLuong = arrayGioHang.length
    document.getElementById('soluong').innerHTML = soLuong + ' Môn';    
    var soTien = 0;
    var k = 0;
    var xHtml = ''
    for(k; k < arrayGioHang.length; k++) {
        soTien += Number(arrayGioHang[k].giatien)
        xHtml += '<li>'+
                '<div class="btn-xoa" data-attr="'+k+'">-</div>'+
                '<img src="'+arrayGioHang[k].img+'">'+
                '<span class="ten">'+arrayGioHang[k].ten+'</span>'+
                '<div class="sochi">'+'Số chỉ :'+' '+arrayMenu[k].sochi+'</div>'+
                '<span class="giatien">'+arrayGioHang[k].giatien+'</span>'+
            '</li>';
    }
    document.getElementById('thanhtoan').innerHTML = xHtml
    //  quy đổi tiền triệu
    document.getElementById('tongsotien').innerHTML = soTien.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' VND';   
}