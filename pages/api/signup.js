import admin from "../../config/firebaseAdmin";

export default async function Signup(req, res) {
  const { displayName, password, email } = req.body;
  try {
    const user = await admin.auth().createUser({
      email,
      password,
      displayName,
      disabled: false,
    });
    //TODO: change disable property.

    return res.send(user);
  } catch (err) {
    console.log("Error creating new user:", err);
    return res.send(err);
  }
}
