import { Meteor } from 'meteor/meteor';
import { Books } from '../books';
import '../imports/api/books/server/publications';
import '../imports/api/books/methods';

Meteor.publish('books', function() {
  return Books.find();
});
