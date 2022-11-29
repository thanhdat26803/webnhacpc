// xét nhạc
const music = new Audio('music/5.mp3')

// Thiết Đặt Name Nhạc Và Ảnh 
const songs = [
  {
    id: '1',
    songName:`Ai Chung Tình Được Mãi
    <br>
    <div class="musiclist_list--namemusic">Nam Milo Remix</div>`,
    poster:"img/1.jpg"
  },
  {
    id: '2',
    songName:`Day By Day
    <br>
    <div class="musiclist_list--namemusic">Nhan VN Remix</div>`,
    poster:"img/2.jpg"
  },
  {
    id: '3',
    songName:`Kẻ Theo Đuổi Ánh Sáng
    <br>
    <div class="musiclist_list--namemusic">Quyền Hải Phòng Remix</div>`,
    poster:"img/3.jpg"
  },
  {
    id: '4',
    songName:`Không Khuất Phục
    <br>
    <div class="musiclist_list--namemusic">ĐG ft CT Remix</div>`,
    poster:"img/4.jpg"
  },
  {
    id: '5',
    songName:`Đời Là Thế Thôi
    <br>
    <div class="musiclist_list--namemusic">Thái Hoàng Remix</div>`,
    poster:"img/5.jpg"
  },
  {
    id: '6',
    songName:`Xa Anh Chậm Thôi
    <br>
    <div class="musiclist_list--namemusic">Tùng Trây Remix</div>`,
    poster:"img/6.jpg"
  },


  {
    id: '7',
    songName:`HPBD To Me 12 - 10 Ong Vàng Vol 2
    <br>
    <div class="musiclist_list--namemusic">Lê Hoàng Anh Vũ Remix</div>`,
    poster:"img/7.jpg"
  },
  {
    id: '8',
    songName:`Thả Ma - Vol 6 - Tômm
    <br>
    <div class="musiclist_list--namemusic">Tômm Remix</div>`,
    poster:"img/8.jpg"
  },
  {
    id: '9',
    songName:`Xi Măng Phố Vol 4
    <br>
    <div class="musiclist_list--namemusic">Trung Hoàng Remix</div>`,
    poster:"img/9.jpg"
  },
  {
    id: '10',
    songName:`NST - Rước Đèn - Chaos Ft LamSung026
    <br>
    <div class="musiclist_list--namemusic">Chaos Ft LamSung Remix</div>`,
    poster:"img/10.jpg"
  },
  {
    id: '11',
    songName:`Sập Nguồn Vol.2 - Tùng Boo ft Hưng Bobbi
    <br>
    <div class="musiclist_list--namemusic">Tùng Boo ft Hưng Bobbi Remix</div>`,
    poster:"img/11.jpg"
  },
  {
    id: '12',
    songName:`Milk Vol 2 - Minh Tri | Exclusive Music Team
    <br>
    <div class="musiclist_list--namemusic">Tùng Trây Remix</div>`,
    poster:"img/12.jpg"
  },
  {
    id: '13',
    songName:`Express Music Vol 3 - Nam Duck Mix
    <br>
    <div class="musiclist_list--namemusic">Nam Duck Remix</div>`,
    poster:"img/13.jpg"
  },
  {
    id: '14',
    songName:`Addiction Super - AKhoa ft TrHieu (HPBD Anh Khoa)
    <br>
    <div class="musiclist_list--namemusic">Anh Khoa ft Trung Hiếu Remix</div>`,
    poster:"img/14.jpg"
  },
  {
    id: '15',
    songName:`Addiction Super - AKhoa ft TrHieu (HPBD Anh Khoa)
    <br>
    <div class="musiclist_list--namemusic">Anh Khoa ft Trung Hiếu Remix</div>`,
    poster:"img/14.jpg"
  },
]

// Xét name và ảnh tự động
Array.from(document.getElementsByClassName('musiclist_list')).forEach((Element, i)=>
{
    Element.getElementsByTagName('img')[0].src = songs[i].poster;
    Element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    
})

// search data staet 
let timkiem = document.getElementsByClassName('timkiem')[0];

songs.forEach(element => {
  const { id, songName, poster} = element;
  let card = document.createElement('a');
  card.classList.add('card');
  card.href = '#' + id;
  card.innerHTML = `
  <img src="${poster}" alt="">
  <div class="noidung">
      ${songName}
  </div>`;
  timkiem.appendChild(card);
});

