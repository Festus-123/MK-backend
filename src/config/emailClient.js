import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

console.log("Brevo exports:", brevo);
console.log(Object.keys(brevo));

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
);
process.exit(0);

export default apiInstance;