import sendGrid from "@sendgrid/mail";

export default function enviarEmail() {
  const token = process.env.NEXT_SENDGRID_API_KEY || "teste";

  sendGrid.setApiKey(token);

  const msg = {
    to: "leonardo.ncintra@outlook.com", // Change to your recipient
    from: "causadepadreramon@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  console.log(msg);

  sendGrid
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
