function showMessage(option) {
  var message;
  if (option === 'formal') {
      message = "Hello,\nI hope you are doing well.\nI would like to extend an invitation to meet for coffee or a casual chat.\nI believe it would be a great opportunity to connect further.\nPlease let me know your availability this week.\nThank you!";
  } else if (option === 'informal') {
      message = "Hey,\nHope you’re doing well! I’d love to meet up and hang out.\nHow about grabbing coffee or something this week? Let me know what works for you!";
  }

  // Redirect to message.html with the message as a URL parameter
  window.location.href = `message.html?message=${encodeURIComponent(message)}`;
}
