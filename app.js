fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const projectsContainer = document.getElementById('projects');

    // loop through each project and create a card for it
    projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = project.image;
      image.alt = project.name;
      card.appendChild(image);

      const title = document.createElement('h2');
      title.textContent = project.name;
      card.appendChild(title);

      const description = document.createElement('p');
      description.textContent = project.description;
      card.appendChild(description);

      const pricing = document.createElement('div');
      pricing.classList.add('pricing');
      pricing.textContent = project.pricing;
      card.appendChild(pricing);

      projectsContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));
