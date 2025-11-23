/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

/* STEP 3a: Create the asynchronous function populate() */
async function populate() {

    /* STEP 4: Store the URL of a JSON file in a variable */
    const requestURL = 'js/i-scream.json';

    /* STEP 5: Use the new URL to create a new request object */
    const request = new Request(requestURL);

    /* STEP 6: Make a network request with the fetch() function */
    const response = await fetch(request);

    /* STEP 7: Capture the returned Response object and convert to JSON */
    const iScream = await response.json();

    /* STEP 8: Output the iScream JSON object to the console */
    console.log(iScream);

    populateHeader(iScream);
    showTopFlavors(iScream);
}

/* STEP 9: Builds the header section */
function populateHeader(obj) {
    const h1 = document.createElement('h1');
    h1.textContent = obj.companyName;

    const para = document.createElement('p');
    para.textContent = `Head Office: ${obj.headOffice} — Est. ${obj.established}`;

    header.appendChild(h1);
    header.appendChild(para);
}

/* STEP 10: Builds the flavour cards */
function showTopFlavors(obj) {
    const flavors = obj.topFlavors;

    for (const flavour of flavors) {
        /* STEP 10a:Create ARTICLE, H2, IMAGE, and PARAGRAPHS */
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const typePara = document.createElement('p');
        const calPara = document.createElement('p');

        /* STEP 10b: Add text values */
        h2.textContent = flavour.name;
        typePara.textContent = `Type: ${flavour.type}`;
        calPara.textContent = `Calories: ${flavour.calories}`;

        /* STEP 10c: Add image attributes */
        img.setAttribute('src', `images/${flavour.image}`);
        img.setAttribute('alt', flavour.name);

        /* STEP 10h: Append elements to ARTICLE */
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(typePara);
        article.appendChild(calPara);

        /* STEP 10i: Append ARTICLE to SECTION */
        section.appendChild(article);
    }
}

/* STEP 11 + 12: Call the function */
populate();
