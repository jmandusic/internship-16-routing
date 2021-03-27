export const fetchDigimons = () =>
  fetch("http://localhost:5000/digimons").then((response) => {
    return response.json();
  });

export const fetchDigimon = (id) =>
  fetch(`http://localhost:5000/digimons/${id}`).then((response) => {
    return response.json();
  });

export const createDigimon = (digimon) =>
  fetch("http://localhost:5000/digimons", {
    method: "POST",
    body: JSON.stringify(digimon),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());

export const updateDigimon = (digimon, id) =>
  fetch(`http://localhost:5000/digimons/${id}`, {
    method: "PUT",
    body: JSON.stringify(digimon),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());

export const deleteDigimon = (digimon) =>
  fetch(`http://localhost:5000/digimons/${digimon.id}`, {
    method: "DELETE",
    body: JSON.stringify(digimon),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());