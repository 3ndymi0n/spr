const library = [
  {
    title: "The Hyperion Omnibus",
    author: "Dan Simmons",
    genre: "Space Opera",
    cover: "https://www.booktopia.com.au/covers/900/9780575076266/8433/the-hyperion-omnibus.jpg",
    readState: "Finished",
    summary: "The Hyperion books are credited with single-handedly reinventing and reinvigorating SF in the 1990s. A broad canvased, hugely imaginative and exciting SF epic, the books draw on the works of Keats and provide a uniquely intelligent and literary approach with cutting edge science, compelling characterisation and edge-of-your-seat excitement. The story is continued in ENDYMION and THE RISE OF ENDYMION, which Gollancz will also be publishing in an omnibus volume.",
    id: 1
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    genre: "Fanasy",
    cover: "https://www.booktopia.com.au/covers/900/9781526691262/7908/harry-potter-and-the-goblet-of-fire-interactive-illustrated-edition-.jpg",
    readState: "Finished",
    summary: "Closet boy goes on a wacky adventure to kill a man with no nose.",
    id: 2
  }

];

function Book(title, author, genre, cover, readState, summary) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.cover = cover;
  this.readState = readState;
  this.summary = summary;
  this.id = crypto.randomUUID();
}


function addBookToLibrary(title, author, genre, cover, readState, summary) {
  const book = new Book(title, author, genre, cover, readState, summary)
  library.push(book);
}

function checkLibraryForBook() {
  //TODO - Check book title and pop a modal to confirm creating a new title.
}

function createBookCard(title) {
  const cover = title.cover || "Resources/gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg"
  const card = document.createElement('div');
  card.classList.add('card');
  card.id = title.id;

  const cardTemplate = `
      <div class="cover">
        <img class="title" src=${cover}>
      </div>
      <div class="details">
          <h4 class="title">${title.title}</h2>
          <p>${title.author}</p>
      </div>
  `;

  card.innerHTML = cardTemplate;
  return card;
}

function hasChildWithId(page, targetId) {
  return !!page.querySelector(`#${CSS.escape(targetId)}`)
}



function displayLibrary(library) {
  const page = document.getElementById('contentGrid')
  library.forEach(book => {
    if(!hasChildWithId(page, book.id)) {
      page.appendChild(createBookCard(book))
    }
  })
}


document.addEventListener("DOMContentLoaded", () => {
  const loadModal = document.getElementById("newBook");
  const closeModal = document.getElementById("close-modal");
  const dialog = document.getElementById("new-book");
  const submitButton = document.getElementById("submit");
  const form = document.getElementById("add-title");
  const summaryDetails = document.querySelectorAll(".card");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    })
    
    addBookToLibrary(data.name, data.author, data.genre, data.coverArt,
      data.completion, data.summary);
    
    dialog.close();
    displayLibrary(library);

    
  })

  loadModal.addEventListener("click", function (){
    dialog.showModal();
  })

  closeModal.addEventListener("click", function (){
    dialog.close();
  })

  summaryDetails.forEach( item => {
    item.addEventListener('click', function(event) {
      console.log('Clicked:', event.currentTarget.id);
    })
  })
})

displayLibrary(library);
