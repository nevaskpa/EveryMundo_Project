export function compareCountriesAsc(a, b) {
  const itemA = a.country.toUpperCase();
  const itemB = b.country.toUpperCase();

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
}

export function compareCountriesDesc(a, b) {
  const itemA = a.country.toUpperCase();
  const itemB = b.country.toUpperCase();

  let comparison = 0;
  if (itemB > itemA) {
    comparison = 1;
  } else if (itemB < itemA) {
    comparison = -1;
  }
  return comparison;
}

export function compareCurrenciesAsc(a, b) {
  const itemA = a.currency.toUpperCase();
  const itemB = b.currency.toUpperCase();

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
}

export function compareCurrenciesDesc(a, b) {
  const itemA = a.currency.toUpperCase();
  const itemB = b.currency.toUpperCase();
  let comparison = 0;
  if (itemB > itemA) {
    comparison = 1;
  } else if (itemB < itemA) {
    comparison = -1;
  }
  return comparison;
}
