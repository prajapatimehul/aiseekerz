fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const projectsContainer = document.getElementById('projects');
    
    // loop through each project and create a card for it
    projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('card');

      // const image = document.createElement('img');
      // image.src = project.image;
      // image.alt = project.name;
      // card.appendChild(image);

      const title = document.createElement('h2');
      title.textContent = project.name;
      card.appendChild(title);

      const description = document.createElement('p');
      description.textContent = project.description;
      card.appendChild(description);
      





      // const button = document.createElement('button'); // create a button element
      // button.textContent = 'Visit Site'; // set the text content of the button
      // button.addEventListener('click', function() { // add a click event listener to the button
      //   window.location.href = project.link; // navigate to the project link when the button is clicked
      // });
      // card.appendChild(button); // add tprojecthe button to the card element
      

      const button = document.createElement('button'); // create a button element
      button.textContent = 'Vsit Site'; // set the text content of the button
      button.style.backgroundColor = 'blue'; // set the background color of the button
      button.style.color = 'white'; // set the text color of the button
      button.style.padding = '10px 20px'; // set the padding of the button
      button.style.fontWeight = 'bold';
      button.style.fontSize = '17px';
      button.style.border = 'none'; // remove the border of the button
      button.style.borderRadius = '5px'; // set the border radius of the button
      button.style.cursor = 'pointer';
      button.addEventListener('click', function() { // add a click event listener to the button
        window.location.href = project.link; // navigate to the project link when the button is clicked
      });
      card.appendChild(button); // add the button to the card element
      
      
      const pricing = document.createElement('div');
      pricing.classList.add('pricing');
      pricing.textContent = project.pricing;
      card.appendChild(pricing);

      projectsContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));
