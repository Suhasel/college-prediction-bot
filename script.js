async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
    
    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    
    // Clear input
    document.getElementById('user-input').value = '';

    // Send to OpenAI API
    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 150
        })
    });

    const data = await response.json();
    const botResponse = data.choices[0].text;

    // Display bot response
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
