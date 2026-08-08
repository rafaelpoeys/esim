/**
 * Invictus Connect - Frontend Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp configuration
    const WHATSAPP_PHONE = '5500000000000'; // Insira o número do WhatsApp com DDD aqui

    // Attach click events to all "Select Plan" buttons
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const planName = event.target.getAttribute('data-plan');
            redirectToWhatsApp(planName);
        });
    });

    /**
     * Redirects customer to WhatsApp AI Agent with pre-filled message
     * @param {string} plan - Selected plan description
     */
    function redirectToWhatsApp(plan) {
        const message = `Hello! I am on invictus.center and I would like to buy the *${plan}* eSIM for my trip to Brazil.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/27981398787?text=${encodedMessage}`;

        // Open in new window/tab securely
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
});
