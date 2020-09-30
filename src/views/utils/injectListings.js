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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116876795_740753583149859_7699774408809685243_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=Ub05rKuamwUAX9fq8U4&oh=c44fde42e713b8694d1ee8021900b7dc&oe=5F99E683',
    dateCreated: Date.now() - 1
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119213342_371072463897271_1586205698923004824_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=9ux_-_GISzAAX_G29JO&oh=d9e837882a3dc5befbfff275afb58196&oe=5F9B0FB7',
    dateCreated: Date.now() - 2
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95441099_525800091447407_538176500453605376_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=4goXXnQ1qV8AX-x-KTs&oh=e86ab3f85dbe866ceaa6582424c7598f&oe=5F9B0B51',
    dateCreated: Date.now() - 3
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117809938_2673553326226334_5133065842270859463_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=m6iK7MYShFUAX9ZeyhK&oh=1f8fb295851a78ee6b6b685d88b076cf&oe=5F9917A1',
    dateCreated: Date.now() - 4
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/39047499_445932895893871_3662294681741426688_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=8nJfJ1bZL68AX8bQnc_&oh=e801b245f028194c3b460c13c6903741&oe=5F98A0DC',
    dateCreated: Date.now() - 5
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117688842_315294949589252_9004850249815748147_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=z6ZGCSwpJbsAX-a7xHq&oh=6f7ae4385d77fd243ead93380eae9438&oe=5F9EAB50',
    dateCreated: Date.now() - 6
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67247270_775791772839791_3865035039536316416_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=pbe1qX4YmQgAX_g6FBS&oh=e627a3ba616ab8ecd80cc661c9a12437&oe=5F9B838C',
    dateCreated: Date.now() - 7
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117686786_2780932735562551_711989335433193918_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=Gf0Zr4ZN82AAX_dMiT8&oh=a80c41b55f8add76b97870e4641ebe2a&oe=5F9C5669',
    dateCreated: Date.now() - 8
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119118087_1041083242982555_5841328823987265800_n.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=eJDpt6utc-oAX9WTcv_&oh=ba256aa2a410f476029710702bf05f6f&oe=5F9B567E',
    dateCreated: Date.now() - 9
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
      'https://instagram.fsjj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/15043861_1830360057205115_4180146275963895808_a.jpg?_nc_ht=instagram.fsjj2-1.fna.fbcdn.net&_nc_ohc=ZusBgb6kXioAX_5vHc5&oh=1de5ee0a67fdbe7c9c2e42be31134add&oe=5F9904ED',
    dateCreated: Date.now() - 10
  }
];

const firestore = firebase.firestore();

const loadSampleData = () => {
  sampleListings.forEach(listing => {
    firestore.doc(`/allListings/${listing.idUsername}`).set({
      ...listing
    });
  });
};

export default loadSampleData;
