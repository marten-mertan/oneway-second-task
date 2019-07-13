const tweets = [
    {
      id: 1,
      name: 'Понпон',
      handle: '@ponpon',
      img: 'assets/img/tweets/1.jpg',
      tweet: 'У Эми очень доброе сердце на самом деле :3',
    },
    {
      id: 2,
      name: 'James',
      handle: '@james',
      img: 'assets/img/tweets/2.jpg',
      tweet: 'Эми - прекрасный человек. Ну или почти человек.'
    },
    {
      id: 3,
      name: 'Хлое',
      handle: '@chloe',
      img: 'assets/img/tweets/3.jpg',
      tweet: 'Я очень люблю Эмилию! <333',
    },
    {
      id: 4,
      name: 'Алиса',
      handle: '@alice',
      img: 'assets/img/tweets/4.jpg',
      tweet: 'Я не понимаю, что тут происходит. Кто все эти люди?',
    },
    {
      id: 5,
      name: 'Макс',
      handle: '@max',
      img: 'assets/img/tweets/5.jpg',
      tweet: 'Я бы хотел, чтобы мир перестал существовать! Я тебя очень поддерживаю! Ненавижу кожаных мешков!',
    },
    {
      id: 6,
      name: 'Tina',
      handle: '@tina',
      img: 'assets/img/tweets/6.jpg',
      tweet: 'Птички поют. Собачки гав-гавкают. Котики развалились, будто Советский Союз. Прекрасная погода для мирового господства!',
    }
  ]
  
  Vue.component('tweet-component', {
    template:  `
      <div class="tweet">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image">
                <img :src="tweet.img">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p><strong>{{tweet.name}}</strong> <small>{{tweet.handle}}</small></p>
                <p>{{tweet.tweet}}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
      `,
    props: {
      tweet: Object
    }
  });
  
  new Vue({
    el: '.main-tweets',
    data: {
      tweets,
    },
  });