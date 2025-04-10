console.log("Hello World");

// [SECTION] Fetch method
// allows us to get, post, update or even delete data in a server

// url is a representative address of accessing a resource
// or data in another machine
fetch("https://jsonplaceholder.typicode.com/posts")
  // allows us to process the data we retrivve using fetch in another
  // function
  .then(function (response) {
    // parse the incoming data as a proper JS Object
    console.log(response);
    return response.json();
  })
  // to do something with the processed server response
  .then(function (data) {
    // this runs later after fetched
    // log the data to the console
    showPosts(data);
  });

// showPosts this will create html elements using our fetched data
const showPosts = (posts) => {
  // loop through the posts
  // console.log(posts);

  // Add each post as a string
  let postEntries = "";

  posts.forEach((post) => {
    // console.log(post);
    // Pass the post id to a delete button
    postEntries += `
        <div id="post-${post.id}" class="post">
            <h3 id="post-title-${post.id}">${post.title}</h3>
            <p id="post-body-${post.id}">${post.body}</p>
            <button onclick="edit('${post.id}')">Edit</button>
            <button onclick="deletePost('${post.id}')">Delete</button>
        </div>
        `;
  });

  // console.log(postEntries);
  // we can add html element to another element as string by
  // updating it using innerHTML property.
  document.getElementById("div-post-entries").innerHTML = postEntries;
};

// Add data to our server
document
  .getElementById("form-add-post")
  .addEventListener("submit", function (event) {
    console.log(event);

    event.preventDefault(); // prevent the default action of the form

    // console.log("Hello! The post has been added!");
    let titleInput = document.getElementById("txt-title");
    let bodyInput = document.getElementById("txt-body");

    // console.log(titleInput.value);
    // console.log(bodyInput.value);

    // fetch("url", "{options}")
    // options contains other details to be sent to the server

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // method to be used
      // This contains the main content that we want to send
      // to our server.

      body: JSON.stringify({
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1,
      }),
      // contains other details that we need to send to the server
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  });

function deletePost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      console.log("Post deleted:", data);
      alert("Post deleted successfully.");
      const postElement = document.getElementById(`post-${id}`);
      if (postElement) {
        postElement.remove();
      }
    })
    .catch(function (error) {
      console.error("Error deleting post:", error.message);
    });
}

let formViewPost = document.getElementById("form-view-post");
let formViewBtn = document.getElementById("btn-view-post");
let formViewTxt = document.getElementById("txt-view-post");
let divPostView = document.getElementById("div-post-view");

formViewPost.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(`https://jsonplaceholder.typicode.com/posts/${formViewTxt.value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Post not found.");
      }
      return response.json();
    })
    .then((data) => {
      divPostView.innerHTML = `
                <h3 id="post-title-${data.id}">${data.title}</h3>
                <p id="post-body-${data.id}">${data.body}</p>
            `;
    })
    .catch((error) => {
      divPostView.innerHTML = `
                <p>${error.message}</p>
            `;
    });
});

formViewTxt.addEventListener("keyup", function () {
  if (formViewTxt.value.length > 0) {
    formViewBtn.disabled = false;
  } else {
    formViewBtn.disabled = true;
  }
});

/*
    Mini Activity (10 mins):
    1. Create a function called editPost(id) that will:
        a. Get the post title from <post-title-id>
        b. Get the post body from <post-body-id>
        c. Populate the form fields with the retrieved data:
            i. post ID
            ii. post title
            iii. post body
        d. Enable the "Update" button by removing the disable attribute
        e. Take a screenshot of your webpage after the form is pre-filled and send it in the chat.
*/

const txtEditBody = document.getElementById("txt-edit-body");
const txtEditTitle = document.getElementById("txt-edit-title");
const txtEditId = document.getElementById("txt-edit-id");

const formEditPost = document.getElementById("form-edit-post");
const submitButton = document.getElementById("btn-submit-update");
const deleteButton = document.getElementById("delete-all");

formEditPost.addEventListener("submit", function (event) {
  event.preventDefault();

  const postId = txtEditId.value;
  const updatedTitle = txtEditTitle.value;
  const updatedBody = txtEditBody.value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      id: postId,
      title: updatedTitle,
      body: updatedBody,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Update failed.");
      return response.json();
    })
    .then((data) => {
      document.getElementById(`post-title-${postId}`).innerText = data.title;
      document.getElementById(`post-body-${postId}`).innerText = data.body;

      alert("Successfully updated.");
      console.log("Successfully updated:", data);

      txtEditId.value = "";
      txtEditTitle.value = "";
      txtEditBody.value = "";
      submitButton.setAttribute("disabled", true);
    })
    .catch((error) => {
      console.error("Update failed:", error.message);
      alert("Failed to update post.");
    });
});

function edit(id) {
  const postTitle = document.getElementById(`post-title-${id}`);
  const postBody = document.getElementById(`post-body-${id}`);

  txtEditId.value = id;
  txtEditBody.value = postBody.innerText;
  txtEditTitle.value = postTitle.innerText;
  submitButton.removeAttribute("disabled");
}

deleteButton.addEventListener("click", function () {
  alert("All Posts Deleted");
  document.getElementById("div-post-entries").innerHTML = "";
});
