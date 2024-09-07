const syncEvents = async (req, res) => {
  const { token, events } = req.body

  if (!token) {
    throw new Error('Invalid user token');
  }

  try {
    res.status(200).json({ message: 'All good' });
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { syncEvents }