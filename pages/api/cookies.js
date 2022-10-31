import { db } from "../../config/firebaseAdmin";

export default async function cookieSender(req, res) {
  const { userId, siteName } = req.body;
  console.log("userId", userId);
  try {
    const userDoc = await db.collection("users").doc(userId).get();
    const user = userDoc.data();
    if (!user.lastLoggedIn + 300000 > new Date().getTime()) {
      const err = new Error({
        status: 401,
        message: "You ned to login again to access this resource",
      });
      throw err;
    }

    const snapshot = await db.collection("cookies").doc("canva").get();
    const canvaCookies = snapshot.data();
    const cookiesObj = JSON.parse(canvaCookies.cookies);
    // console.log(cookiesObj.cookies)
    const obj = JSON.stringify({
      cookies: cookiesObj.cookies,
      siteName: "https://www.canva.com/",
    });

    return res.send({ obj });
  } catch (e) {
    console.log("Error creating new user:", e);
    return res.send(e);
  }
}
