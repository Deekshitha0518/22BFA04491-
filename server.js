const axios = require('axios');

const API_URL = "http://20.244.56.144/evaluation-service/logs";

// ✅ Use the exact token and token type here:
const TOKEN_TYPE = "Bearer";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ0aG90YWRlZWtzaGl0aGEzQGdtYWlsLmNvbSIsImV4cCI6MTc1Mzc3MTE5MywiaWF0IjoxNzUzNzcwMjkzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWM5NmUyMWQtZDFhNC00MjI1LWE2ZDEtM2NhODVhN2U2NmJkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZGVla3NoaXRoYSIsInN1YiI6IjYxMmJlMGQ5LWI0YmEtNGVjMS04ODI3LWE5MjUzYWQ3YzcyNCJ9LCJlbWFpbCI6InRob3RhZGVla3NoaXRoYTNAZ21haWwuY29tIiwibmFtZSI6ImRlZWtzaGl0aGEiLCJyb2xsTm8iOiI0NDkxIiwiYWNjZXNzQ29kZSI6IlByanlRRiIsImNsaWVudElEIjoiNjEyYmUwZDktYjRiYS00ZWMxLTg4MjctYTkyNTNhZDdjNzI0IiwiY2xpZW50U2VjcmV0IjoiandnZ1hxZ3JVYlV6Z2tlbiJ9.I2ICcquw2pCSQBCCFSRrZPOPMGhLqlcG041QFjvu3CU";

function Log(stack, level, packageName, message) {
  const payload = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: packageName.toLowerCase(),
    message: message
  };

  axios.post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${TOKEN_TYPE} ${ACCESS_TOKEN}`
    }
  })
  .then(response => {
    console.log("✅ Log sent:", response.data);
  })
  .catch(error => {
    console.error("❌ Error sending log:", error.response?.data || error.message);
  });
}

module.exports = Log;