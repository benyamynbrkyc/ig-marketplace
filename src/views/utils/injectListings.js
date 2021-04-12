import firebase from 'firebase';

const sampleListings = [
  {
    idUsername: 'trkvlc',
    category: 'Fitness & Sports',
    description: 'Ma ide gas i kurcenje',
    noOfFollowers: 1000,
    noOfPosts: 30,
    ownerEmail: 'tarrik.velic@hotmail.com',
    ownerUsername: 'tarikvelic',
    price: 350,
    reach: 1000,
    username: 'trkvlc',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/163643433_4180274821984624_1424350226902148802_n.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=uDf-BhbgXM8AX-65faI&ccb=7-4&oh=4e699e9c5e69a4876a07b164d165b9ab&oe=608C29E7&_nc_sid=276363',
    dateCreated: Date.now() - 1,
  },
  {
    idUsername: 'harun_cakrama',
    category: 'Fitness & Sports',
    description: 'Jebem ti mater',
    noOfFollowers: 500,
    noOfPosts: 9,
    ownerEmail: 'hcakrama@gmail.com',
    ownerUsername: 'haruncaki',
    price: 250,
    reach: 400,
    username: 'harun_cakrama',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120313940_806933846709162_3107486086039137085_n.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=FcjtMgpc0TEAX_LK0E-&ccb=7-4&oh=d4bf22dde37da41b39e37aee34ef1825&oe=608E8D8A&_nc_sid=7bff83',
    dateCreated: Date.now() - 2,
  },
  {
    idUsername: 'danis3.14',
    category: 'Educational & QA',
    description: 'Jesil ti glup?',
    noOfFollowers: 300,
    noOfPosts: 2,
    ownerEmail: 'danis.3.14@hotmail.com',
    ownerUsername: 'danisbradaric',
    price: 200,
    reach: 399,
    username: 'danis3.14',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95441099_525800091447407_538176500453605376_n.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=a6RR3oQGCy4AX9LDhh-&ccb=7-4&oh=91197a6cb33895f538a0b3e8bda6a993&oe=608C4DD1&_nc_sid=7bff83',
    dateCreated: Date.now() - 3,
  },
  {
    idUsername: 'cattaa_0',
    category: 'Business & Brand',
    description: 'A bukvalno nije',
    noOfFollowers: 700,
    noOfPosts: 10,
    ownerEmail: 'kenocatakenocata@icloud.com',
    ownerUsername: 'kenocata',
    price: 400,
    reach: 500,
    username: 'cattaa_0',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117809938_2673553326226334_5133065842270859463_n.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=7Khx9UlWP9gAX8_Bwlk&ccb=7-4&oh=d4d3ab42e3c190bee5fa2f0bc3921250&oe=608E4EA1&_nc_sid=7bff83',
    dateCreated: Date.now() - 4,
  },
  {
    idUsername: 'gracicfaris18',
    category: 'Gaming & Entertaiment',
    description: 'Mamicu ti',
    noOfFollowers: 900,
    noOfPosts: 15,
    ownerEmail: 'cvaja@gmail.com',
    ownerUsername: 'cvaja',
    price: 400,
    reach: 1000,
    username: 'gracicfaris18',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/39047499_445932895893871_3662294681741426688_n.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=cgJcegkI93QAX8FaGeH&ccb=7-4&oh=a5c27c0ab58eb70ea4a0c210423c72c1&oe=608DD7DC&_nc_sid=7bff83',
    dateCreated: Date.now() - 5,
  },
  {
    idUsername: 'osmanh',
    category: 'Cars & Bikes',
    description: 'Da vidis ove cure',
    noOfFollowers: 900,
    noOfPosts: 8,
    ownerEmail: 'osmanh@gmail.com',
    ownerUsername: 'osmihadzi',
    price: 800,
    reach: 900,
    username: 'osmanh',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/121673758_353840222730375_172901903553552713_n.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=nht38-9bV2cAX--zMDx&ccb=7-4&oh=940c47f458e0fd28e8052c9fd72fc343&oe=608B4499&_nc_sid=7bff83',
    dateCreated: Date.now() - 6,
  },
  {
    idUsername: 'benjenzi',
    category: 'Educational & QA',
    description: 'Azra dje si',
    noOfFollowers: 300,
    noOfPosts: 2,
    ownerEmail: 'benjenzi@hotmail.com',
    ownerUsername: 'benjouzun',
    price: 200,
    reach: 500,
    username: 'benjenzi',
    avatar:
      'https://scontent-otp1-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_ohc=mhDR9_0DpXIAX8IQwPB&ccb=7-4&oh=41de40d4433df2a05562bf63f325d69f&oe=608B680F&_nc_sid=276363&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4',
    dateCreated: Date.now() - 7,
  },
  {
    idUsername: 'tarik_suljakovic',
    category: 'Humor & Memes',
    description:
      'Mi se dobro nazvizgali poslije dobrog gostovanja prosle sedmice',
    noOfFollowers: 600,
    noOfPosts: 15,
    ownerEmail: 'tarik_mini@hotmail.com',
    ownerUsername: 'tarikmini',
    price: 300,
    reach: 500,
    username: 'tarik_suljakovic',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117686786_2780932735562551_711989335433193918_n.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=KpOE-cgnicUAX99oA1n&ccb=7-4&oh=600cd53ff249820d48bb7ba46dac4c37&oe=608D98E9&_nc_sid=7bff83',
    dateCreated: Date.now() - 8,
  },
  {
    idUsername: 'b.farieed',
    category: 'Art & Design',
    description: 'A jel majke ti?',
    noOfFollowers: 700,
    noOfPosts: 10,
    ownerEmail: 'frummond@gmail.com',
    ownerUsername: 'ridfa',
    price: 600,
    reach: 800,
    username: 'b.farieed',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/156177107_488383579201969_7564139539434302884_n.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=6dZXt3fP87wAX8XS-Ga&ccb=7-4&oh=f1103ea3e4777e4a107154697ab48709&oe=608DA8AC&_nc_sid=7bff83',
    dateCreated: Date.now() - 9,
  },
  {
    idUsername: 'omardelic4',
    category: 'Food & Nutrition',
    description:
      'Volim boginju  ernu i sve bi dao za nju istog momenta odmah sad, samra glupa 1234',
    noOfFollowers: 600,
    noOfPosts: 12,
    ownerEmail: 'omardelic4@gmail.com',
    ownerUsername: 'zela',
    price: 700,
    reach: 800,
    username: 'omardelic4',
    avatar:
      'https://instagram.ftzl2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/15043861_1830360057205115_4180146275963895808_a.jpg?tp=1&_nc_ht=instagram.ftzl2-1.fna.fbcdn.net&_nc_ohc=5eE3ynm5HmcAX_KT-Mg&ccb=7-4&oh=096ed1f17a50738f47616d2281f27e70&oe=608E3BED&_nc_sid=7bff83',
    dateCreated: Date.now() - 10,
  },
];

const firestore = firebase.firestore();

const loadSampleData = () => {
  sampleListings.forEach(listing => {
    firestore.doc(`/allListings/${listing.idUsername}`).set({
      ...listing,
    });
  });
};

export default loadSampleData;
