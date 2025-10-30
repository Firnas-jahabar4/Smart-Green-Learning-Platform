// // 🌿 Profile dropdown setup
// const profileBtn = document.getElementById("profileBtn");
// const dropdownMenu = document.getElementById("dropdownMenu");

// // 🟢 User data from localStorage
// let userData = {
//   name: localStorage.getItem("userName") || "Swetha",
//   email: localStorage.getItem("userEmail") || "swetha@gmail.com",
//   marks: parseInt(localStorage.getItem("userMarks")) || 0,
//   enrolledCourses: parseInt(localStorage.getItem("enrolledCount")) || 0,
//   completedCourses: parseInt(localStorage.getItem("completedCount")) || 0,
// };

// // 🌿 Update profile data
// function updateProfileData() {
//   document.getElementById("pName").textContent = userData.name;
//   document.getElementById("pEmail").textContent = userData.email;
//   document.getElementById("pMark").textContent = userData.marks;
//   document.getElementById("pEnroll").textContent = userData.enrolledCourses;
//   document.getElementById("pComplete").textContent = userData.completedCourses;

//   localStorage.setItem("userName", userData.name);
//   localStorage.setItem("userEmail", userData.email);
//   localStorage.setItem("userMarks", userData.marks);
//   localStorage.setItem("enrolledCount", userData.enrolledCourses);
//   localStorage.setItem("completedCount", userData.completedCourses);
// }

// // 🌿 Dropdown toggle
// profileBtn.addEventListener("click", () => {
//   dropdownMenu.classList.toggle("show");
// });

// window.addEventListener("click", (e) => {
//   if (!e.target.closest(".profile-menu")) dropdownMenu.classList.remove("show");
// });

// // 🌿 Section switching
// function showSection(sectionId) {
//   document.querySelectorAll(".section").forEach((sec) => sec.classList.add("hidden"));
//   document.getElementById(sectionId).classList.remove("hidden");
// }

// // 🌿 Green Skill Courses (Inspired by UN SDGs)
// const courses = [
//   {
//     title: "🌱 Sustainable Living Basics",
//     desc: "Learn eco-friendly habits to reduce waste and energy use.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
//   },
//   {
//     title: "💧 Clean Water & Sanitation",
//     desc: "Understand water conservation and safe sanitation systems.",
//     duration: "2.5 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/2913/2913461.png",
//   },
//   {
//     title: "☀️ Renewable Energy",
//     desc: "Discover solar, wind, and hydro technologies for a clean future.",
//     duration: "3 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/1048/1048317.png",
//   },
//   {
//     title: "🌾 Sustainable Agriculture",
//     desc: "Explore organic farming and smart irrigation practices.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/4248/4248564.png",
//   },
//   {
//     title: "🏙️ Smart Cities & Communities",
//     desc: "Learn how cities can become more eco-efficient and livable.",
//     duration: "3 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/3076/3076616.png",
//   },
//   {
//     title: "🌍 Climate Action Awareness",
//     desc: "Understand global warming, its effects, and how to act locally.",
//     duration: "3 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/2072/2072130.png",
//   },
//   {
//     title: "🌿 Green Entrepreneurship",
//     desc: "Build eco-based business ideas that promote sustainability.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/4472/4472974.png",
//   },
//   {
//     title: "♻️ Waste Management",
//     desc: "Learn how to recycle, upcycle, and manage e-waste effectively.",
//     duration: "1.5 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
//   },
//   {
//     title: "🐝 Biodiversity & Ecosystems",
//     desc: "Protect nature and understand ecosystem balance.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/2913/2913692.png",
//   },
//   {
//     title: "🌊 Life Below Water",
//     desc: "Learn ocean conservation and marine ecosystem protection.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/2098/2098315.png",
//   },
//   {
//     title: "🌳 Life on Land",
//     desc: "Explore forest preservation and wildlife protection methods.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/1046/1046869.png",
//   },
//   {
//     title: "⚖️ Peace, Justice & Institutions",
//     desc: "Learn about fairness, equality, and sustainable governance.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/1038/1038152.png",
//   },
//   {
//     title: "🧠 Green Technology Innovation",
//     desc: "Discover new tools that support clean and smart environments.",
//     duration: "3 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/3601/3601641.png",
//   },
//   {
//     title: "👩‍🎓 Quality Education for All",
//     desc: "Understand how education drives sustainable societies.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//   },
//   {
//     title: "💡 Affordable & Clean Energy",
//     desc: "Learn how energy access and efficiency support development.",
//     duration: "2 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
//   },
//   {
//     title: "🚲 Green Transportation",
//     desc: "Explore electric mobility and smart transport systems.",
//     duration: "1.5 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/2620/2620424.png",
//   },
//   {
//     title: "🤝 Partnerships for Goals",
//     desc: "Collaborate globally for a sustainable planet.",
//     duration: "1.5 hrs",
//     img: "https://cdn-icons-png.flaticon.com/512/2382/2382538.png",
//   },
// ];

