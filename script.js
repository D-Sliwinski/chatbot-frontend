let history = [];
async function sendMessage() {
    const input = document.getElementById("msg-input");
    const text = input.value.trim();
    if (!text) return; 
    input.value = ""; 

    const suggestions = document.getElementById("suggestions");
    if (suggestions) suggestions.remove();

    const body = document.getElementById("chat-body");

    body.innerHTML += `
        <div class="msg-row user">
            <div class="avatar user-av">Ty</div>
            <div class="bubble usr">${text}</div>
        </div>
    `;
    body.scrollTop = body.scrollHeight;
    history.push({ role: "user", content: text });
    body.scrollTop = body.scrollHeight; 
}

function sendSuggestion(text) {
    document.getElementById("msg-input").value = text;
    sendMessage();
}

function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}
function clearChat() {
    history = [];
    window.location.reload(); 
}
