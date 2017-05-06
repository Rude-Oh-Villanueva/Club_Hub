import { _ } from 'meteor/underscore';
import { ClubData } from '../../api/clubdata/clubdata.js';


const clubSeeds = [
  {
    name: 'Test 1',
    bio: '808-342-6438',
    days: [],
    frequency: 'Weekly',
    categories: ['Academic']
  },
];

if (ClubData.find().count() === 0) {
  _.each(clubSeeds, function seedClubs(club) {
    ClubData.insert(club);
  });
}
