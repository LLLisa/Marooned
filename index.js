// console.log('extension running');

//set notifications in browser tab----------------------
const setNotifsInTitle = () => {
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
    const notifsElement = document.querySelector('.ml-auto > text:nth-child(2)');
    if (notifsElement) {
      const numNotifs = notifsElement.firstChild.data * 1;
      if (numNotifs !== notifTracker) {
        notifTracker = numNotifs;
        updateTitle(numNotifs);
      }
    }
  }, 5000);
};

//focus first writable field

const focusFirstWritable = () => {
  const findAndFocus = () => {
    const firstWritableField =
      document.querySelector('textarea') || document.querySelector('input[type="text"]');
    // document.querySelector('textarea.border-cherry') || document.querySelector('input.w-full');
    if (firstWritableField) {
      console.log(firstWritableField);
      firstWritableField.focus();
    }
  };

  // const allAnchors = document.querySelectorAll('a[title*="share"]');
  // console.log(allAnchors);
  // for (let i = 0; i < allAnchors.length; i++) {
  //   allAnchors[i].addEventListener('click', findAndFocus);
  // }

  findAndFocus();
};

//for testing
document.addEventListener('focusin', (event) => {
  const focusedElement = event.target;
  console.log('Element focused: ', focusedElement);
  if (focusedElement.tagName !== 'TEXTAREA') focusFirstWritable();
});

const init = () => {
  setNotifsInTitle();
  focusFirstWritable();
};

init();
