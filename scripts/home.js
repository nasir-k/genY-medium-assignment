const education = document.getElementById("education");
const addEducationBtn = document.getElementById("add-education-btn");
const educations = document.getElementsByClassName("selections");

const deleteEducationHandler = (id, div) => {
  console.log(id, educations.length);
  for (let i = 0; i < educations.length; i++) {
    if (educations[i].id === id) {
      education.removeChild(div);
    }
  }
};

const addEducationHandler = () => {
  console.log("add education clicked");
  const educationDiv = document.createElement("div");
  educationDiv.className = "selections";
  educationDiv.id = `${Math.random()}`;

  educationDiv.innerHTML = `
  <select name="education" id="">
    <option value="graduate">Graduate</option>
  </select>
  <input type="text" placeholder="Name of College/University" />
  <select name="specialization" id="">
    <option value="specialization">Specialization</option>
  </select>
  <input type="text" placeholder="Other (Specialization)" />
  <img id="delete-education" src="assets/images/deleteIcon.png" alt="" />
`;

  education.append(educationDiv);

  const deleteEducation = document.getElementById("delete-education");
  deleteEducation.addEventListener("click", () => {
    deleteEducationHandler(educationDiv.id, educationDiv);
  });
};

addEducationBtn.addEventListener("click", addEducationHandler);
