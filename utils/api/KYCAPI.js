const BASE_URL="https://kyc-api.surepass.io/api/v1"

export const FetchGSTbyPan = async ( idNumber) => {
    try {
      const response = await fetch(`${BASE_URL}/corporate/gstin-by-pan`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczOTI1NTkxMCwianRpIjoiOGU0NWFjYTktN2M3My00YWI2LWE5MGEtYzk0MjllNWIyNTQ1IiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LmFyYm9iYXRoQHN1cmVwYXNzLmlvIiwibmJmIjoxNzM5MjU1OTEwLCJleHAiOjIzNjk5NzU5MTAsImVtYWlsIjoiYXJib2JhdGhAc3VyZXBhc3MuaW8iLCJ0ZW5hbnRfaWQiOiJtYWluIiwidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.gqv0RCZAf9sXXpqjT4BSGl9HWOeOwf_82y5bRyDIKr8`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id_number: idNumber
          }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 422) {
            // Handle case where no GSTIN is found (Expected behavior)
            return { success: false, data, message: "No GSTIN Found." };
        }
        throw new Error(data.message || `Error: ${response.status}`);
    }
    return { success: true, data };

} catch (error) {
    console.error("KYC API Error:", error)
    return { error: true, message: error.message|| "Network error" , data:error };
}
  };


export const FetchGSTAdvanced = async ( idNumber) => {
    try {
      const response = await fetch(`${BASE_URL}/corporate/gstin-advanced`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczOTI1NTkxMCwianRpIjoiOGU0NWFjYTktN2M3My00YWI2LWE5MGEtYzk0MjllNWIyNTQ1IiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LmFyYm9iYXRoQHN1cmVwYXNzLmlvIiwibmJmIjoxNzM5MjU1OTEwLCJleHAiOjIzNjk5NzU5MTAsImVtYWlsIjoiYXJib2JhdGhAc3VyZXBhc3MuaW8iLCJ0ZW5hbnRfaWQiOiJtYWluIiwidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.gqv0RCZAf9sXXpqjT4BSGl9HWOeOwf_82y5bRyDIKr8`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id_number: idNumber
          }),
      });
  
      if (!response.ok) {
        throw new Error(data.message || `Error: ${response.status}`);
      }
  
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("KYC API Error:", error.message);
      return { error: true, message: error.message || "Network error" };
    }
  };