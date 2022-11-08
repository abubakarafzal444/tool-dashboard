import { db } from "../../config/firebaseAdmin";

export default async function login(req, res) {
  const { userId } = req.body;
  try {
    console.log("saving new")
    db.collection("users")
      .doc(userId)
      .update({ lastLoggedIn: new Date().getTime() });
  } catch (err) {
    console.log("Error creating new user:", err);
    return res.send(err);
  }
}
