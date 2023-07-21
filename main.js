document.body.style = 'border:3px solid red;';
console.log('extension running');

const updateTitle = (num) => {
  const title = document.title;

  const parens = /[()]/;
  const parensContents = /\((.*?)\)/g;

  document.title = parens.test(title)
    ? title.replace(parensContents, `(${num})`)
    : `(${num}) ${title}`;
};

let notifTracker = 0;
setInterval(() => {
  const numNotifs = document.querySelector('.ml-auto > text:nth-child(2)').firstChild.data * 1;
  if (numNotifs !== notifTracker) {
    notifTracker = numNotifs;
    updateTitle(numNotifs);
  }
}, 5000);
