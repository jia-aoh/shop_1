 // 驗證樣式
 const validOrNot = (element, isValid) => {
  if (isValid) {
    element.style.borderColor = 'green'
    element.style.boxShadow = 'inset 0 1px 1px rgb(144, 238, 144), 0 0 8px rgb(144, 238, 144)'
    element.nextElementSibling.innerHTML = '✓'
  } else {
    element.style.borderColor = 'red'
    element.style.boxShadow = 'inset 0 1px 1px rgb(255, 192, 203), 0 0 8px rgb(255, 192, 203)'
    element.nextElementSibling.innerHTML = '✗'
  }
}
// 登入驗證-------------------------------------

// 帳號
const loginid = () => {
  const isValid = login_id.validity.valid && !login_id.value.includes(' ')
  validOrNot(login_id, isValid)
}
// 密碼
const loginpwd = () => {
  const badword = [' ', '>', '<']
  const isValid = login_pwd.value.length >= 8 && !badword.some(x => login_pwd.value.includes(x)) && login_pwd.value.length <= 16
  validOrNot(login_pwd, isValid)

}

// 註冊驗證-------------------------------------


// 帳號驗證
const rgstid = () => {
  const isValid = rgst_id.validity.valid && !rgst_id.value.includes(' ')
  validOrNot(rgst_id, isValid)
}

// 密碼驗證
const pwd = () => {
  const badword = [' ', '>', '<']
  const isValid = rgst_pwd.value.length >= 8 && rgst_pwd.value.length <= 16 && !badword.some(x => rgst_pwd.value.includes(x))
  validOrNot(rgst_pwd, isValid)
}

// 確認密碼驗證
const pwd_check = () => {
  const isValid = rgst_pwd.value === pwd_chek.value
  validOrNot(pwd_chek, isValid)
}

// 性別驗證
const gender = () => {
  const isValid = sex.validity.valid
  validOrNot(sex, isValid)
}

// 身分證號驗證
const nationid = () => {
  const letter = ['B', 'A', 'K', 'J', 'H', 'G', 'F', 'E', 'D', 'C', 'N', 'M', 'L', 'V', 'U', 'T', 'S', 'R', 'O', 'I', 'Z', 'W', 'Y', 'X', 0, 0, 0, 0, 'Q', 'P']
  let sum = 0
  let correctid = false

  if (nation_id.value.length === 10) {
    const firstLetter = nation_id.value.charAt(0)
    const index = letter.indexOf(firstLetter)

    if (index !== -1) {
      sum = index;

      for (let j = 1; j < 9; j++) {
        sum += nation_id.value.charAt(j) * (9 - j)
      }

      correctid = (10 - sum % 10) % 10 === parseInt(nation_id.value.charAt(9))
    }
  }

  const isValid = nation_id.validity.valid && correctid && nation_id.value.charAt(1) === sex.value
  validOrNot(nation_id, isValid)
}


//---------------------------------------------

