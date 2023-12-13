
const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
label.innerHTML = label.innerText
.split('')
.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
.join('')
})

// const playerName = document.getElementById('name');
// const playerNickName = document.getElementById('nickname');

// const player = {
//   name: '',
//   nickName: ''
// };

// if (playerName && playerNickName) {
//   playerName.addEventListener('input', (e) => {
//     player.name = e.target.value;
//     localStorage.setItem('playerName', player.name);
//   });

//   playerNickName.addEventListener('input', (e) => {
//     player.nickName = e.target.value;
//     localStorage.setItem('playerNickname', player.nickName);
//   });

//   const play = document.getElementById('Play');
//   play.addEventListener('click', (e) => {
//     if (player.name.trim() === '' || player.nickName.trim() === '') {
//       e.preventDefault();
//       alert('Please provide input for both Name and Nickname.');
//       return;
//     }
//   });
// }

