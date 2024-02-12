import { UserList } from "../FakeData.js";
import {MovieList } from "../FakeData.js"
import pkg from 'lodash'; // Lodash's modular methods are great for: Iterating arrays, objects, & strings. Manipulating & testing values. 
const { _ } = pkg;

export const resolvers = { 
    Query: {
        //USER RESOLVERS
        users : () => {
            return UserList;
        },
        user :(parent, args) => { // parent for taking all the 'users' information and args for further argument.
            const id = args.id
            const user = _.find(UserList, {id : Number(id)}); // '_' is a lodash which is used for array manipulation.; .find(from_where, to_what)
            return user;    
        },

        //MOVIE RESOLVERS
        movies : () => {
            return MovieList;
        },
        movie :(parent, args) => { // parent for taking all the'movies' information and args for further argument.
            const title = args.title
            const movie = _.find(MovieList, {title : title}); // '_' is a lodash which is used for array manipulation.;.find(from_where, to_what)
            return movie;    
        }
    },
    User: {
        favoriteMovies: ()=> {
            return _.filter(MovieList, (movie)=> 
                movie.year>=2000 && movie.year<=2020 
            );
        }
    }
};
    