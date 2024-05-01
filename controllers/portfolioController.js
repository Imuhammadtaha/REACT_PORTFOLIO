const sendEmailController = () => {
  try {
    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email APi Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