// 導覽列
const nav = () => {
  myNav.innerHTML = `
<nav>
  <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top p-0">
    <div class="container-fluid p-0">
      <a class="navbar-brand p-2 ms-3" onclick="mainPage()"><span class="text-warning">靈</span>境</a>
      <button class="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav p-2 ms-auto mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" onclick="about()">關於靈境</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="pdPage(allPd)">產品介紹</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#ex1">登入｜註冊</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</nav>
<!-- 登入頁 -->
<div class="modal fade" id="ex1" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header justify-content-center">
        <div class="btn-group w-75">
          <button class="btn btn-outline-dark">登入</button>
          <button class="btn btn-outline-dark" data-bs-target="#ex2" data-bs-toggle="modal">註冊</button>
        </div>
      </div>
      <div class="modal-body">
        <p class="text-muted text-center">登入即可報名工作坊、購買產品</p>
        <div class="input-group mb-3">
          <span class="input-group-text">帳號</span>
          <input id="login_id" type="text" class="form-control" placeholder="請輸入帳號..." oninput="loginid()"
            pattern="[A-Za-z0-9.\-_']+@gmail\.com">
          <span class="input-group-text">✗</span>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">密碼</span>
          <input id="login_pwd" type="password" class="form-control" placeholder="請輸入密碼..." oninput="loginpwd()">
          <span class="input-group-text">✗</span>
        </div>
        <div class="">
          <span class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="keeplogin" checked>
            <label class="form-check-label" for="keeplogin">
              保持登入
            </label>
          </span>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-dark" type="submit">登入</button>
      </div>
    </div>
  </div>
</div>
<!-- 註冊頁 -->
<div class="modal fade" id="ex2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="btn-group w-100">
          <button class="btn btn-outline-dark" data-bs-target="#ex1" data-bs-toggle="modal">登入</button>
          <button class="btn btn-outline-dark">註冊</button>
        </div>
      </div>
      <div class="modal-body">
        <p class="text-muted text-center">以下欄位皆必填</p>
        <div class="input-group mb-3">
          <span class="input-group-text px-4">帳號</span>
          <input id="rgst_id" type="text" class="form-control" oninput="rgstid()" placeholder="限@gmail.com信箱，恕不接受空白字元"
            pattern="[A-Za-z0-9.\-_']+@gmail\.com">
          <span class="input-group-text">✗</span>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text px-4">密碼</span>
          <input id="rgst_pwd" type="password" class="form-control" placeholder="請設定8-16位密碼，禁用<>空白鍵" oninput="pwd()">
          <span class="input-group-text">✗</span>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text px-2">確認密碼</span>
          <input id="pwd_chek" type="password" oninput="pwd_check()" class="form-control" placeholder="請確認密碼...">
          <span class="input-group-text">✗</span>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text px-4">性別</span>
          <select id="sex" class="form-select" required onclick="gender()">
            <option selected>請選擇性別...</option>
            <option value="2">女</option>
            <option value="1">男</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text px-2">身分證號</span>
          <input id="nation_id" type="text" class="form-control" oninput="nationid()" placeholder="開頭請大寫..."
            pattern="[A-Z]{1}[0-9]{9}">
          <span class="input-group-text">✗</span>
        </div>
        <div class="">
          <span class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="keeplogin" checked>
            <label class="form-check-label" for="keeplogin">
              有新工作坊通知我
            </label>
          </span>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-dark" type="submit">註冊</button>
      </div>
    </div>
  </div>
</div>
`
}
// 首頁
const mainPage = () => {
  const workshops = [
    {
      title: "靈性探索-台東站",
      date: "10/10(三) 10:00~20:00",
      location: "悠遊山莊"
    },
    {
      title: "靈性探索-南投站",
      date: "10/11(五) 10:00~20:00",
      location: "鄒山莊原"
    },
    {
      title: "靈境分享-綠島站",
      date: "10/12(一) 10:00~20:00",
      location: "綠綠遊原"
    }
  ]
  const workshopItem = ({ title, date, location }) => `
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mt-1">${title}</h5>
    <span class="btn btn-sm bg-warning mt-1">
      <a class="text-muted" style="text-decoration: none;" data-bs-toggle="modal" data-bs-target="#ex1">點我報名</a>
    </span>
  </div>
  <div class="d-flex w-100 justify-content-between mt-1">
    <small class="">${date}</small>
    <small class="">|</small>
    <small class="">${location}</small>
  </div>
  <hr>
`

  const workshopItems = workshops.map(workshopItem).join('')

  midContent.innerHTML = `
<!-- 輪播圖 -->
<section>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <div id="car" class="carousel slide carousel-fade mt-5" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="https://raw.githubusercontent.com/jia-aoh/shop_1/refs/heads/main/img/banner_1.jpg" class="mask d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
              <h5 class="d-md-block">開啟您的靈性探索之旅</h5>
              <p class="d-md-block mb-3">Explore Your Spiritual Journey.</p>
              <a class="btn btn-light d-sm-block btn-sm mb-0" href="#workshop">Learn more</a>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="https://raw.githubusercontent.com/jia-aoh/shop_1/refs/heads/main/img/banner_2.jpg" class="mask d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
              <h5 class="d-md-block">探索您適合的靈性產品</h5>
              <p class="d-md-block mb-3">Explore Our Spiritual Goods.</p>
              <a class="btn btn-light d-sm-block btn-sm mb-0" onclick="pdPage(allPd)">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 過渡文案 -->
<section id="introduction">
  <div class="container">
    <div class="row justify-content-center m-4">
      <div class="text-muted col-12 col-md-10 text-center p-4">
        「 我們相信每個人都有潛在的靈性力量，<br>
        無論您是靈性探索的初心者還是資深追隨者，<br>
        我們都能引領您增強內在能量，<br>
        實現心靈的和諧，走向更深層次的靈性之旅。」
      </div>
    </div>
  </div>
</section>

<!-- 三大優勢 -->
<section id="advantages">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 col-md-4">
        <div class="card border mb-3 text-center">
          <i class="card-header h1 bi bi-clipboard2-check"></i>
          <div class="card-body">
            <h5 class="card-title">品質管控</h5>
            <p class="card-text p-3 text-muted">精心研發每一款產品，確保材料純淨，幫助客戶獲得最佳使用體驗。</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-4">
        <div class="card border mb-3 text-center">
          <i class="card-header h1 bi bi-file-person"></i>
          <div class="card-body">
            <h5 class="card-title">專業服務</h5>
            <p class="card-text p-3 text-muted">我們擁有專業，且耐心的靈性顧問團隊，隨時為客戶提供建議與指導。</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-4 mb-5">
        <div class="card border mb-3 text-center">
          <i class="card-header h1 bi bi-people"></i>
          <div class="card-body">
            <h5 class="card-title">社群交流</h5>
            <p class="card-text p-3 text-muted">定期舉辦工作坊，促進顧客之間的交流與學習，建立支持性社區。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 工作坊 -->
<section class="row justify-content-center mb-5 text-center" id="workshop">
  <h3 class="mb-4">工作坊</h3>
  <ol class="col-8 col-md-6 list-group">
    <li class="list-group-item list-group-item-action">
      ${workshopItems}
    </li>
  </ol>
</section>
`
}
// 關於我們頁
const about = () => {
  const locations = [
    {
      title: "北部服務點",
      tel: "02-12345678",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.130095769288!2d121.5362867!3d25.0296587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9803a65369f%3A0x61fb21e8f586e51f!2z5aSn5a6J5qOu5p6X5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1727664931982!5m2!1szh-TW!2stw"
    },
    {
      title: "中部服務點",
      tel: "02-23456789",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.619423669124!2d120.66092507579681!3d24.149999978399762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9ea2836a61%3A0xdb3ddeb2e897f13b!2z6Ie65Lit5biC5rCR5buj5aC0!5e0!3m2!1szh-TW!2stw!4v1727666146751!5m2!1szh-TW!2stw"
    },
    {
      title: "南部服務點",
      tel: "02-34567890",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29453.375593262557!2d120.26903544199376!3d22.666016644634503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05073fa25d1b%3A0x7f91ef4978c0f3f2!2z55Ge6LGQ5aSc5biC!5e0!3m2!1szh-TW!2stw!4v1727666231634!5m2!1szh-TW!2stw"
    },
    {
      title: "東部服務點",
      tel: "02-45678901",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14680.183406935092!2d121.1976274554199!3d23.0954173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f0b8899bc0beb%3A0xffeaf7c71bb3f5a7!2z5bCP5qOu5buj5aC0772c5rGg5LiK6JCs5a6J56S-5Y2A!5e0!3m2!1szh-TW!2stw!4v1727666282804!5m2!1szh-TW!2stw"
    },
    {
      title: "綠島中心",
      tel: "02-56789012",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14726.716061331026!2d121.46543727368314!3d22.665753320291643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f8d06aaaaaaab%3A0xd1862dbce3d42c71!2z57ag5bO254eI5aGU!5e0!3m2!1szh-TW!2stw!4v1727666353079!5m2!1szh-TW!2stw"
    }
  ]

  const createLocationCard = ({ title, tel, map }) => `
  <div class="col">
    <div class="card">
      <div class="card-header">${title}</div>
      <div class="card-body">
        <iframe class="img-fluid"
          src="${map}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="card-footer">
          <p class="card-text">電話：${tel}</p>
        </div>
      </div>
    </div>
  </div>
`

  const locationCards = locations.map(createLocationCard).join('');

  midContent.innerHTML = `
  <div class="container mt-5 text-center">
    <div class="text-center pt-5">
      <h1 class="">關於靈境</h1>
    </div>
    <div class="row justify-content-center">
      <div class="mt-5 col-10 col-md-8">
        <h4 class="p-2">旅程</h4>
        <ul class="nav nav-fill nav-pills flex-column flex-md-row border" style="border-radius: 5px 5px 0 0;">
          <li class="nav-item"><a data-bs-toggle="pill" class="nav-link" href="#journey1">2022</a></li>
          <li class="nav-item"><a data-bs-toggle="pill" class="nav-link" href="#journey2">2023</a></li>
          <li class="nav-item"><a data-bs-toggle="pill" class="nav-link" href="#journey3">2024</a></li>
        </ul>
        <div class="tab-content text-center pt-3 border"
          style="border-top:0px !important;border-radius: 0 0 10px 10px;">
          <div class="tab-pane p-2" id="journey1">
            <p class="p-3">發跡於綠島某村落，幫助人們探索內心的力量與平靜。</p>
          </div>
          <div class="tab-pane p-2" id="journey2">
            <p class="p-3">靈境正式成立，並研發首批<a class="text-muted" onclick="pdPage(allPd)" style="text-decoration: underline; cursor: pointer;">靈性探索產品</a>，實現居家探索的可能性。</p>
          </div>
          <div class="tab-pane p-2" id="journey3">
            <p class="p-3">於各地開設自主性<a class="text-muted" href="#place" style="text-decoration: underline; cursor: pointer;">服務據點</a>，舉辦靈性工作坊，促進社區交流與學習。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="mt-1 col-10 col-md-8">
        <h4 class="mt-5 p-2">使命</h4>
        <p class="border p-3" style="border-top:0px ;border-radius: 0 0 10px 10px;">
          我們的使命是啟發每個人發現自我潛能，透過優質靈性產品與指導，實現心靈的平衡與和諧。我們希望創造一個支持性社區，讓靈性探索成為每個人生活的一部分。</p>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="mt-1 col-10 col-md-8">
        <h4 class="mt-5 p-2">價值觀</h4>
        <div class="accordion mb-5" id="atotal">
          <div class="accordion-item text-center">
            <div class="accordion-button py-2 text-center" data-bs-toggle="collapse" data-bs-target="#a1">誠信</div>
            <div id="a1" class="accordion-collapse collapse show" data-bs-parent="#atotal">
              <div class="accordion-body">我們提供真實透明的產品信息，確保每位顧客都能做出最合適的選擇。</div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-button py-2 collapsed" data-bs-toggle="collapse" data-bs-target="#a2">尊重</div>
            <div id="a2" class="accordion-collapse collapse" data-bs-parent="#atotal">
              <div class="accordion-body">尊重每位顧客的旅程，無論背景與經驗，並提供個性化的支持與建議。</div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-button py-2 collapsed" data-bs-toggle="collapse" data-bs-target="#a3">連結</div>
            <div id="a3" class="accordion-collapse collapse" data-bs-parent="#atotal">
              <div class="accordion-body">促進社區的互動與交流，讓靈性探索成為共同的旅程，互相支持與成長。</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <h4 class="mt-4 p-2" id="place">服務據點</h4>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
        ${locationCards}
      </div>
    </div>
  </div>
`
}
// 商品頁
let cart = []
const pdPage = (jsonObj) => {
  let content = `
  <div class="row justify-content-center">
    <div class="mt-5 col-9 col-md-10 col-lg-11">
      <div class="mt-5 h2 mb-5 text-center">靈境產品</div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <button onclick="checkoutPage()" class="btn btn-warning text-start p-1 border" style="width:70px;height:70px;position:fixed; right:-30px; top: 100px">🛒
      <span id="remind" style="opacity:0;" class="position-absolute top-0 start-0 translate-middle p-2 bg-danger border border-light border-2 rounded-circle"></span></button>
      `
  jsonObj.forEach((pd) => {
    content += `
    <div class="col mb-3">
          <div class="card">
            <div class="card-header text-center fw-bold p-3">
              《${pd.pid} - ${pd.name}》
            </div>
            <img style="border-radius:0 ;" src="${pd.img}" class="card-img-top" alt="...">
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center" style="position: relative;;">${pd.effect}<span
                  style="position: absolute;right: 5px;bottom: 2px;" class="btn" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" data-bs-title="${pd.description}">
                  ⎔
                </span></li>
            </ul>
            <div class="card-body">
              <div class="card-title">
              </div>
              <p class="card-text mb-0">
              <div class="d-flex w-100 justify-content-between align-items-center mb-0">
                <div class="">價格：<s class="fs-6">${Math.floor(pd.price / 0.9)}</s><b class="fs-3">&nbsp;${pd.price}</b></div>
                <a onclick="
                addToCart('${pd.pid}','${pd.name}','${pd.price}');
                remind.style.opacity=1" class="btn btn-outline-secondary btn-sm text-center">Add to 🛒</a>
              </div>
              </p>
            </div>
          </div>
        </div>
        `
  })
  content += `       
    </div>
    </div>
  </div>
  `
  midContent.innerHTML = content
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}
// 加入購物車功能
const addToCart = (id, name, price, inc = 1) => {
  const pdToAdd = cart.find(pd => pd.id === id)

  if (pdToAdd) {
    pdToAdd.quantity += inc
    if (pdToAdd.quantity <= 0) {
      cart = cart.filter(pd => pd.id !== id)
    }
  } else {
    cart.unshift({
      id,
      name,
      price,
      quantity: 1
    })
  }
}