// const courseList = document.getElementById("courseList");
// const enrolledList = document.getElementById("enrolledList");

// // 🌿 Render course cards
// function renderCourses() {
//   courseList.innerHTML = "";
//   courses.forEach((course) => {
//     const div = document.createElement("div");
//     div.classList.add("course-card");
//     div.innerHTML = `
//       <img src="${course.img}" alt="${course.title}">
//       <h3>${course.title}</h3>
//       <p>${course.desc}</p>
//       <p><small>⏰ Duration: ${course.duration}</small></p>
//       <button class="enroll-btn">Enroll</button>
//     `;
//     const btn = div.querySelector(".enroll-btn");
//     btn.addEventListener("click", () => {
//       if (btn.textContent === "Enroll") {
//         btn.textContent = "Unenroll";
//         enrollCourse(course.title);
//       } else {
//         btn.textContent = "Enroll";
//         unenrollCourse(course.title);
//       }
//     });
//     courseList.appendChild(div);
//   });
// }

// // /

// ==========================================================
// CORRECTED JAVASCRIPT - Copy all of this code
// ==========================================================

// 🌿 Profile dropdown setup
const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// 🟢 User data from localStorage
let userData = {
  name: localStorage.getItem("userName") || "Swetha",
  email: localStorage.getItem("userEmail") || "swetha@gmail.com",
  marks: parseInt(localStorage.getItem("userMarks")) || 0,
  enrolledCourses: parseInt(localStorage.getItem("enrolledCount")) || 0,
  completedCourses: parseInt(localStorage.getItem("completedCount")) || 0,
};

// 🌿 Update profile data
function updateProfileData() {
  document.getElementById("pName").textContent = userData.name;
  document.getElementById("pEmail").textContent = userData.email;
  document.getElementById("pMark").textContent = userData.marks;
  document.getElementById("pEnroll").textContent = userData.enrolledCourses;
  document.getElementById("pComplete").textContent = userData.completedCourses;

  localStorage.setItem("userName", userData.name);
  localStorage.setItem("userEmail", userData.email);
  localStorage.setItem("userMarks", userData.marks);
  localStorage.setItem("enrolledCount", userData.enrolledCourses);
  localStorage.setItem("completedCount", userData.completedCourses);
}

// 🌿 Dropdown toggle
profileBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".profile-menu")) dropdownMenu.classList.remove("show");
});

// 🌿 Section switching
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((sec) => sec.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}

