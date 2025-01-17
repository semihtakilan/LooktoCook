window.onload = function() {
  function getCookie(name) {
      let nameEQ = name + "=";
      let ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i].trim();
          if (c.indexOf(nameEQ) === 0) {
              return c.substring(nameEQ.length, c.length);
          }
      }
      return null;
  }


  var kullaniciAdi = getCookie("kullaniciAdi");
  const mainDiv = document.getElementById("user");
  if (kullaniciAdi) {
      mainDiv.setAttribute("class", "user");
      mainDiv.innerHTML = `
        <p class="username"><b>${kullaniciAdi.toUpperCase()}</b></p>
        <button class="logout-btn" onclick="deleteCookie('kullaniciAdi')">Çıkış Yap</button>
      `;
  }
  else{
    mainDiv.setAttribute("class", "user0");

    document.getElementById("user").innerHTML = `
        <a href="tabs/login/login.php">
          <img src="images/login.png" alt="Giriş yap görseli" height= 50px>
        </a>
      `;
  }
  }

  function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    alert("Başarıyla çıkış yapıldı");
    window.location.href = "index.html";
  }
