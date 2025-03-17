const BASE_URL = "https://www.zohoapis.in/crm/v7";

/**
 * Fetch a lead by phone number from Zoho CRM
 * @param {string} authToken - OAuth token for authentication
 * @param {string} phoneNumber - Phone number to search in Zoho CRM
 * @returns {object|null} Lead data or null if not found
 */
export const getLeadByPhone = async (authToken, phoneNumber) => {
  try {
    const response = await fetch(`${BASE_URL}/Leads/search?phone=${phoneNumber}`, {
      method: "GET",
      headers: {
        "Authorization": `Zoho-oauthtoken ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    // console.log(data)
    return data.data.length > 0 ? data.data[0] : null;
  } catch (error) {
    console.error("Error fetching lead:", error);
    return null;
  }
};

/**
 * Create a new lead in Zoho CRM
 * @param {string} authToken - OAuth token for authentication
 * @param {object} leadData - Lead details { Last_Name, Email, etc. }
 * @returns {object|null} Created lead data or null if failed
 */
export const createLead = async (authToken, leadData) => {
  try {
    const response = await fetch(`${BASE_URL}/Leads`, {
      method: "POST",
      headers: {
        "Authorization": `Zoho-oauthtoken ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [leadData] }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error("Error creating lead:", error);
    return null;
  }
};

/**

 */
export const updateLeads = async (authToken, leadId, leadData) => {
  try {
    const response = await fetch(`${BASE_URL}/Leads/${leadId}`, {
      method: "PUT",
      headers: {
        "Authorization": `Zoho-oauthtoken ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [{ id: leadId, ...leadData }] }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating lead:", error);
    return false;
  }
};


export const getLeadByID = async (authToken, LeadID) => {
  try {
    const response = await fetch(`${BASE_URL}/Leads/${LeadID}`, {
      method: "GET",
      headers: {
        "Authorization": `Zoho-oauthtoken ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching lead:", error);
    return null;
  }
};

//file upload

export const UploadAttachment = async (authToken, LeadID,formData) => {
  try {
    const response = await fetch(`${BASE_URL}/Leads/${LeadID}/Attachments`, {
      method: "POST",
      headers: {
        "Authorization": `Zoho-oauthtoken ${authToken}`,
        "Content-Type": "application/json",
      },
      body:formData,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error creating lead:", error);
    return null;
  }
};