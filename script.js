// Variables
const all = document.querySelector(".jsAll");
const active = document.querySelector(".jsActive");
const inactive = document.querySelector(".jsInactive");
const extensionsList = document.querySelector(".jsExtensions");

let extensions = [
  {
    img: "./images/logo-devlens.svg",
    name: "DevLens",
    text: "Quickly inspect page layouts and visualize element boundaries.",
  },
  {
    img: "./images/logo-style-spy.svg",
    name: "StyleSpy",
    text: "Instantly analyze and copy CSS from any webpage element.",
  },
  {
    img: "./images/logo-speed-boost.svg",
    name: "SpeedBoost",
    text: "Optimizes browser resource usage to accelerate page loading.",
  },
  {
    img: "./images/logo-grid-guides.svg",
    name: "GridGuides",
    text: "Overlay customizable grids and alignment guides on any webpage.",
  },
  {
    img: "./images/logo-json-wizard.svg",
    name: "JSONWizard",
    text: "Formats, validates, and prettifies JSON responses in-browser.",
  },
  {
    img: "./images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    text: "Organizes browser tabs into groups and sessions.",
  },
  {
    img: "./images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    text: "Simulates various screen resolutions directly within the browser.",
  },
  {
    img: "./images/logo-markup-notes.svg",
    name: "Markup Notes",
    text: "Enables annotation and notes directly onto webpages for collaborative debugging.",
  },
  {
    img: "./images/logo-palette-picker.svg",
    name: "Palette Picker",
    text: "Instantly extracts color palettes from any webpage.",
  },
  {
    img: "./images/logo-link-checker.svg",
    name: "LinkChecker",
    text: "Scans and highlights broken links on any page.",
  },
  {
    img: "./images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    text: "Capture and export DOM structures quickly.",
  },
  {
    img: "./images/logo-console-plus.svg",
    name: "ConsolePlus",
    text: "Enhanced developer console with advanced filtering and logging.",
  },
];

// Creates/displays extension elements
function createExtensionList() {
  extensions.forEach((item) => {
    // Create elements
    let extension = document.createElement("div");
    let info = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("div");
    let h2 = document.createElement("h2");
    let paragraph = document.createElement("p");
    let actions = document.createElement("div");
    let removeBtn = document.createElement("button");
    let activeBtn = document.createElement("button");

    // Add classes
    extension.classList.add("extension", "neutral-8-bg");
    info.classList.add("info");
    img.setAttribute("aria-hidden", "true");
    text.classList.add("text");
    h2.classList.add("tp-2", "neutral-1");
    paragraph.classList.add("tp-5", "neutral-4");
    actions.classList.add("actions");
    removeBtn.classList.add("tp-6", "neutral-1", "remove-btn");
    activeBtn.classList.add("active-btn", "red-1-bg", "jsActiveBtn");

    img.src = `${item.img}`;
    h2.textContent = `${item.name}`;
    paragraph.textContent = `${item.text}`;
    removeBtn.textContent = `Remove`;

    // Append together
    actions.append(removeBtn, activeBtn);
    text.append(h2, paragraph);
    info.append(img, text);
    extension.append(info, actions);

    // Add to page
    extensionsList.append(extension);

    // Toggles extension active/inactive
    activeBtn.addEventListener("click", () => {
      activeBtn.classList.toggle("active-btn-toggle");
    });

    // Removes extension
    removeBtn.addEventListener("click", () => {
      removeBtn.parentElement.parentElement.remove();
    });
  });
}

// Load extension list on load
createExtensionList();

// Displays all extensions
all.addEventListener("click", () => {
  activeBtns.forEach((btn) => {
    btn.parentElement.parentElement.style.display = "flex";
  });
});

// Active toggle buttons
const activeBtns = document.querySelectorAll(".jsActiveBtn");

// Display only active extensions
active.addEventListener("click", () => {
  activeBtns.forEach((btn) => {
    btn.parentElement.parentElement.style.display = "flex";
  });
  activeBtns.forEach((btn) => {
    let bgColor = getComputedStyle(btn).getPropertyValue("background-color");
    if (bgColor !== "rgb(199, 35, 26)") {
      btn.parentElement.parentElement.style.display = "none";
    }
  });
});

// Display only inactive extensions
inactive.addEventListener("click", () => {
  activeBtns.forEach((btn) => {
    btn.parentElement.parentElement.style.display = "flex";
  });
  activeBtns.forEach((btn) => {
    let bgColor = getComputedStyle(btn).getPropertyValue("background-color");
    if (bgColor !== "rgb(198, 198, 198)") {
      btn.parentElement.parentElement.style.display = "none";
    }
  });
});
