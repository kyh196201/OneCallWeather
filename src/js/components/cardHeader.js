const cardHeader = (data) => {
  return `
  <header class="card__header">
    <div class="card__location">
      <h2 class="card__city">${data.city}</h2>
      <div class="card__country">${data.country}</div>
    </div>
  </header>`;
};

export default cardHeader;
