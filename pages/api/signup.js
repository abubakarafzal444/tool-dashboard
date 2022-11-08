import admin, { db } from "../../config/firebaseAdmin";

export default async function Signup(req, res) {
  const { displayName, password, email } = req.body;
  try {
    const user = await admin.auth().createUser({
      email,
      password,
      displayName,
      disabled: true,
    });
    //TODO: change disable property.
    console.log("user", user.uid);
    await db.collection("users").doc(user.uid).set({
      lastLoggedIn: new Date().getTime(),
      email,
      displayName,
    });
    return res.send(user);
  } catch (err) {
    console.log("Error creating new user:", err);
    return res.send(err);
  }
}
