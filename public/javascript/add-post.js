async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;

  const post_url = document.querySelector('input[name="post-url"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  // fetch request to POST
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_url,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

// event listener
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
