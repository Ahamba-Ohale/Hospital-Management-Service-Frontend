const apiUrl = 'http://localhost:8080/api';


function getAppointmentData() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${apiUrl}/appointment/`);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('Error fetching patient data by id:', error);
      reject(error);
    }
  });
}

export default getAppointmentData;
