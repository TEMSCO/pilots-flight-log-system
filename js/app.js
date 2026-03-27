"https://xjisftmfjsjomgsjzkod.supabase.co",
  "sb_publishable_5XyiR6l-76O6RFbR1ba2oQ_4p9Gm5oS"
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
