// Bài 1: 
function checkTheResult() {
    // Input
    var diemChuan = +document.getElementById("benchMark").value;
    var diemMon1 = +document.getElementById("subjectScore1").value;
    var diemMon2 = +document.getElementById("subjectScore2").value;
    var diemMon3 = +document.getElementById("subjectScore3").value;
    var khuVuc = document.getElementById("Area").value.toLowerCase();
    var doiTuong = +document.getElementById("Object").value;

    // Output
    var diemTongKet = 0;

    // Process
    if (khuVuc === "x") {
        khuVuc = +'0'; // Gán giá trị 0 nếu khuVuc nhập là "X"
    } else {
        khuVuc = +document.getElementById("Area").value
    }   

    diemTongKet = diemMon1 + diemMon2 + diemMon3 + doiTuong + khuVuc;
    var ketQuaElement = document.getElementById("result1");

    if (diemTongKet >= diemChuan && diemMon1 !== 0 && diemMon2 !== 0 && diemMon3 !== 0) {
        ketQuaElement.innerHTML = "Chúc mừng, bạn đã đậu! Tổng số điểm đạt được: " + diemTongKet;
    } else {
        ketQuaElement.innerHTML = "Rất tiếc, bạn đã rớt. Tổng số điểm đạt được: " + diemTongKet;
    }
}

// Bài 2:
function calculateElectricityBill() {
    // Input
    var name = document.getElementById("name").value;
    var kwh = +document.getElementById("kwh").value;
    
    // Output
    var bill = 0;

    // Process
    if (kwh <= 50) {
        bill = kwh * 500;
    } else if (kwh <= 100) {
        bill = 50 * 500 + (kwh - 50) * 650;
    } else if (kwh <= 150) {
        bill = 50 * 500 + 50 * 650 + (kwh - 100) * 850;
    } else {
        bill = 50 * 500 + 50 * 650 + 50 * 850 + (kwh - 150) * 1100;
    }
    // Hiển thị kết quả
    var resultElement = document.getElementById("result2");
    resultElement.innerHTML = "<br>Tên khách hàng: " + name + "<br>Tổng tiền điện: " + bill + " đồng";
}

// Bài 3
function calculateTax() {
    // Input
    var fullName = document.getElementById("fullName").value;
    var annualIncome = +document.getElementById("annualIncome").value;
    var dependents = +document.getElementById("dependents").value;
    // Output
    var taxRate = 0;
    var taxAmount = 0;
    // Process
    var taxableIncome = annualIncome - 4 - dependents * 1.6;
    if (taxableIncome <= 60) {
        taxRate = 0.05;
    } else if (taxableIncome <= 120) {
        taxRate = 0.1;
    } else if (taxableIncome <= 210) {
        taxRate = 0.15;
    } else if (taxableIncome <= 384) {
        taxRate = 0.2;
    } else if (taxableIncome <= 624) {
        taxRate = 0.25;
    } else if (taxableIncome <= 960) {
        taxRate = 0.3;
    } else {
        taxRate = 0.35;
    }

    taxAmount = taxableIncome * taxRate;

    var resultMessage = fullName + ", thuế thu nhập cá nhân của bạn là " + taxAmount + " triệu đồng.";
    document.getElementById("result3").innerHTML = resultMessage;
}


//Bài 4
function toggleConnectionInput() {
    // Input
    var customerType = document.getElementById("customerType").value;
    var connectionInput = document.getElementById("connectionCount");
    // Process
    if (customerType === "nhaDan") {
        connectionInput.value = 1;
        connectionInput.disabled = true;
    } else {
        connectionInput.disabled = false;
    }
}

function calculateBill() {
    // Input
    var customerType = document.getElementById("customerType").value;
    var connectionCount = +document.getElementById("connectionCount").value;
    var premiumChannels = +document.getElementById("premiumChannels").value;

    // Output
    var processingFee = 0;
    var basicFee = 0; 
    var premiumFee = 0;

    // Process
    if (customerType === "nhaDan") {
        processingFee = 4.5;
        basicFee = 20.5;
        premiumFee = 7.5 * premiumChannels;
    } else {
        processingFee = 15;
        var basicFee = 75;
        if (connectionCount > 10) {
            basicFee += (connectionCount - 10) * 5;
        }
        premiumFee = 50 * premiumChannels;
    }

    totalAmount = processingFee + basicFee + premiumFee;
    document.getElementById("billAmount").innerHTML =totalAmount + " $";
}

toggleConnectionInput();
