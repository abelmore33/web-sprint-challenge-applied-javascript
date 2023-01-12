import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardWrapper = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const author = document.createElement("div");
  const imageContainer = document.createElement('div');
  const authorImage = document.createElement('img');
  const authorName = document.createElement('span');


  cardWrapper.appendChild(cardHeadline);
  cardWrapper.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(authorImage);
  author.appendChild(authorName);

  cardWrapper.classList.add('card');
  cardHeadline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');

  cardHeadline.textContent = article.headline;
  authorImage.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  cardWrapper.addEventListener('click',() =>{
    console.log(cardHeadline);
  }
  
  )
  




  
  return cardWrapper;
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const sele = document.querySelector(selector)
  console.log(sele)
  axios.get("http://localhost:5001/api/articles")
  .then(res =>{
    const articleObj = res.data.articles.bootstrap

    console.log(articleObj[0])
    return sele.appendChild(Card(articleObj[0]))
  })
}

export { Card, cardAppender }
