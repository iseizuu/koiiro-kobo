document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio');
  const chatContainer = document.getElementById('chat-container');

  const lyrics = [
    { time: 3, text: "Suki yo" },
    { time: 4.5, text: "Ima anata ni" },
    { time: 6.2, text: "Omoi nosete" },
    { time: 8, text: "HORA" },
    { time: 9, text: "Suna o ni" },
    { time: 10.8, text: "naru no watashi" },
    { time: 13, text: "Kono saki motto" },
    { time: 15.2, text: "Soba ni ite" },
    { time: 16.7, text: "Mo ii ka na?" },
    { time: 18.5, text: "Koi to koi ga" },
    { time: 20.6, text: "Kasanatte" },
    { time: 22, text: "Suki yo" },
  ];

  // Clear chat
  audio.addEventListener('play', function () {
    chatContainer.innerHTML = '';
  });

  audio.addEventListener('timeupdate', function () {
    const currentTime = audio.currentTime;
    lyrics.forEach((line, index) => {
      const time = line.time;
      if (currentTime >= time && !document.querySelector(`[data-time='${time}']`)) {
        addChatMessage(line.text, time);
      }
    });
  });

/**
 * Create a chat message element with the provided text and time and append it to the chat container.
 *
 * @param {string} text - The text content of the chat message.
 * @param {number} time - The time associated with the chat message.
 */
  function addChatMessage(text, time) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('flex', 'justify-start', 'mb-4');
    messageDiv.setAttribute('data-time', time);

    const messageContent = `
      <div class="flex justify-center items-center space-x-2">
        <img src="kobo.png" alt="Receiver Avatar" class="w-12 h-12 rounded-full border-2 border-full">
        <div class="bg-gray-300 text-gray-900 p-3 rounded-r-lg rounded-bl-lg max-w-xs">
        <p class="lyric-line">${text}</p>

        </div>
      </div>
    `;
    messageDiv.innerHTML = messageContent;
    chatContainer.appendChild(messageDiv);
  }
});