// 購物車頁
const checkoutPage = () => {
  let content = `<div class="mt-5 row justify-content-center vh-100">
  <div class="mt-5 row col-11 col-md-8">
    <div class="h3 text-center mb-3">購物車</div>
    <ol class="list-group list-group-numbered">
      <button onclick="pdPage(allPd)" class="btn btn-warning text-start p-1" style="width:70px;height:70px;position:fixed; right:-30px; top: 100px">↩︎</button>
      `
  cart.forEach((cart) => {
    content += `
    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
        <div class="ms-2 me-auto">
          <div class="fw-bold">《${cart.id}-${cart.name}》</div>
          <div>--單價: ${cart.price}--</div>
        </div>
        <div class="ms-auto">
          <div class="btn-group">
            <button onclick="
            let quantity = parseInt(this.nextElementSibling.firstElementChild.innerText);
            this.nextElementSibling.firstElementChild.innerText = quantity + 1;
            addToCart('${cart.id}','${cart.name}','${cart.price}',1);
            " class="btn btn-sm btn-outline-dark">＋</button>
            <div class="btn btn-outline-dark"><small>${cart.quantity}</small></div>
            <button onclick="
            addToCart('${cart.id}','${cart.name}','${cart.price}',-1);
            let quantity = parseInt(this.previousElementSibling.firstElementChild.innerText);
            if(quantity ==1){
              this.parentElement.parentElement.parentElement.remove()
              pdPage(allPd)
            }else{
              this.previousElementSibling.firstElementChild.innerText = quantity - 1;
          }
            " class="btn btn-sm btn-outline-dark">－</button>
          </div>
        </div>
      </li>
    `
  })
  content += `
    </ol>
    <div class="mt-3 text-center">
    <button class="btn btn-warning w-25">checkout</button>
    </div>
    </div>
</div>
  `
  midContent.innerHTML = content
}

