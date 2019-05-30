class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
  }

  matches(arg) {
    let str = '';

    for (let key in this) {
      str += this[key];
    };
    
    return str.indexOf(arg) !== -1 ? true : false;
  }
}


class ArticleList {
  constructor(container) {
    this.container = container;
    this.Articles = [];
  }
  
  addArticle(atricle) {
    this.Articles.push(atricle);
  }

  removeArticle(article) {
   let index = this.Articles.indexOf(article);
   this.Articles.splice(index, 1);
  }
  
  render() {
    this.container.innerHTML = '';
    
    for (let i = 0; i < this.Articles.length; i++) {
      let article = document.createElement('article');
      let title = document.createElement('h1');
      let autor = document.createElement('h2');
      let text = document.createElement('p');

      title.innerHTML = this.Articles[i].title;
      autor.innerHTML = this.Articles[i].autor;
      text.innerHTML = this.Articles[i].text;
      article.append(title, autor, text);
      
      this.container.append(article);
    }
  }
}

let article1 = new Article('Title', 'gabe', 'lorem lorem lorem');
let container = new ArticleList(document.createElement('div'));
container.addArticle(article1);
container.render();

console.log(container)