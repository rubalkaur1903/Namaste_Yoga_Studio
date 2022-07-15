export const callApi = async ({ url, method, token, body }) => {
    try {
        const options = {
            method: method ? method.toUpperCase() : 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        };
        if (token) options.headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(`/api${url}`, options);
        const data = await response.json();
        if(data.error) {
             alert(data.error);
        }
        return data;
    } catch (error) {
        console.error(error)
    }
}