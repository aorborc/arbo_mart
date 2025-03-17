export const sendSms = async (smsData) => {
    try {
      const response = await fetch("https://sms.bulksmsserviceproviders.com/api/send/sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(smsData),
      });
  
      const jsonResponse = await response.json();
      return jsonResponse; // Return response data
    } catch (error) {
      console.error("Error sending SMS:", error);
      throw error; // Handle error
    }
  };
  
