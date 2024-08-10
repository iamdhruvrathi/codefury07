// public/js/callcenter.js
const emergencyNumbers = {
  "Andhra Pradesh": "0866-246-6000",
  "Arunachal Pradesh": "0360-221-3555",
  Assam: "1070",
  Bihar: "0612-221-0281",
  Chhattisgarh: "0771-222-2515",
  Goa: "0832-243-8611",
  Gujarat: "1077",
  Haryana: "0172-274-4000",
  "Himachal Pradesh": "0177-262-1020",
  Jharkhand: "0651-240-0700",
  Karnataka: "080-222-23181",
  Kerala: "0471-255-2056",
  "Madhya Pradesh": "0755-270-0180",
  Maharashtra: "108",
  Manipur: "0385-244-2355",
  Meghalaya: "0364-250-0133",
  Mizoram: "0389-230-4057",
  Nagaland: "0370-224-1182",
  Odisha: "0674-253-1161",
  Punjab: "112",
  Rajasthan: "0141-272-2100",
  Sikkim: "03592-201-000",
  "Tamil Nadu": "044-285-799-99",
  Telangana: "040-233-322-55",
  Tripura: "0381-232-2353",
  "Uttar Pradesh": "1070",
  Uttarakhand: "1800-180-4141",
  "West Bengal": "1070",
  "Andaman and Nicobar Islands": "03192-232-100",
  Chandigarh: "0172-270-4242",
  "Dadra and Nagar Haveli and Daman and Diu": "0260-226-1234",
  Lakshadweep: "04896-262-036",
  Delhi: "011-233-891-10",
  Puducherry: "0413-233-3000",
};

// Example function to get the emergency number based on the state
function getEmergencyNumber(state) {
  return emergencyNumbers[state] || "Emergency number not available";
}
