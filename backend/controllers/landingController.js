// @desc        Get the home route
// @route       GET /
// @access      Public
export const getIndex = (req, res, next) => {
  try {
    res.status(200).json({ path: '/', requestedUrl: `${req.url}` });
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    console.error(`Error: ${message}`);
    res.status(500).json({
      status: 'failure',
      message: message,
      cause: err.stackTrace,
    });
  }
};

// @desc        Get the contact route
// @route       GET /
// @access      Public
export const getAbout = (req, res, next) => {
  try {
    res.status(200).json({ path: '/about', requestedUrl: `${req.url}` });
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    console.error(`Error: ${message}`);
    res.status(500).json({
      status: 'failure',
      message: message,
      cause: err.stackTrace,
    });
  }
};

export const getContact = (req, res, next) => {
  try {
    res.status(200).json({ path: '/contact', requestedUrl: `${req.url}` });
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    console.error(`Error: ${message}`);
    res.status(500).json({
      status: 'failure',
      message: message,
      cause: err.stackTrace,
    });
  }
};

// @desc        Post to the contact route
// @route       POST /
// @access      Public
export const postContact = (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    console.log(`\n\t\tInputs: ${name}, ${email}, ${message}\n\n`);

    res.status(200).json({ name: name, email: email, message: message });
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    console.error(`Error: ${message}`);
    res.status(500).json({
      status: 'failure',
      message: message,
      cause: err.stackTrace,
    });
  }
};
