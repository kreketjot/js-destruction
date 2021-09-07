import getAttacks from './getAttacks';
// eslint-disable-next-line no-unused-vars
import style from './style.css';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 3,
      name: 'Ментальное превосходство',
      icon: 'https://www.meme-arsenal.com/memes/e23197d29dbf29e1b1cecca6c5cf2935.jpg',
      description: 'Пусть осознает свою никчёмность...',
    },
    {
      id: 51,
      name: 'Токсичный всплеск',
      icon: 'https://st.depositphotos.com/1742172/2155/v/600/depositphotos_21550711-stock-illustration-cartoon-acid-rain-drop.jpg',
      description: 'Прожги ему ботинок!',
    },
    {
      id: 6,
      name: 'Невнятный плюнь',
      icon: 'https://avatars.mds.yandex.net/get-zen_doc/1662927/pub_5dda97cf0c408a20fc3f3e49_5dda97f6710eb34d51c33f82/scale_1200',
      description: 'Выплюнь дырявые хлопья!!',
    },
    {
      id: 89,
      name: 'Беседа с противником',
      icon: 'https://memepedia.ru/wp-content/uploads/2019/12/vrach-i-durka-mem-6-360x270.jpg',
    },
    {
      id: 19,
      name: 'Подожди',
      icon: 'https://icdn.lenta.ru/images/2017/02/02/15/20170202155432542/pic_c68a6b76fc08e7a072094aa7342242b2.jpg',
      description: 'Дождись его естественной смерти',
    },
    {
      id: 37,
      name: 'Протыкающий резь',
      icon: 'https://klike.net/uploads/posts/2019-10/1571479904_3.jpg',
    },
  ],
};

const attacks = getAttacks(character);
attacks.forEach((attack) => {
  const { name, icon, description } = attack;
  const div = document.createElement('div');
  div.classList.add('container');
  div.innerHTML = `
    <div>
      <p>
        <b>${name}</b>
      </p>
      <p>${description}
    </div>
    <div>
      <img src="${icon}" class="image">
    </div>
  `;
  document.body.append(div);
});
