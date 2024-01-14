
export const controller_main = (req, res) => {
  res.status(200).render('main/main', {
    title: 'Home',
  });
};