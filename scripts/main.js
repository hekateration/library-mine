const icons =
{
  HAVE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke-width="1.5" stroke="#444">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
          </svg>`,
  WANT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke-width="1.5" stroke="#444">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path>
              </svg>`,
  BOOK_DETAILS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke-width="1.5" stroke="#444">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>`,

  PARTS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff" stroke-width="1.5" stroke="#444">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"></path>
              </svg>`,
  RATING: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff" stroke-width="1.5" stroke="#fac70d">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>`,
  NREAD: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff" stroke-width="1.5" stroke="#444">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
              </svg>`,
  REREAD: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke-width="1.5" stroke="#6d7bfc">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path>
              </svg>`,
  ACQUIRE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke-width="1.5" stroke="#409d69">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path>
              </svg>`
};

const stringifyBookListItem = (bookListItem, id) =>
{
  const stringifySubtitle = (subtitle) =>
  {
    return `<h4 class="list-item-subtitle">${subtitle}</h4>`;
  };
  const stringifyAuthors = (authors) =>
  {
    let s = ``;
    for (const author of authors)
    {
      s += `<div class="list-item-author">${author}</div>`;
    }
    return `<div class="list-item-authors">${s}</div>`;
  };
  const stringifyStatSeries = () =>
  {
    let part = 1;
    let ofParts = 1;
    if (Object.hasOwn(bookListItem, 'series'))
    {
      part = bookListItem.series.part;
      ofParts = seriesOrder[ bookListItem.series.id ].length;
    }

    return `<div class="list-item-statistic">
            <div class="icon">${icons.PARTS}</div>
            <div class="value">${part}<span class="text-muted">/${ofParts}</span></div>
          </div>`;
  };
  const stringifyStatistics = (stats) =>
  {
    let s = ``;
    s += stringifyStatSeries();

    if (Object.hasOwn(stats, 'acquire'))
    {
      s += `<div class="list-item-statistic">
            <div class="icon">${icons.ACQUIRE}</div>
          </div>`;
    }
    else
    {
      if (Object.hasOwn(stats, 'rating'))
      {
        s += `<div class="list-item-statistic">
            <div class="icon">${icons.RATING}</div>
            <div class="value">${stats.rating}<span class="text-muted">/10</span></div>
          </div>`;
      }

      s += `<div class="list-item-statistic">
            <div class="icon">${icons.NREAD}</div>
            <div class="value">${stats.nRead}</div>
          </div>`;

      if (Object.hasOwn(stats, 'reRead'))
      {
        s += `<div class="list-item-statistic">
            <div class="icon">${icons.REREAD}</div>
          </div>`;
      }
    }

    return `<div class="list-item-statistics">${s}</div>`;
  };

  const subtitle = Object.hasOwn(bookListItem, 'subtitle') ?
    stringifySubtitle(bookListItem.subtitle) : '';
  const authors = stringifyAuthors(bookListItem.authors);
  const stats = stringifyStatistics(bookListItem.stats);

  return `<div id="book-list-item-${id}" class="book-list-item">
      <div class="a">
        <div class="list-item-cover"><img src="assets/covers/cover-${bookListItem.id}.jpg" alt=""></div>
      </div>
      
      <div class="b">
        <h3 class="list-item-title">${bookListItem.title}</h3>
        ${subtitle}
        ${authors}
        ${stats}
      </div>
    </div>`;
};
const eventizeBookCover = (book, viewBookCover) =>
{
  viewBookCover.addEventListener('click', () =>
  {
    changeDisplay(displayTypes.DETAILS, book);
  });
};
const stringifyBookDetails = (book) =>
{
  const stringifySubtitle = (subtitle) =>
  {
    return `<h4 class="details-subtitle">${subtitle}</h4>`;
  };
  const stringifyAuthors = (authors) =>
  {
    let s = ``;
    for (const author of authors)
    {
      s += `<div class="details-author">${author}</div>`;
    }
    return `<div class="details-authors">${s}</div>`;
  };
  const stringifyTags = (tags) =>
  {
    let s = ``;
    for (const tag of tags)
    {
      s += `<div class="details-tag">${tag}</div>`;
    }
    return `<div class="details-tags">
        <div class="t1">Tags</div>
        ${s}
      </div>`;
  };
  const stringifyStatSeries = () =>
  {
    let part = 1;
    let ofParts = 1;
    if (Object.hasOwn(book, 'series'))
    {
      part = book.series.part;
      ofParts = seriesOrder[ book.series.id ].length;
    }
    return `<div class="details-statistic">
          <div class="t1">Parts</div>
          <div class="a">
            <div class="icon">${icons.PARTS}</div>
            <div class="value">${part}<span class="text-muted">/${ofParts}</span></div>
          </div>
        </div>`;
  };
  const stringifyStatRating = () =>
  {
    if (Object.hasOwn(book.stats, 'acquire')) { return ``; }

    const placeholders = 'xyz';
    const rating = Object.hasOwn(book.stats, 'rating') ?
      book.stats.rating : placeholders[ Math.floor(Math.random() * placeholders.length) ];

    return `<div class="details-statistic">
          <div class="t1">Rating</div>
          <div class="a">
            <div class="icon">${icons.RATING}</div>
            <div class="value">${rating}<span class="text-muted">/10</span></div>
          </div>
        </div>`;
  };
  const stringifyStatRead = () =>
  {
    if (Object.hasOwn(book.stats, 'acquire')) { return ``; }

    return `<div class="details-statistic">
          <div class="t1">Read</div>
          <div class="a">
            <div class="icon">${icons.NREAD}</div>
            <div class="value">${book.stats.nRead}</div>
          </div>
        </div>`;
  };
  const stringifyStatReread = () =>
  {
    if (Object.hasOwn(book.stats, 'acquire')) { return ``; }

    if (Object.hasOwn(book.stats, 'reRead'))
    {
      return `<div class="details-statistic">
          <div class="t1">Re-read</div>
          <div class="a">
            <div class="icon">${icons.REREAD}</div>
            <div class="value">Yes</div>
          </div>
        </div>`;
    }
    else
    {
      return '';
    }
  };
  const stringifyStatAcquire = () =>
  {
    if (!Object.hasOwn(book.stats, 'acquire')) { return ``; }

    return `<div class="details-statistic">
          <div class="t1">Acquire</div>
          <div class="a">
            <div class="icon">${icons.ACQUIRE}</div>
            <div class="value">Yes</div>
          </div>
        </div>`;
  }
  const stringifyStatistics = () =>
  {
    const statSeries = stringifyStatSeries();
    const statRating = stringifyStatRating();
    const statRead = stringifyStatRead();
    const statReread = stringifyStatReread();
    const statAcquire = stringifyStatAcquire();

    return `<div class="details-statistics">
        ${statSeries}
        ${statRating}
        ${statRead}
        ${statReread}
        ${statAcquire}
      </div>`;
  };
  const stringifySynopsis = () =>
  {
    // let s = ``;
    let s = `<div class="details-synopsis">
  <div class="t1">Synopsis</div>
  <p>No synopsis at the moment.</p><p>Come back at a later time.</p>
</div>`;
    if (Object.hasOwn(book, 'synopsis'))
    {
      let ss = ``;
      for (let paragraph of book.synopsis)
      {
        ss += `<p>${paragraph}</p>`
      }
      s = `<div class="details-synopsis"><div class="t1">Synopsis</div>${ss}</div></div>`;
    }
    return s;
  };

  const subtitle = Object.hasOwn(book, 'subtitle') ?
    stringifySubtitle(book.subtitle) : '';
  const authors = stringifyAuthors(book.authors);
  const tags = Object.hasOwn(book, 'tags') ?
    stringifyTags(book.tags) : '';
  const stats = stringifyStatistics();
  const synopsis = stringifySynopsis();

  return `<div class="book-details">
      <div class="bg-layer"><div class="bg-layer-inner"></div></div>
      <div class="book-cover"><img class="book-cover-img" src="assets/covers/cover-${book.id}.jpg" alt=""></div>

      <h3 class="details-title">${book.title}</h3>
      ${subtitle}
      ${authors}
      ${tags}
      ${stats}
      ${synopsis}
    </div>`;
};
const purgeBookDetails = () =>
{
  viewBookDetails.innerHTML = ``;
};

const viewBookListHave = document.getElementById('view-book-list-have');
const viewBookListWant = document.getElementById('view-book-list-want');
const viewBookDetails = document.getElementById('view-book-details');
const initBookLists = () =>
{
  for (let i = 0; i < azOrder.length; ++i)
  {
    const book = bookList[ azOrder[i] ];

    if (Object.hasOwn(book.stats, 'acquire'))
    {
      viewBookListWant.insertAdjacentHTML('beforeend', stringifyBookListItem(book, azOrder[i]));
    }
    else
    {
      viewBookListHave.insertAdjacentHTML('beforeend', stringifyBookListItem(book, azOrder[i]));
    }

    const viewBookCover =
      document.
      getElementById(`book-list-item-${azOrder[i]}`).
      querySelector('.list-item-cover');
    eventizeBookCover(book, viewBookCover);
  }
};
initBookLists();

const viewBookListControl = document.getElementById('view-book-list-control');
const viewBookListWindow = document.getElementById('view-book-list-window');
viewBookListControl.addEventListener('click', () =>
{
  viewBookListWindow.classList.toggle('hidden');
});

const viewBookListOptionHave = document.getElementById('view-book-list-option-have');
const viewBookListOptionWant = document.getElementById('view-book-list-option-want');
const displayTypes = { HAVE: 0, WANT: 1, DETAILS: 2 };
const settings =
{
  atDisplay: displayTypes.HAVE
};
const changeDisplay = (toDisplay, book) =>
{
  if (toDisplay === settings.atDisplay) { return; }

  const viewHeaderSearchbar = document.getElementById('view-header-searchbar');
  const viewHeaderTitle = document.getElementById('view-header-title');

  const optionWantValue = viewBookListOptionWant.children[2];
  const optionHaveValue = viewBookListOptionHave.children[2];

  // Hide current display
  if (settings.atDisplay === displayTypes.HAVE)
  {
    optionHaveValue.classList.remove('selected');
    viewBookListHave.classList.add('hidden');
  }
  else if (settings.atDisplay === displayTypes.WANT)
  {
    optionWantValue.classList.remove('selected');
    viewBookListWant.classList.add('hidden');
  }
  else if (settings.atDisplay === displayTypes.DETAILS)
  {
    viewHeaderTitle.classList.add('hidden');
    viewHeaderSearchbar.classList.remove('hidden');

    purgeBookDetails();
    viewBookDetails.classList.add('hidden');
  }

  // Show new display
  if (toDisplay === displayTypes.HAVE)
  {
    optionHaveValue.classList.add('selected');
    viewBookListControl.innerHTML = icons.HAVE;
    viewBookListHave.classList.remove('hidden');
  }
  else if (toDisplay === displayTypes.WANT)
  {
    optionWantValue.classList.add('selected');
    viewBookListControl.innerHTML = icons.WANT;
    viewBookListWant.classList.remove('hidden');
  }
  else if (toDisplay === displayTypes.DETAILS)
  {
    viewHeaderSearchbar.classList.add('hidden');
    viewHeaderTitle.classList.remove('hidden');
    viewBookListControl.innerHTML = icons.BOOK_DETAILS;

    viewBookDetails.insertAdjacentHTML('beforeend', stringifyBookDetails(book));
    viewBookDetails.classList.remove('hidden');
  }

  settings.atDisplay = toDisplay;
  window.scrollTo(0, 0);
};

viewBookListOptionHave.addEventListener('click', () =>
{
  changeDisplay(displayTypes.HAVE);
});
viewBookListOptionWant.addEventListener('click', () =>
{
  changeDisplay(displayTypes.WANT);
});