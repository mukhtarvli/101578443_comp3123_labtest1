// Resolves success in 500 milliseconds.
const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ message: "delayed success!" }), 500);
  });
};

// Rejects error after 500 milliseconds.
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "delayed exception!" }), 500);
  });
};

resolvedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(errorsS));

rejectedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

module.exports = { resolvedPromise, rejectedPromise };
