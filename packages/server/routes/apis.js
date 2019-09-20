import { Router } from 'express';

const router = Router();

router.use('/signout', async (req, res, next) => {
  try {
    if (req.session.key) {
      await req.session.destroy();
    }
    console.log('deleted session!');
    return res.json({ success: true, message: 'Sign out successfully.' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
