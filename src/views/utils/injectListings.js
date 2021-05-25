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
      'https://raw.githubusercontent.com/benyamynbrkyc/small-test-images/main/images/src/people/5.png',
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
      'https://raw.githubusercontent.com/benyamynbrkyc/small-test-images/main/images/src/people/8.png',
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
      'https://raw.githubusercontent.com/benyamynbrkyc/small-test-images/main/images/src/people/3.png',
    dateCreated: Date.now() - 3,
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
      'https://raw.githubusercontent.com/benyamynbrkyc/small-test-images/main/images/src/people/6.png',
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
      'https://raw.githubusercontent.com/benyamynbrkyc/small-test-images/main/images/src/people/4.png',
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
      'https://raw.githubusercontent.com/benyamynbrkyc/small-test-images/main/images/src/people/2.png',
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
      'https://github.com/benyamynbrkyc/small-test-images/raw/main/images/src/people/8.png',
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
