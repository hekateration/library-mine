const printAZOrder = () =>
{
  bookList.sort((a, b) => a.title.localeCompare(b.title));
  let s = `[`;
  for (let i = 0; i < bookList.length; i++)
  {
    s += `${bookList[i].id},`;
  }
  s += `]`;
  console.log(s);
};

const printSeriesId = () =>
{
  let s = `sid-`;
  const idLength = 20;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < idLength; i++)
  {
    s += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  console.log(s);
};

const printSeriesOrder = () =>
{
  const seriesLists = new Map();
  // Populate series list
  for (let i = 0; i < bookList.length; i++)
  {
    if (Object.hasOwn(bookList[i], 'series'))
    {
      if (seriesLists.has(bookList[i].series.id))
      {
        const series = seriesLists.get(bookList[i].series.id);
        series.push({ bookId: bookList[i].id, part: bookList[i].series.part });
      }
      else
      {
        seriesLists.set(bookList[i].series.id,
          [{ bookId: bookList[i].id, part: bookList[i].series.part }]);
      }
    }
  }
  // console.log('before sort', seriesLists);
  let s = `{`;
  // Sort series lists by parts and populate the string
  for (const [key, value] of seriesLists.entries())
  {
    value.sort((a, b) => a.part > b.part);
    s += `'${key}': [`;
    for (let i = 0; i < value.length; i++)
    {
      s += `{ bookId: ${value[i].bookId}, part: ${value[i].part} },`;
    }
    s += `],`;
  }
  s += `}`;

  // console.log('after sort', seriesLists);
  console.log(s);
};