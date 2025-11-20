const fs = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');
// const { console } = require('inspector');
const superagent = require('superagent');

// fs.readFile(`${__dirname}/final/dog.txt`, 'utf8', (err, data) => {
//   console.log(`Breed: ${data}`);
//   superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
//     console.log(res.body);
//   });
// });

// -----WITHOUT PROMISES---------
// fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
//     if (err) return console.log(err);
//     console.log(`Breed: ${data}`);
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
//     if (err) return console.log(err);
//     console.log(res.body.message);
//         // fs.writeFile('./promises/dog-image.txt', res.body.message, {flag: 'a'}, (err) => {
//         //     console.log('File written sucessfully!')
//         // }) -- add flag if you want the file to continue from where you stopped
//         fs.writeFile(`${__dirname}/dog-image.txt`, res.body.message, (err) => {
//             console.log('File written sucessfully!')
//         })
//     });
// });

//-----WITH PROMISES-----

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not read the file!');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file');
      resolve('success');
    });
  });
};

/*
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    writeFilePro(`${__dirname}/dog-image.txt`, res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file!');
  })
  .catch((err) => {
    console.log(err);
  });

  */

// fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
//   console.log(`Breed: ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);
//       fs.writeFile(`${__dirname}/dog-image.txt`, res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log('File written!');
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    //await stops the code from running until the promises is resolved.
    console.log(`Breed: ${data}`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    await writeFilePro(`${__dirname}/dog-image.txt`, res.body.message);
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
  return '2: READY @';
};

const getDogPick = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    // const res = await superagent.get(
    //   `https://dog.ceo/api/breed/${data}/images/random`
    // );

    const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const images = all.map(el => el.body.message);
    // console.log(res.body.message);
    console.log(images);
    // await writeFilePro(`${__dirname}/dog-image.txt`, res.body.message);
    await writeFilePro(`${__dirname}/dog-image.txt`, images.join('\n'));
    console.log('Random image saved to file');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2: WAITING FOR PICS...';
};

(async () => {
  try {
    console.log('1: I will get dog pics');
    const x = await getDogPick();
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('ERROR!!!');
  }
})();
/*console.log('1: Will get dog pics');
getDogPick().then(x => {
  console.log(x);
  console.log('3: Done getting dog pics');
})
.catch(err => {
  console.log(err);
});
*/
// getDogPic().then(x => {
//   console.log(x);
//   console.log('3: Done getting dog pics');
// });
// getDogPic();
console.log(__dirname);
