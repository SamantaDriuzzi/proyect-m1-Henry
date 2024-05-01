
//actividad 1
const activityRepository = new Repository();

//actividad 2
function generarHTML(activity) {
  const { title, description, imgUrl } = activity;

  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;
  titleElement.classList.add("titleCard");
  //primera letra en mayuscula
  titleElement.innerHTML = title.charAt(0).toUpperCase() + title.slice(1);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;
  descriptionElement.classList.add("descriptionCard");
  descriptionElement.innerHTML =
    description.charAt(0).toUpperCase() + description.slice(1);

  const imageElement = document.createElement("img");
  imageElement.src = imgUrl;
  imageElement.alt = title;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Eliminar";
  deleteButton.addEventListener("click", () => eliminarActividad(activity.id));

  const activityCard = document.createElement("div");
  activityCard.classList.add("tarjeta");
  activityCard.appendChild(titleElement);
  activityCard.appendChild(imageElement);
  activityCard.appendChild(descriptionElement);
  activityCard.appendChild(deleteButton);

  return activityCard;
}

//actividad 3
function agregarInstanciaAlContenedor() {
  const activitiesContainer = document.getElementById("actividadesContainer");
  activitiesContainer.innerHTML = "";

  const activities = activityRepository.getAllActivities();

  const activityElements = activities.map((activity) => generarHTML(activity));
  activityElements.forEach((activityElement) =>
    activitiesContainer.appendChild(activityElement)
  );
}

//actividad 4
function agregarActividadHandler() {
  const titleInput = document.getElementById("nombre");
  const descriptionInput = document.getElementById("descripcion");
  const imgUrlInput = document.getElementById("imagen");

  title = titleInput.value;
  description = descriptionInput.value;
  imgUrl = imgUrlInput.value;

  if (!title || !description || !imgUrl) {
    return alert("Por favor, completa todos los campos");
  } else {
    activityRepository.createActivity(title, description, imgUrl);
    agregarInstanciaAlContenedor();

    titleInput.value = "";
    descriptionInput.value = "";
    imgUrlInput.value = "";
  }
}

//actividad 5
const addActividadButton = document.getElementById("agregarBtn");
addActividadButton.addEventListener("click", agregarActividadHandler);

// Extra
function eliminarActividad(id) {
  activityRepository.deleteActivity(id);
  agregarInstanciaAlContenedor();
}

