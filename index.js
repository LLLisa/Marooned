// console.log('extension running');

//set notifications in browser tab----------------------
const updateTitle = (newData) => {
  const title = document.title.slice(document.title.indexOf('c'));

  document.title = `${newData.notifs ? `(${newData.notifs})` : ''} ${
    newData.inbox ? `[${newData.inbox}]` : ''
  } ${title}`;
};

const setNotifsInTitle = () => {
  let notifTracker = 0;
  let inboxTracker = 0;

  setInterval(() => {
    const notifsElement = document.querySelector('a[href*="notifications"]');
    const inboxElement = document.querySelector('a[href*="inbox"]');
    const numNotifs = notifsElement
      ? notifsElement.childNodes[0].innerText.replace('notifications', '') * 1
      : null;

    const numInbox = inboxElement
      ? inboxElement.childNodes[0].innerText.replace('inbox', '') * 1
      : null;
    if (numNotifs !== notifTracker || numInbox !== inboxTracker) {
      notifTracker = numNotifs;
      inboxTracker = numInbox;
      updateTitle({ notifs: numNotifs, inbox: numInbox });
    }
  }, 5000);
};

//focus first writable field

// const focusFirstWritable = () => {
//   setTimeout(() => {
//     getAllAnchors();
//     const allInputs = [
//       ...document.querySelectorAll('textarea'),
//       ...document.querySelectorAll('input[type="text"]'),
//     ];
//     console.log('allInputs', allInputs);

//     const firstWritableField =
//       document.querySelector('textarea') || document.querySelector('input[type="text"]');
//     if (firstWritableField) {
//       // console.log('firstWritableField', firstWritableField);
//       firstWritableField.focus();
//     }
//   }, 100);
// };

// // const getAllAnchors = async () => {
// //   const allAnchors = document.querySelectorAll('a[title*="share"]');
// //   await allAnchors.forEach((anchor) =>
// //     anchor.addEventListener('click', () => {
// //       console.log('click');
// //       const allInputs = [
// //         ...document.querySelectorAll('textarea'),
// //         ...document.querySelectorAll('input[type="text"]'),
// //       ];
// //       console.log('allInputs', allInputs);
// //     })
// //   );

// //   console.log('allAnchors', allAnchors);
// // };

const init = () => {
  setNotifsInTitle();
  // focusFirstWritable();
};

init();
