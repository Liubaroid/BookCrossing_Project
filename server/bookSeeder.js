const mongoose = require('mongoose');
const Book = require('./models/book.js');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  };

const dbPath = 'mongodb://localhost:27017/bookcrossing';

const connect = () => {
  mongoose.connect(dbPath, options)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err))
  } 

connect()

async function seed() {
  await Book.create(
    {
      id: '0001',
      name: 'Путь королей',
      info: 'Первая из десяти запланированных книг серии эпических фэнтези-романов, написанная американским писателем Брэндоном Сандерсоном. Была опубликована 31 августа 2010 года. ',
      isFound: true,
      creator: 'Lu',
      currentOwner: 'Max',
    },

    {
      id: '0002',
      name: 'Бойцовский клуб',
      info: 'Роман американского автора Чака Паланика, выпущенный в 1996 году в США издательством «W. W. Norton & Company». В центре сюжета находится герой, страдающий бессонницей, которая вызвана неприятием общества потребления. Также причиной его недуга является недовольство тем, как понимается мужественность в американской культуре. Следуя совету своего доктора, он начинает посещать группы поддержки для больных различными заболеваниями, вследствие чего бессонница отступает. Но через некоторое время такой способ перестаёт действовать. В процессе дальнейшей борьбы с этим герой встречает таинственного человека по имени Тайлер Дёрден и создаёт подпольный бойцовский клуб как радикальную форму психотерапии.',
      isFound: false,
      adress: 'Россия, г.Санкт-Петербург, Кирочная 18',
      creator: 'Ann',
    },

    {
      id: '0003',
      name: 'Гордость и предубеждение',
      info: '(англ. Pride and Prejudice) — роман Джейн Остин, который увидел свет в 1813 году.',
      isFound: true,
      creator: 'Max',
      currentOwner: 'Ann',
    },

    {
      id: '0004',
      name: 'Черновик',
      info: 'Роман Сергея Лукьяненко 2005 года.',
      isFound: false,
      adress: 'Россия, Санкт-Петербург, Фурштатская 15',
      creator: 'Lu',
    },

    {
      id: '0005',
      name: 'Цветы для Элджернона',
      info: 'Рассказ Дэниела Киза получивший премию «Небьюла» как лучший роман в 1966 году.',
      isFound: true,
      creator: 'Ann',
      currentOwner: 'Lu'
    },
  )
  mongoose.connection.close()
};

// seed()

