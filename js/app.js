https://xjisftmfjsjomgsjzkod.supabase.co
sb_publishable_5XyiR6l-76O6RFbR1ba2oQ_4p9Gm5oS
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email, password
  });

  if (error) alert(error.message);
  else window.location = "pilot.html";
}
