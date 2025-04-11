// Contact form elements
const contact_form = document.getElementById("contact-form");
const name_input = document.getElementById("name");
const email_input = document.getElementById("email");
const message_input = document.getElementById("message");
const name_input_error = document.getElementById("name-error");
const email_input_error = document.getElementById("email-error");
const message_input_error = document.getElementById("message-error");

// Add Form validation if contact_form exists
if (contact_form) {
  contact_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = name_input.value;
    const email = email_input.value;
    const message = message_input.value;
    let error = false;
    // Validate name
    if (name === "") {
      name_input_error.innerText = "Please Fill in the name.";
      error = true;
    } else {
      // Empty the error messages
      name_input_error.innerText = "";
    }
    // Validate email
    if (email === "") {
      email_input_error.innerText = "Please Fill in the email.";
      error = true;
    } else if (!/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      email_input_error.innerText = "Please give a valid email.";
      error = true;
    } else {
      // Empty the error messages
      email_input_error.innerText = "";
    }
    // Validate message
    if (message === "") {
      message_input_error.innerText = "Please Fill in the message.";
      error = true;
    } else if (message.length < 10) {
      message_input_error.innerText =
        "The message Should be at least 10 characters long.";
      error = true;
    } else {
      // Empty the error messages
      message_input_error.innerText = "";
    }
    // Stop ifthere is an error
    if (error) {
      return;
    }
    // Submit the form if there is no error
    contact_form.requestSubmit();
  });
}

// Projects elements
const show_more = document.getElementById("show-more");
const main = document.getElementsByTagName("main")[0];
const project2_template = `
      <h2>Tic Tac Toe game</h2>
      <figure>
        <img width="512" src="assets/tic-tac-toe.png"
          alt="the interface of the tic tac toe game where the X player wins." />
        <figcaption>as you see the X player wins as expected 🙃.</figcaption>
      </figure>
      <p>
        The game supports playing against computer, and can save players
        scores in local storage. craeated at:
        <time datetime="2024-12">2024, Dec</time>.
      </p>
      <a href="#">view source on github</a>
    
`;

// Add Show more projects if show_more exists
if (show_more) {
  show_more.addEventListener("click", () => {
    // Create project2
    const project2 = document.createElement("article");
    // Set project2 class and id
    project2.classList.add("project2");
    project2.id = "project2";
    // Set project2 innerHtml to the template
    project2.innerHTML = project2_template;

    // Hide the button
    show_more.hidden = true;

    // Inset project2 to the DOM after project1
    main.appendChild(project2);
  });
}

// CV page elements
const toggle_skills = document.getElementById("toggle-skills");
const skills = document.getElementById("skills");
let skills_shown = true;

// Add toggle skills if toggl_skills exists
if (toggle_skills) {
  toggle_skills.addEventListener("click", () => {
    skills.hidden = skills_shown;
    skills_shown = !skills_shown;
  });
}

// Homepage elements
const greeting = document.getElementById("greeting");

// Add Greeting if greeting exists
if (greeting) {
  const current_hours = new Date().getHours();
  if (current_hours < 12) {
    // Before 12pm
    greeting.innerText = "Good morning!";
  } else if (current_hours <= 18) {
    // After 12pm and before 6pm
    greeting.innerText = "Good afternoon!";
  } else {
    // After 6pm
    greeting.innerText = "Good evening!";
  }
}
