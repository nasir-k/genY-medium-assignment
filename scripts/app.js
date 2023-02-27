const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");
const registerBtn = document.getElementById("rg-btn");
const genderSelect = document.getElementById("gender-select");

const generateYears = () => {
  const currentYear = new Date().getFullYear();

  for (let i = currentYear; i >= currentYear - 70; i--) {
    let option = document.createElement("option");
    option.value = i.toString();
    option.text = i.toString();
    yearSelect.add(option);
  }
};

const generateMonths = () => {
  for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.value = i < 10 ? "0" + i : i.toString();
    option.text = i < 10 ? "0" + i : i.toString();
    monthSelect.add(option);
  }
};

const generateDays = () => {
  const year = yearSelect.value;
  const month = monthSelect.value;

  daySelect.innerHTML = "<option value=''>Day</option>";

  if (year !== "" && month !== "") {
    let numDays = new Date(year, month, 0).getDate();

    for (let i = 1; i <= numDays; i++) {
      var option = document.createElement("option");
      option.value = i < 10 ? "0" + i : i.toString();
      option.text = i.toString();
      daySelect.add(option);
    }
  }
};

const calculateAge = (birthday) => {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const registerFormHandler = () => {
  const year = yearSelect.value;
  const month = monthSelect.value;
  const day = daySelect.value;
  const gender = genderSelect.value;

  if (year !== "" && month !== "" && day !== "") {
    const date = year + "-" + month + "-" + day;
    const age = calculateAge(date);
    if (
      (age >= 21 && gender === "male") ||
      (gender === "female" && age >= 18)
    ) {
      window.location.href = "home.html";
    } else {
      alert(
        " 'Age' should be 18+ for female and for male 'Age' should be 21+ "
      );
    }
  }
};

yearSelect.addEventListener("change", generateDays);
window.addEventListener("load", generateYears);
monthSelect.addEventListener("change", generateDays);
window.addEventListener("load", generateMonths);
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registerFormHandler();
});
