const catalog = document.querySelector('#catalog');

if (catalog) {
  const filters = catalog.querySelector('.filters');
  const search = catalog.querySelector('#search');
  const series = catalog.querySelector('#series');
  const cards = [...catalog.querySelectorAll('.card')];
  const count = catalog.querySelector('#count');
  const empty = catalog.querySelector('#empty');

  const normalize = (value) => value.normalize('NFKC').toLowerCase();

  function applyFilters() {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const card of cards) {
      const matchesSeries = !series.value || card.dataset.series === series.value;
      const index = normalize(card.dataset.search);
      card.hidden = !matchesSeries || !terms.every((term) => index.includes(term));
      if (!card.hidden) visible += 1;
    }
    count.textContent = `${visible} 款球鞋`;
    empty.hidden = visible > 0;
  }

  search.addEventListener('input', applyFilters);
  series.addEventListener('change', applyFilters);
  catalog.querySelector('#clear').addEventListener('click', () => {
    search.value = '';
    series.value = '';
    applyFilters();
    search.focus();
  });
  filters.hidden = false;
  applyFilters();
}

for (const photo of document.querySelectorAll('.plate img')) {
  const showPhoto = () => {
    if (photo.naturalWidth) photo.closest('.plate').classList.add('has-image');
  };
  photo.addEventListener('load', showPhoto, { once: true });
  if (photo.complete) showPhoto();
}
