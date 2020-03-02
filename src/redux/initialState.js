const initialStoreData = {
  mode: '',
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'sofa',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: true,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 33,
      oldPrice: 22,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 40,
      oldPrice: 26,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'chair',
      price: 54,
      stars: 2,
      opinion: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: 15,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: true,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'table',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1537182534312-f945134cce34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: 26,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1551215717-8bc8cfe833ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 44,
      stars: 5,
      opinion: 1,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1538688693244-52ec576b70f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 1,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1567016507665-356928ac6679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'dining',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1506180879175-6a5eb3ab9b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 4,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1462212210333-335063b676bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1515378866965-f80dcd891c7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1511401139252-f158d3209c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 60,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.unsplash.com/photo-1512111468-477c8248162b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 40,
      oldPrice: 26,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compared: false,
      favourite: false,
      img:
        'https://images.pexels.com/photos/116907/pexels-photo-116907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'sofa',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'sofa',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'sofa',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'sofa',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'sofa',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'table',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'table',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/154161/pexels-photo-154161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'table',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'table',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'table',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'dining',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'dining',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'dining',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'dining',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'dining',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'dining',
      price: 30,
      promoPrice: 20,
      oldPrice: 28,
      stars: 2,
      opinion: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compared: false,
      favourite: true,
      img:
        'https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=12600',
    },
  ],
  cart: [],
  brands: [
    {
      index: 1,
      id: 'brand-1',
      name: 'brand 1',
      image: 'https://www.logologo.com/logos/g-logo.jpg',
    },
    {
      index: 2,
      id: 'brand-2',
      name: 'brand 2',
      image: 'https://www.logologo.com/logos/city-logo.jpg',
    },
    {
      index: 3,
      id: 'brand-3',
      name: 'brand 3',
      image: 'https://www.logologo.com/logos/red-s-logo.jpg',
    },
    {
      index: 4,
      id: 'brand-4',
      name: 'brand 4',
      image: 'https://www.logologo.com/logos/open-house-logo.jpg',
    },
    {
      index: 5,
      id: 'brand-5',
      name: 'brand 5',
      image: 'https://www.logologo.com/logos/letter-m-roof-logo.jpg',
    },
    {
      index: 6,
      id: 'brand-6',
      name: 'brand 6',
      image: 'https://www.logologo.com/logos/letter-a-circle-logo.jpg',
    },
    {
      index: 7,
      id: 'brand-7',
      name: 'brand 7',
      image: 'https://www.logologo.com/logos/color-spectrum-shield-logo.jpg',
    },
    {
      index: 8,
      id: 'brand-8',
      name: 'brand 8',
      image: 'https://www.logologo.com/logos/eagle-shield-logo.jpg',
    },
    {
      index: 9,
      id: 'brand-9',
      name: 'brand 9',
      image: 'https://www.logologo.com/logos/globe-compass-logo.jpg',
    },
    {
      index: 10,
      id: 'brand-10',
      name: 'brand 10',
      image: 'https://www.logologo.com/logos/lion-shield-logo.jpg',
    },
    {
      index: 11,
      id: 'brand-11',
      name: 'brand 11',
      image: 'https://www.logologo.com/logos/cartoon-rocket-logo.jpg',
    },
    {
      index: 12,
      id: 'brand-12',
      name: 'brand 12',
      image: 'https://www.logologo.com/logos/watercolor-tree-logo.jpg',
    },
  ],
  tabs: [
    { id: 'featured', name: 'Featured' },
    { id: 'topselller', name: 'Top seller' },
    { id: 'saleoff', name: 'Sale off' },
    { id: 'toprated', name: 'Top rated' },
  ],
  compare: [],
  currency: 'USD',
  avaibleCurrencies: ['USD', 'EUR', 'PLN'],
  currencyRates: {
    loading: {
      active: false,
      error: false,
      done: false,
    },
  },
  feedback: [
    {
      id: 1,
      opinion:
        'Very large selection of products and very helpful staff. Sufficient parking. Transportation can be ordered quickly and gentlemen did not even have a problem with twisting a few screws of the seat when bringing.',
      image:
        'https://gravatar.com/avatar/b71a53a1edd84a3efaec8e28150adc51?s=400&d=mp&r=x',
      name: 'John Smith',
      title: 'Futniture client',
    },
    {
      id: 2,
      opinion:
        'Everything your home soul desires! On customer service what some could work there!',
      image:
        'https://gravatar.com/avatar/b71a53a1edd84a3efaec8e28150adc51?s=400&d=mp&r=x',
      name: 'Marry Jane',
      title: 'Futniture client',
    },
    {
      id: 3,
      opinion:
        'Big nice store. You can decorate the house from furniture to all bathroom, kitchen and accessories. Miles for sale, worse when it comes to complaints, this is space.',
      image:
        'https://gravatar.com/avatar/b71a53a1edd84a3efaec8e28150adc51?s=400&d=mp&r=x',
      name: 'Peter Johnson',
      title: 'Futniture client',
    },
  ],
  search: {
    searchString: '',
    searchCategory: '',
  },
};

export default initialStoreData;