// 🌿 Green Skill Courses (Inspired by UN SDGs)
const courses = [
  {
    title: "🌱 Sustainable Living Basics",
    desc: "Learn eco-friendly habits to reduce waste and energy use.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    title: "💧 Clean Water & Sanitation",
    desc: "Understand water conservation and safe sanitation systems.",
    duration: "2.5 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/6265/6265335.png",
  },
  {
    title: "☀️ Renewable Energy",
    desc: "Discover solar, wind, and hydro technologies for a clean future.",
    duration: "3 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/8724/8724839.png",
  },
  {
    title: "🌾 Sustainable Agriculture",
    desc: "Explore organic farming and smart irrigation practices.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/13518/13518370.png",
  },
  {
    title: "🏙️ Smart Cities & Communities",
    desc: "Learn how cities can become more eco-efficient and livable.",
    duration: "3 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/8001/8001987.png",
  },
  {
    title: "🌍 Climate Action Awareness",
    desc: "Understand global warming, its effects, and how to act locally.",
    duration: "3 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/2072/2072130.png",
  },
  {
    title: "🌿 Green Entrepreneurship",
    desc: "Build eco-based business ideas that promote sustainability.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/4472/4472974.png",
  },
  {
    title: "♻️ Waste Management",
    desc: "Learn how to recycle, upcycle, and manage e-waste effectively.",
    duration: "1.5 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/857/857681.png",
  },
  {
    title: "🐝 Biodiversity & Ecosystems",
    desc: "Protect nature and understand ecosystem balance.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913692.png",
  },
  {
    title: "🌊 Life Below Water",
    desc: "Learn ocean conservation and marine ecosystem protection.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/2098/2098315.png",
  },
  {
    title: "🌳 Life on Land",
    desc: "Explore forest preservation and wildlife protection methods.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/4350/4350287.png",
  },
  {
    title: "⚖️ Peace, Justice & Institutions",
    desc: "Learn about fairness, equality, and sustainable governance.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/1038/1038152.png",
  },
  {
    title: "🧠 Green Technology Innovation",
    desc: "Discover new tools that support clean and smart environments.",
    duration: "3 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/3601/3601641.png",
  },
  {
    title: "👩‍🎓 Quality Education for All",
    desc: "Understand how education drives sustainable societies.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "💡 Affordable & Clean Energy",
    desc: "Learn how energy access and efficiency support development.",
    duration: "2 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
  {
    title: "🚲 Green Transportation",
    desc: "Explore electric mobility and smart transport systems.",
    duration: "1.5 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/2620/2620424.png",
  },
  {
    title: "🤝 Partnerships for Goals",
    desc: "Collaborate globally for a sustainable planet.",
    duration: "1.5 hrs",
    img: "https://cdn-icons-png.flaticon.com/512/2382/2382538.png",
  },
];

const courseList = document.getElementById("courseList");
const enrolledList = document.getElementById("enrolledList");

// 🌿 Render course cards
function renderCourses() {
  courseList.innerHTML = "";
  courses.forEach((course) => {
    const div = document.createElement("div");
    div.classList.add("course-card");
    div.innerHTML = `
      <img src="${course.img}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>${course.desc}</p>
      <p><small>⏰ Duration: ${course.duration}</small></p>
      <button class="enroll-btn">Enroll</button>
    `;
    const btn = div.querySelector(".enroll-btn");
    btn.addEventListener("click", () => {
      if (btn.textContent === "Enroll") {
        btn.textContent = "Unenroll";
        // Pass the image URL also
        enrollCourse(course.title, course.img); 
      } else {
        btn.textContent = "Enroll";
        unenrollCourse(course.title);
      }
    });
    courseList.appendChild(div);
  });
}

// 🌿 Enroll / Unenroll
// Pass 'courseImg' from the original course object
function enrollCourse(courseTitle, courseImg) { 
  const alreadyEnrolled = [...enrolledList.children].some((child) =>
    child.textContent.includes(courseTitle)
  );
  if (alreadyEnrolled) return;

  const enrolledItem = document.createElement("div");
  enrolledItem.classList.add("course-card");

  // -----------------------------------------------------------------
  // ✅ *** THE FIX IS HERE ***
  // 1. Use the correct 'courseImg' variable
  // 2. Change onclick to call 'redirectToChatbot'
  // -----------------------------------------------------------------
  enrolledItem.innerHTML = `
    <img src="${courseImg}" alt="${courseTitle}">
    <h3>${courseTitle}</h3>
    <button class="start-btn" onclick="redirectToChatbot('${courseTitle}')">Start Learning 🚀</button>
  `;
  enrolledList.appendChild(enrolledItem);

  userData.enrolledCourses++;
  updateProfileData();
}

function unenrollCourse(course) {
  [...enrolledList.children].forEach((child) => {
    if (child.textContent.includes(course)) child.remove();
  });
  if (userData.enrolledCourses > 0) userData.enrolledCourses--;
  updateProfileData();
}

// -----------------------------------------------------------------
// ✅ *** THE CORRECT FUNCTION TO START THE CHATBOT ***
// -----------------------------------------------------------------
/**
* This function redirects to the Streamlit app and passes the
* course title as a URL parameter.
*/
function redirectToChatbot(courseTitle) {
    console.log("Redirecting to Streamlit for lesson:", courseTitle);

    // This is your Streamlit app's URL
    const streamlitAppUrl = "http://localhost:8501"; 

    // This cleans up the title so it's safe for a URL
    const encodedTitle = encodeURIComponent(courseTitle);

    // This line does the redirect to your chatbot
    window.location.href = `${streamlitAppUrl}/?course=${encodedTitle}`;
}

// 🌿 Init
renderCourses();
updateProfileData();
