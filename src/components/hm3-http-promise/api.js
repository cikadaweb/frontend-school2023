const apiUrl = "http://45.12.239.156:8081/api";
import axios from "axios";

async function getToken() {
  const credentials = {
    login: "garipov.a",
    password: "jc63fk",
  };

  try {
    const response = await fetch(apiUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    localStorage.setItem("token", data.token);
  } catch (error) {
    throw error;
  }
}

function sendRequestXML(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, apiUrl + url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    if (body) {
      xhr.send(JSON.stringify(body));
    } else {
      xhr.send();
    }
  });
}

async function sendRequestFetch(url, { method, body }) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  try {
    const response = await fetch(apiUrl + url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function sendRequestAxios(url, method, body) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  try {
    const response = await axios({
      method: method,
      url: apiUrl + url,
      data: body,
      headers: headers,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

export { getToken, sendRequestXML, sendRequestFetch, sendRequestAxios };
