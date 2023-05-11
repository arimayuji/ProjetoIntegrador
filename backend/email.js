import emailjs from "@emailjs/browser";
const templateParams = (emailDestinatario) => {
    return (
        {
            from_name: "Tô Salvo",
            message: "Mensagem de recuperação da senha do usuário",
            email: emailDestinatario,

        }
    )
}
const serviceId = "service_0krmjdc"
const templateId = "template_n9m4x9p"
const publicKey = "smCmzwvqmtu28Kek8"
export const sendEmail = (e) => {

    emailjs.send(
        serviceId,
        templateId,
        templateParams(e.email),
        publicKey
    )
        .then(
            (response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
            },
            (err) => {
                console.log("ERROR :", err);
            }
        );
};