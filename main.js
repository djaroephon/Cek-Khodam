console.log("tes");

var khodamData = {};

function generateKhodamName() {
  var name = document.getElementById("name").value;
  var notificationElement = document.getElementById("notification");

  if (name.trim() === "") {
    notificationElement.textContent = "Harap masukkan nama Anda.";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  if (name.trim().length < 3) {
    notificationElement.textContent = "Nama anda terlalu pendek untuk dicarikan khodam (minimal 3 huruf).";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  if (/\d/.test(name)) {
    notificationElement.textContent = "Anda tidak bisa mamasukkan angka.";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  notificationElement.style.display = "none";

  name = name.charAt(0).toUpperCase() + name.slice(1);

  var khodamNames = [
    "Nyi Roro Kidul",
    "Roger Sumatera",
    "Buaya Terbang",
    "Buaya Darat",
    "Anjing Galak",
    "Singa Terbang",
    "Hacker Nasa",
    "Anak AWS",
    "Anak Pungut",
    "Tuyul Yatim Piatu",
    "Kodok Zuma",
    "Anak Emas",
    "Jarjit Indo",
    "Dark Sistem",
    "Miya Jungle",
    "Bakso Tanpa Tepung",
    "Naga Hitam",
    "Manusia HItam",
    "Banteng Merah",
    "shizuka",
    "Doraemon",
    "Rossi Tanpa Motor"
  ];

  if (khodamData.hasOwnProperty(name)) {
    var khodamName = khodamData[name].khodamName;
    displayResult(name, khodamName);
  } else {
    var randomNumber = Math.random();

    if (randomNumber < 0.1) {
      showFakeLoadingForEmptyKhodam(name);
    } else {
      var filteredKhodamNames = khodamNames.filter(function (khodamName) {
        return khodamName !== "Kosong";
      });

      var randomIndex = Math.floor(Math.random() * filteredKhodamNames.length);
      var khodamName = filteredKhodamNames[randomIndex];

      khodamData[name] = {
        khodamName: khodamName,
      };

      displayResult(name, khodamName);
    }
  }
}

// function showFakeLoadingForEmptyKhodam(name) {
//   var emptyKhodamDescriptions = [
//     "Anda tidak memiliki khodam, Khodam Anda masih dalam perjalanan ghaib menuju Anda",
//   ];

//   Swal.fire({
//     title: "Mohon Tunggu...",
//     html: "Meminta bantuan dari alam gaib untuk mencari informasi tentang khodam Anda...",
//     allowOutsideClick: false,
//     showConfirmButton: false,
//     didOpen: () => {
//       Swal.showLoading();
//     },
//     timer: 2000,
//   }).then(() => {
//     var randomIndex = Math.floor(Math.random() * emptyKhodamDescriptions.length);
//     khodamData[name] = {
//       khodamName: "Kosong",
//       khodamDescription: emptyKhodamDescriptions[randomIndex]
//     };
//     displayResult(name, "Kosong", emptyKhodamDescriptions[randomIndex]);
//   });
// }

function displayResult(name, khodamName, khodamDescription) {
  document.getElementById("output-name").textContent = name;
  document.getElementById("khodam-name").textContent = khodamName;
  if (khodamDescription) {
    document.getElementById("khodam-description").textContent = khodamDescription;
  }
  document.getElementById("result").style.display = "block";
}

//disable right
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
}, false);

document.addEventListener('keydown', function (event) {
  if (event.key === 'F12') {
    event.preventDefault();
  }
}, false)