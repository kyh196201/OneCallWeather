const cardHeader = (data) => {
  // Data Validation
  // const { city, country } = data;

  return `
  <header class="card__header">
    <div class="card__location">
      <h2 class="card__city">Seoul</h2>
      <div class="card__country">Kr</div>
    </div>
  </header>`;
};

export default cardHeader;
