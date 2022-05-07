async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_url = document
    .querySelector('input[name="post-url"]')
    .value.trim();
  const post_text = document
    .querySelector('textarea[name="post-text"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // fetch request to update posts by id
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
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
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
