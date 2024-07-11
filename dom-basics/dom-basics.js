const newParagraph = document.createElement("p");
newParagraph.innerText = "Added With Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const body = document.body;

const newSection = document.createElement("section");

const heading = document.createElement("h2");
heading.textContent = "DOM Basics";
newSection.appendChild(heading);

const paragraph = document.createElement("p");
paragraph.textContent = "This was added through Javascript";
newSection.appendChild(paragraph);

body.append(newSection);