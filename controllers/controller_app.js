
export const controller_app = (req, res) => {
  res.status(200).render('app/app', {
    title: 'AUTH-JS',
    number: Math.floor(Math.random() * 10) + 1
  });
};