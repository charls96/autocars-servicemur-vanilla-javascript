const divCars = document.querySelector('.show-cars');

document.addEventListener("DOMContentLoaded", () => {
  showCars(cars);
});


function showCars(cars) {
  
  cars.forEach(car => {
    const carHTML = document.createElement('div');
    let imgsDivs = '';
    const imgs = Object.values(car.imgs).forEach( img => {
      imgsDivs += `<div>
      <img class="rounded-t" src="${img}" alt="">
    </div>`;
    });

    carHTML.innerHTML = `
    <div class="shadow-2xl rounded bg-white mb-8">
    <div class="glider-contain">
      <div class="glider">
      `  + imgsDivs +
      `
      </div>

      <button aria-label="Previous" class="glider-prev top-24 left-0.5"><svg style="transform: rotate(180deg);"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em"
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path fill="black"
            d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z" />
        </svg></button>
      <button aria-label="Next" class="glider-next top-24 right-0.5"><svg xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24">
          <path fill="black"
            d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z" />
        </svg></button>
      <div role="tablist" class="dots"></div>
    </div>
    <p class="mt-2 text-xs text-gray-600 flex justify-around">
      <span class="bg-gray-200 rounded-full px-1.5">${car.mileage} kms</span><span
        class="bg-gray-200 rounded-full px-1.5">${car.year}</span><span
        class="bg-gray-200 rounded-full px-1.5">${car.gear}</span><span class="bg-gray-200 rounded-full px-1.5">5
        puertas</span><span class="bg-gray-200 rounded-full px-1.5">${car.hp} cv</span>
    </p>
    <h2 class="text-center text-2xl my-2 font-semibold text-gray-800">
      ${car.brand} ${car.model}
    </h2>
    <div class="flex justify-between mx-2">
      <p class="flex items-center gap-1 text-gray-600">
        <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fill="gray" fill-rule="evenodd" clip-rule="evenodd"
            d="M8 0a6.667 6.667 0 0 0-6.667 6.667c0 2.247 1.202 4.45 3.183 6.542a20.753 20.753 0 0 0 2.499 2.234l.337.25.278.195c.224.15.516.15.74 0l.278-.195.337-.25a20.757 20.757 0 0 0 2.499-2.235c1.981-2.09 3.183-4.294 3.183-6.541A6.667 6.667 0 0 0 8 0Zm0 1.333a5.333 5.333 0 0 1 5.333 5.334c0 1.835-1.048 3.757-2.817 5.624a19.426 19.426 0 0 1-1.994 1.823l-.175.138-.347.263-.18-.134a19.43 19.43 0 0 1-2.336-2.09c-1.769-1.867-2.817-3.789-2.817-5.624A5.333 5.333 0 0 1 8 1.333ZM8 4a2.667 2.667 0 1 0 0 5.333A2.667 2.667 0 0 0 8 4Zm0 1.333A1.333 1.333 0 1 1 8 8a1.333 1.333 0 0 1 0-2.667Z">
          </path>
        </svg><span class="font-semibold">Murcia</span>
      </p>
      <p>
        <span class="text-gray-600">Telf: </span>
        <span class="font-semibold text-gray-600">717 71 73 35</span>
      </p>
    </div>
    <p class="text-sm px-4 py-2 text-gray-600">
      ${car.description}
    </p>
    <span class="text-red-600 font-bold flex justify-end mr-2 mb-2 text-2xl">${car.price}€</span>
  </div>
    `;
    divCars.appendChild(carHTML);
  });
}