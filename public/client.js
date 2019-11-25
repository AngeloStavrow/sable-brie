const form = document.forms[0];
const input = form.elements["query"];

form.onsubmit = function(event) {
  event.preventDefault();

  const body = {
    query: input.value
  };

  fetch("/fetch-photo", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      replaceImage(data);
    })
    .catch(error => console.error(error));

  input.value = "";
  input.focus();
};

// Fetches the <section> node that contains the photo, clears it
// of any current photo and caption, and replaces it with the
// new photo and caption.
function replaceImage(data) {
  const photoSection = document.getElementById("photo");
  while (photoSection.firstChild) {
    photoSection.removeChild(photoSection.firstChild);
  }

  const newPhoto = document.createElement("img");

  newPhoto.src = data.data.urls.regular;
  newPhoto.alt = data.data.alt_description;
  newPhoto.classList.add("photo");

  photoSection.appendChild(newPhoto);

  const attribution = document.createElement("p");

  attribution.innerHTML = buildAttributionString(
    data.data.user.name,
    data.data.user.links.html,
    data.data.appName
  );
  attribution.classList.add("caption");

  photoSection.appendChild(attribution);
}

// Generates the caption containing attribution information and links,
// including any required UTM parameters.
function buildAttributionString(photogName, photogProfileLink, appName) {
  const utmParameters = "?utm_source=" + appName + "&utm_medium=referral";
  return (
    'Photo by <a href="' +
    photogProfileLink +
    utmParameters +
    '">' +
    photogName +
    '</a> on <a href="https://unsplash.com/' +
    utmParameters +
    '">Unsplash</a>'
  );
}
