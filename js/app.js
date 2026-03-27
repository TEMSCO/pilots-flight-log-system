const supabase = window.supabase.createClient(
  "https://YOUR_PROJECT_ID.supabase.co",
  "YOUR_PUBLISHED_KEY"
);

async function login() {
  console.log("Login clicked");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    window.location.href = "/pilot.html";
  }
}
