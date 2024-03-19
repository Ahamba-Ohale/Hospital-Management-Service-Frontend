const Url = 'http://localhost:8080/api';


function getPrescriptionsData(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${Url}/treatmentPlan/`);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('Error fetching patient data by id:', error);
      reject(error);
    }
  });
}

export default getPrescriptionsData;
