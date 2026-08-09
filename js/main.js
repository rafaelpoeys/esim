/**
 * Invictus Connect - Frontend Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // ⚠️ SUBSTITUA PELO SEU NÚMERO REAL DO WHATSAPP (Código do país + DDD + Número)
    // Exemplo para São Paulo: '5511999998888'
    const WHATSAPP_PHONE = '5518981705679';

    // 1. Botão "Talk to AI Assistant" na Hero Section
    const aiAssistantBtn = document.querySelector('.ai-chat-btn');
    if (aiAssistantBtn) {
        aiAssistantBtn.addEventListener('click', () => {
            const generalMessage = "Hi! I am traveling to Brazil and I would like to learn more about your 5G eSIM plans.";
            redirectToWhatsApp(generalMessage);
        });
    }

    // 2. Botões de Seleção de Planos (Cards)
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const planName = event.target.getAttribute('data-plan');
            const planMessage = `Hello! I am on invictus.center and I would like to buy the *${planName}* eSIM for my trip to Brazil.`;
            redirectToWhatsApp(planMessage);
        });
    });

    /**
     * Redireciona o cliente para o WhatsApp com mensagem formatada
     * @param {string} messageTexto - Mensagem inicial que será enviada
     */
    function redirectToWhatsApp(messageTexto) {
        const encodedMessage = encodeURIComponent(messageTexto);
        const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

        // Abre em nova aba por segurança
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
});