//---------------------------------------------

// 頁尾
const footer = () => {
  const footerContent = `
  <footer class="bg-dark text-center text-white p-2">
    <div class="container">
      <div class="social-links">
        <a href="https://www.instagram.com" target="_blank" class="bi bi-instagram text-white"></a>
        <a href="mailto:a@gmail.com" class="bi bi-envelope text-white"></a>
        <a href="https://line.me/tw/" target="_blank" class="bi bi-line text-white"></a>
      </div>
      <small>地址：台北市信義區光復南路123號</small><br>
      <small>電話：+886-2-1234-5678</small><br>
      <small>© 2024 靈境。保留所有權利。未經許可，不得轉載或使用本網站內容。</small>
    </div>
  </footer>
`
  myFooter.innerHTML = footerContent
}


//---------------------------------------------
// 彈出式廣告
const ad = () => {
  const adContent = `
<div id="tyModal">
  <div class="tyModalContent bg-transparent" style="border: 0;">
    <div class="card d-flex justify-content-center">
      <img src="https://raw.githubusercontent.com/jia-aoh/shop_1/refs/heads/main/img/banner_3.jpg" class="card-img img-fluid border" alt="...">
      <div class="card-img-overlay text-center">
        <h5 class="card-title text-light p-3">10/10 靈探工作坊(台東站)</h5>
        <div class="mt-auto text-center">
          <a class="btn btn-light ty fs-6 w-25 me-2 p-2">關閉</a>
          <a class="btn btn-light fs-6 ms-2 w-25 p-2" data-bs-toggle="modal" data-bs-target="#ex1">報名</a>
        </div>
      </div>
    </div>
  </div>
</div>
`
  midContent.innerHTML += adContent
  //彈出式廣告效果
  document.getElementsByClassName("ty")[0].onclick = () => {
    tyModal.style.display = "none";
  }
  setTimeout(() => {
    tyModal.style.display = "block";
  }, 2000);
}
// 初始化
window.onload = () => {
  const url = 'https://raw.githubusercontent.com/jia-aoh/shop_1/refs/heads/main/product.json'
  fetch(url)
    .then(response => response.json())
    .then((jsonObj) => {
      allPd = jsonObj
    })
    .catch(reason => console.log(reason))
  nav()
  mainPage()
  footer()
  ad()
}
//tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))