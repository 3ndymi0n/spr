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
          <p class="readState">Read State: ${title.readState}</p>
          <span>
            <svg class="ico" id="markUnread" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Mark Unread</title><path d="M12 18.5C12 19.79 12.39 21 13.04 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V12.18C19.5 12.07 19 12 18.5 12C14.91 12 12 14.91 12 18.5M23 18.5C23 21 21 23 18.5 23S14 21 14 18.5 16 14 18.5 14 23 16 23 18.5M20 21.08L15.92 17C15.65 17.42 15.5 17.94 15.5 18.5C15.5 20.16 16.84 21.5 18.5 21.5C19.06 21.5 19.58 21.35 20 21.08M21.5 18.5C21.5 16.84 20.16 15.5 18.5 15.5C17.94 15.5 17.42 15.65 17 15.92L21.08 20C21.35 19.58 21.5 19.06 21.5 18.5Z" /></svg>
            <svg class="ico" id="markReading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Mark Reading</title><path d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z" /></svg>
            <svg class="ico" id="markFinished" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Mark Finished</title><path d="M6.5 20C8.2 20 10.65 20.65 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C5.33 4.5 4.11 4.65 3 5C2.25 5.25 1.6 5.55 1 6V20.6C1 20.85 1.25 21.1 1.5 21.1C1.6 21.1 1.65 21.1 1.75 21.05C3.15 20.3 4.85 20 6.5 20M12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5Z" /></svg>
            <svg class="ico" id="deleteTitle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete Title</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
          </span>
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
})

displayLibrary(library);
