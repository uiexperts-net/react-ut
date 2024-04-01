
const fetchUserAPI = async () => {
    const response = await fetch('http://localhost/api/user');
    const data = await response.json();
    return data;
}

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        // Simulating an async response for fetch User
        setTimeout(() => {
            const success = true; // Simulated success status

            if (success) {
                // Resolve the promise if the task is successful
                resolve({ name: 'TestUser', contactNo: 4503430342 });
            } else {
                // Reject the promise if the task fails
                reject("Error: Unable to fetch data");
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
}

export const processUserData = async () => {
    const userData = await fetchUser()
    return userData;
}

export const processUserDataWithAPI = async () => {
    const userData = await fetchUserAPI()
    return userData;
}

export const processUserDataWithCallback = (cbFunc) => {    
    setTimeout(() => {
        cbFunc('SUCCESS', { name: 'TestUser', contactNo: 4503430342 })
    }, 1000);
    fetchUser()
}