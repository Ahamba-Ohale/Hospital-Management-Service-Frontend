const apiUrl = 'http://localhost:8080/api';


function getPatientsData(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${apiUrl}/getAppointments/`);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('Error fetching patient data by id:', error);
      reject(error);
    }
  });
}

export default getPatientsData;
