// 设置花瓣数量、速度和动画持续时间
const numPetals = 100;
const speed = 5;
const duration = 60;

// 初始化花瓣
const petals = [];
for (let i = 0; i < numPetals; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  document.getElementById('cherry-blossom').appendChild(petal);
  petals.push(petal);
}

// 添加动画
for (let i = 0; i < petals.length; i++) {
  const petal = petals[i];
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 10 + 5;
  const delay = Math.random() * 5 + 1;

  petal.style.left = x + 'px';
  *** = y + 'px';
  petal.style.transition = `top ${duration}s linear ${delay}s, left ${duration}s linear ${delay}s`;

  setTimeout(() => {
    petal.remove();
  }, duration * 1000 + delay * 1000);
}