let inputt = document.getElementsByTagName('input')[0];

inputt.addEventListener('keyup', ()=>{
  let input_value = inputt.value.toLowerCase();
  let items = timkiem.getElementsByTagName('a');

  for (let i = 0; i < items.length; i++) {
    let as = items[i].getElementsByClassName('musiclist_list--namemusic')[0];
    let text_valua = as.textContent || as.innerText;
    
    if (text_valua.toUpperCase().indexOf(input_value) > -1) {
      items[i].style.display = "none";
    } else {
      items[i].style.display = "flex";
      
    }
  }
})

// Nút play
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('songmusic')[0];
// thiết đặt khi click vào
masterPlay.addEventListener('click', ()=>
{
  if (music.paused || music.currentTime <= 0)
  {
    // bấm play sẽ chạy
    music.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    wave.classList.add('active2')
  }
  else 
  {
    // và ngược lại
    music.pause();
    masterPlay.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
    wave.classList.remove('active2')
  }
})



const makeAllPlay = () =>
{
// Nhạc album
Array.from(document.getElementsByClassName('playmusicc')).forEach((Element)=>
{
    Element.classList.add('fa-circle-play');
    Element.classList.remove('fa-circle-pause');
})
}

// xét màu khi bấm vào nghe nhạc
const makeAllanh = () =>
{
Array.from(document.getElementsByClassName('musiclist_list')).forEach((Element)=>
{
    Element.style.background = "rgb(69, 176, 185 , 0)";
})
}

let index =  0;
let tenmusictong = document.getElementById('namemusictong');
let dowload_muisc = document.getElementById('dowload_muisc');
let name_tong = document.getElementById('name_tong');

// Nhạc của album
Array.from(document.getElementsByClassName('playmusicc')).forEach((Element)=>
{
  Element.addEventListener('click', (e)=>
  {
    index = e.target.id;
    makeAllPlay();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    music.src = `music/${index}.mp3`;
    dowload_muisc.href = `music/${index}.mp3`; //dow nhạc
    tenmusictong.src = `img/${index}.jpg`;
    music.play();
    let ten_baihat = songs.filter((ele)=>
    {
      return ele.id == index;
    })

    ten_baihat.forEach(ele =>
      {
        let {songName} = ele;
        name_tong.innerHTML = songName;
        dowload_muisc.setAttribute('download', songName);
      })
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      wave.classList.add('active2')
      // music.addEventListener('ended', ()=>
      // {
      //   masterPlay.classList.add('fa-circle-play');
      //   masterPlay.classList.remove('fa-circle-pause');
      //   wave.classList.remove('active2')
      // })
      makeAllanh();
      Array.from(document.getElementsByClassName('musiclist_list'))[`${index-1}`].style.background = "rgb(69, 176, 185)";
  })
})

// Xét chức năng thanh thời gian
let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot1')[0];

