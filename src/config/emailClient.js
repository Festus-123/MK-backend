// import * as brevo from "@getbrevo/brevo";

// console.log("Brevo exports:", brevo);
// console.log(Object.keys(brevo));

// const apiInstance = new brevo.TransactionalEmailsApi();


// apiInstance.setApiKey(
//     brevo.TransactionalEmailsApiApiKeys.apiKey,
//     process.env.BREVO_API_KEY
// );
// process.exit(0);

// export default apiInstance;

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";

export const sendEmail = async (payload) => {
  const response = await fetch(BREVO_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};