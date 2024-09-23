import axios from "axios";

async function login() {
    try {
        const response = await axios.post("https://reqres.in/api/login", {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

login();