music.addEventListener('timeupdate',()=>
{
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);

  if(sec < 10)
  {
    sec = `0${sec}`;
  }
  currentend.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if(sec1<10)
  {
    sec1 = `0${sec1}`
  }
  currentstart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt ((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot1.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () =>
{
  music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () =>
{
  masterPlay.classList.add('fa-circle-play');
  wave.classList.add('active2')
  index ++;

  music.src = `music/${index}.mp3`;
  dowload_muisc.href = `music/${index}.mp3`;
  tenmusictong.src = `img/${index}.jpg`;
  music.play();  
  let ten_baihat = songs.filter((ele)=>
  {
    return ele.id == index;
  })

  ten_baihat.forEach(ele =>
    {
      let {songName} = ele;
      name_tong.innerHTML = songName;
      dowload_muisc.setAttribute('download', songName)
    })
    makeAllanh();
    Array.from(document.getElementsByClassName('musiclist_list'))[`${index-1}`].style.background = "rgb(69, 176, 185)";
    makeAllPlay();
    document.getElementsByClassName('playmusicc')[`${index-1}`].classList.remove('fa-circle-play');
    document.getElementsByClassName('playmusicc')[`${index-1}`].classList.add('fa-circle-pause');

})

let vol_icon = document.getElementById('vol_icon');
let voll = document.getElementById('voll');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

voll.addEventListener('change', ()=>{
  if (voll.value == 0 ){
    vol_icon.classList.remove('fa-volume-low');
    vol_icon.classList.add('fa-volume-xmark');
    vol_icon.classList.remove('fa-volume-high');
  }
  if (voll.value > 0 ){
    vol_icon.classList.add('fa-volume-low');
    vol_icon.classList.remove('fa-volume-xmark');
    vol_icon.classList.remove('fa-volume-high');
  }
  if (voll.value > 50 ){
    vol_icon.classList.remove('fa-volume-low');
    vol_icon.classList.remove('fa-volume-xmark');
    vol_icon.classList.add('fa-volume-high');
  }

  let vol_muisc = voll.value;
  vol_bar.style.width = `${vol_muisc}%`;
  vol_dot.style.left = `${vol_muisc-1}%`;
  music.volume = vol_muisc/100;

})

// Xét Chức Năng Cho Nút tới lùi
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>
{
  index -= 1;
  if(index < 1){
    index = Array.from(document.getElementsByClassName('musiclist_list')).length;
  }
    music.src = `music/${index}.mp3`;
    dowload_muisc.href = `music/${index}.mp3`;
    tenmusictong.src = `img/${index}.jpg`;
    music.play();
    let ten_baihat = songs.filter((ele)=>
    {
      return ele.id == index;
    })

    ten_baihat.forEach(ele =>
      {
        let {songName} = ele;
        name_tong.innerHTML = songName;
        dowload_muisc.setAttribute('download', songName)
      })
      makeAllPlay();
      document.getElementById(`${index}`).classList.remove('fa-circle-play');
      document.getElementById(`${index}`).classList.add('fa-circle-pause');
      makeAllanh();
      Array.from(document.getElementsByClassName('musiclist_list'))[`${index-1}`].style.background = "rgb(69, 176, 185)";
})
next.addEventListener('click', ()=>
{
  index -= 0;
  index += 1;
  if(index > Array.from(document.getElementsByClassName('musiclist_list')).length){
    index = 1;
  }
    music.src = `music/${index}.mp3`;
    dowload_muisc.href = `music/${index}.mp3`;
    tenmusictong.src = `img/${index}.jpg`;
    music.play();
    let ten_baihat = songs.filter((ele)=>
    {
      return ele.id == index;
    })

    ten_baihat.forEach(ele =>
      {
        let {songName} = ele;
        name_tong.innerHTML = songName;
        dowload_muisc.setAttribute('download', songName)

      })
      makeAllPlay();
      document.getElementById(`${index}`).classList.remove('ffa-circle-play');
      document.getElementById(`${index}`).classList.add('fa-circle-pause');
      makeAllanh();
      Array.from(document.getElementsByClassName('musiclist_list'))[`${index-1}`].style.background = "rgb(69, 176, 185)";
})

let traialbum = document.getElementById('traialbum');
let phaialbum = document.getElementById('phaialbum');
let list_song = document.getElementsByClassName('list_song')[0];

traialbum.addEventListener('click', ()=>{
  list_song.scrollLeft -=230;
})
phaialbum.addEventListener('click', ()=>{
  list_song.scrollLeft +=230;
})

let traialbum1 = document.getElementById('traialbum1');
let phaialbum1 = document.getElementById('phaialbum1');
let item = document.getElementsByClassName('item')[0];

traialbum1.addEventListener('click', ()=>{
  item.scrollLeft -=170;
})
phaialbum1.addEventListener('click', ()=>{
  item.scrollLeft +=170;
})

let nutmusic = document.getElementsByClassName('nutmusic')[0];
nutmusic.addEventListener('click', ()=>{
  let a = nutmusic.innerHTML;
  switch (a) {
    case "next":
      nutmusic.classList.add('fa-repeat');
      nutmusic.classList.remove('fa-sliders');
      nutmusic.classList.remove('fa-shuffle');
      nutmusic.innerHTML = 'repeat';
      break;
    case "repeat":
      nutmusic.classList.remove('fa-repeat');
      nutmusic.classList.remove('fa-sliders');
      nutmusic.classList.add('fa-shuffle');
      nutmusic.innerHTML = 'random';
      break;
    case "random":
      nutmusic.classList.remove('fa-repeat');
      nutmusic.classList.add('fa-sliders');
      nutmusic.classList.remove('fa-shuffle');
      nutmusic.innerHTML = 'next';
      break;
  }
})
// music.addEventListener('ended', ()=>{
//   let dieukhien1 = nutmusic.innerHTML;
//   switch (nutkhiena) {
//     case Repeat:
//       nutmusic();
//       break;
//   }
// })
