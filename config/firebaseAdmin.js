import admin from "firebase-admin";

const firebaseAdminConfig = {
  type: "service_account",
  project_id: "cookie-tool-5daf8",
  private_key_id: "515e52e7d9368b100c73614ec1a5a91cf22bab03",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBT3x/gbSr+fbd\nOK+j8jkeY40x79RddfoJbkjMgSLP40p63+Pa9rsPjFJRUcrWkCqM08941bcQwAGo\nBiB3jEBy9ui9zvIUrYgd8aPRzRObQrnbVAHpylvvlSpr13dCR89D/KDi5L36g7iy\nH82PQiLF6qlh+AGxhnX/BF16bNeX9i/TcFHRSqVsTNXsGlcsoqsg2uE20+vZU4SQ\njGKzG+BNcul3I95i3f10nY8Xf3rbySC8rs2wcdELRy22QuZ8nhQ94apOB9rYooUl\nzXjLfciDE2u8dRhaOrGjh8n95Qxg3yKc54tb1uwvqR8uJgOL2jX8CJ2WH4Da/oFl\nlM+pKLXhAgMBAAECggEAHQppbChasZlYRkytSkZp4VBYVl+uuimumfsY8awWxD9j\noYkADJWTbZcJiNDuVYSL9+McII2OtnP567mb6AnIZt0EAvvTb1rQf5sdHrgd0W3Z\nSQNaVDqDzD7PBCt27ZynHRIXQ27UwY1HUm8nrPVlDvGdZ6vf6UEHefu4ZVtzmg7t\nqjCm4e8XaPgPKuQbu4N/jVxpxswIVn1YdNt6UDdV2kofBOSL316kKkVO+44KwqOt\nJuK+11fwmSSgRTU+cFfYSTuFbB+WizS9ixG4yDndMt6vs92mgS1yWRG4SZ8y35iR\nDpG3PAn7dMi5q4fFnqK8gaXEyg5c/kHppaHVHpNcSQKBgQDldVRMItH2ot/s14lY\noDl6lrQNFVA27YVvmcBUxzBq/T3lV8+HSqABeAfHzD7UVQso+02xhie40Nox1LVC\nLcOf3nCSIFmAhvg2p8jfD5b1r6yhKJ4IilfH7eVXEx5rBhwC2Y8z9MXMkupE2b8O\nFhQHScOOpYr6uxQpDMz8+SrdjQKBgQDXq8Fg12LEcdbj1EvC8wihZ2ARX11THXNW\nVxH39UN1lUSzOwur5slW9Lu1WzeKrHw3AMLe4HaVydUY2e81oSDgfGmnZ7rKUFTv\nu+HXD3entXap2lxPnJy7zZSUqJAXf6xXs8alVg5eD78WiwUzkUz8EvM04X7FrsjK\n2B/iYcQSpQKBgCPfkgxNLVJH6IZYtCpc8l+ODBw3htDvlXr7KKyYb6NqcDDY56MZ\nMabJIz5DWldL7HC9yUnF1ZP5YwODY8sy6HCoECVoVVXYxBmXZbop78n9axnPBdYD\n+vFQ6hgQ7yKAVATGCrNuwzXWijW1bT9AiGUTTTWSAAZvFRnN3IZ4VhFJAoGAAWAl\nEZsOFDatqjJWcV3fdjgUksfK7pbHf4t6n9w+m+dh0srTnjsQma9h6xwz1HyZJjip\nBYbk+ruY0lnBftQSQ5xHiDvPIy8z+3t1S0vb9YPgx+COqitTjJcZFYGluaCk1sJc\nx/0uhkcPbvNgCx4oIYt1Zabyigw9V53dRjJdb8kCgYEAm2iI1X5jXvR6+9ws2Tv4\nqXoRnjgLvQTF5pC8bFMk70tBbbPnAQoahYdwlEv25Do4LnbwUkF/ezihRyzZY9T5\nIF7j0nBVtzvWACR5gwpLCCFNcAaTDSodNCouhVvuNC7z5zThIAUUjeByjmSK7Vye\nEToKTV+VLH9uBVEPt9vApEg=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-kh9rx@cookie-tool-5daf8.iam.gserviceaccount.com",
  client_id: "101046742568263329287",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kh9rx%40cookie-tool-5daf8.iam.gserviceaccount.com",
};

try {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig),
  });
  console.log("Initialized.");
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

export default admin;
export const db = admin.firestore();
