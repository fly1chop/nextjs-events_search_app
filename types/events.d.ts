// const DUMMY_EVENTS = [
//   {
//     id: 'e1',
//     title: 'Programming for everyone',
//     description:
//       'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
//     location: 'Somestreet 25, 12345 San Somewhereo',
//     date: '2021-05-12',
//     image: 'images/coding-event.jpg',
//     isFeatured: false,
//   },

export interface TEventItem {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}
