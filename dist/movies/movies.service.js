"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const movies_model_1 = require("./movies.model");
const sequelize_2 = require("sequelize");
const movie_person_model_1 = require("../person/movie-person.model");
const person_model_1 = require("../person/person.model");
const genre_model_1 = require("../genre/genre.model");
const country_model_1 = require("../country/country.model");
const posts_model_1 = require("../posts/posts.model");
const users_model_1 = require("../users/users.model");
const profiles_model_1 = require("../profiles/profiles.model");
const comment_model_1 = require("../comment/comment.model");
const person_service_1 = require("../person/person.service");
let MoviesService = class MoviesService {
    constructor(movieRepository, personService) {
        this.movieRepository = movieRepository;
        this.personService = personService;
    }
    async update(id, dto) {
        const [rowsGenre, [updatedGenre]] = await this.movieRepository.update(dto, {
            returning: true,
            where: { id },
        });
        if (rowsGenre === 0 || !updatedGenre) {
            throw new common_1.NotFoundException("Такого жанра не существует");
        }
        throw new common_1.HttpException("Жанр изменен", common_1.HttpStatus.OK);
    }
    async getMovieByActor(id) {
        const movies = await this.movieRepository.findAll({
            include: [
                {
                    model: person_model_1.Person,
                    as: "actors",
                    where: { id: id },
                    through: { attributes: [] },
                    attributes: ["id", "avatar", "full_name", "description"],
                },
            ],
        });
        return movies;
    }
    async getMovieByDirector(id) {
        const movies = await this.movieRepository.findAll({
            where: { director_id: id },
            include: [
                {
                    model: person_model_1.Person,
                    as: "director",
                    where: { id: id },
                },
            ],
        });
        return movies;
    }
    async getMoviesById(id) {
        const movie = await this.movieRepository.findOne({
            where: { id },
            include: [
                {
                    model: person_model_1.Person,
                    as: "actors",
                    through: { attributes: [] },
                    attributes: [
                        "id",
                        "avatar",
                        "full_name",
                        "full_name_EN",
                        "description",
                        "description_EN",
                        "DOB",
                    ],
                },
                {
                    model: person_model_1.Person,
                    as: "director",
                    attributes: [
                        "id",
                        "avatar",
                        "full_name",
                        "full_name_EN",
                        "description",
                        "description_EN",
                        "DOB",
                    ],
                },
                { model: genre_model_1.Genre, as: "genre", attributes: ["id", "value", "value_EN"] },
                {
                    model: country_model_1.Country,
                    as: "country",
                    attributes: ["id", "value", "value_EN"],
                },
                {
                    model: posts_model_1.Posts,
                    as: "posts",
                    attributes: ["id", "content", "userId"],
                    include: [
                        {
                            model: users_model_1.User,
                            as: "author",
                            attributes: ["id", "email"],
                            include: [
                                {
                                    model: profiles_model_1.Profile,
                                    as: "profile",
                                    attributes: ["id", "firstName", "lastName"],
                                },
                            ],
                        },
                        {
                            model: comment_model_1.Comment,
                            as: "comments",
                            attributes: ["id", "content", "userId"],
                            include: [
                                {
                                    model: users_model_1.User,
                                    as: "author",
                                    attributes: ["id", "email"],
                                    include: [
                                        {
                                            model: profiles_model_1.Profile,
                                            as: "profile",
                                            attributes: ["id", "firstName", "lastName"],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            attributes: [
                "id",
                "avatars",
                "name",
                "original_name",
                "rating",
                "years",
                "durations",
                "description",
                "description_EN",
                "ageLimit",
                "count_rating",
            ],
        });
        return movie;
    }
    async createMovie(movieDataList) {
        const movies = [];
        for (const movieData of movieDataList) {
            const movie = new movies_model_1.Movie(movieData);
            await movie.save();
            movies.push(movie);
        }
        return movies;
    }
    async createMoviePerson(moviePersonDataList) {
        const moviePersons = [];
        for (const movieData of moviePersonDataList) {
            const moviePerson = new movie_person_model_1.MoviePerson(movieData);
            await moviePerson.save();
            moviePersons.push(moviePerson);
        }
        return moviePersons;
    }
    async searchMovies(genres, countries, years, rating, sort, minRatingCount, maxRatingCount, page, directorName) {
        const where = {};
        if (genres.length > 0) {
            where.genre_id = { [sequelize_2.Op.in]: genres };
        }
        if (countries.length > 0) {
            where.country_id = { [sequelize_2.Op.in]: countries };
        }
        if (years) {
            where.years = years;
        }
        if (rating) {
            where.rating = { [sequelize_2.Op.gte]: rating };
        }
        if (minRatingCount && maxRatingCount) {
            where.count_rating = { [sequelize_2.Op.between]: [minRatingCount, maxRatingCount] };
        }
        else if (minRatingCount) {
            where.count_rating = { [sequelize_2.Op.gte]: minRatingCount };
        }
        else if (maxRatingCount) {
            where.count_rating = { [sequelize_2.Op.lte]: maxRatingCount };
        }
        if (directorName) {
            const matchingPersons = await this.personService.getMatchingDirectors(directorName);
            const personIds = matchingPersons.map((directorName) => directorName.id);
            where.director_id = { [sequelize_2.Op.in]: personIds };
        }
        const limit = 35;
        const offset = (page - 1) * limit;
        const options = {
            limit,
            offset,
            where,
            include: [
                {
                    model: person_model_1.Person,
                    as: "actors",
                    through: { attributes: [] },
                    attributes: [
                        "id",
                        "avatar",
                        "full_name",
                        "full_name_EN",
                        "description",
                        "description_EN",
                        "DOB",
                    ],
                },
                {
                    model: person_model_1.Person,
                    as: "director",
                    attributes: [
                        "id",
                        "avatar",
                        "full_name",
                        "full_name_EN",
                        "description",
                        "description_EN",
                        "DOB",
                    ],
                },
                { model: genre_model_1.Genre, as: "genre", attributes: ["id", "value", "value_EN"] },
                {
                    model: country_model_1.Country,
                    as: "country",
                    attributes: ["id", "value", "value_EN"],
                },
            ],
            attributes: [
                "id",
                "avatars",
                "name",
                "original_name",
                "rating",
                "years",
                "durations",
                "description",
                "description_EN",
                "ageLimit",
                "count_rating",
            ],
        };
        switch (sort) {
            case "alphabetical":
                options.order = [["original_name", "ASC"]];
                break;
            case "rating-asc":
                options.order = [["rating", "ASC"]];
                break;
            case "rating-desc":
                options.order = [["rating", "DESC"]];
                break;
            case "year-asc":
                options.order = [["years", "ASC"]];
                break;
            case "year-desc":
                options.order = [["years", "DESC"]];
                break;
            case "count_rating-asc":
                options.order = [["count_rating", "ASC"]];
                break;
            case "count_rating-desc":
                options.order = [["count_rating", "DESC"]];
                break;
        }
        return this.movieRepository.findAll(options);
    }
    async getPromoMovie() {
        const movies = await this.movieRepository.findAll({
            where: { years: "2023" },
            limit: 5,
            attributes: [
                "id",
                "name",
                "original_name",
                "description",
                "description_EN",
                "promo",
            ],
        });
        return movies;
    }
    async getRecMovie() {
        const movies = await this.movieRepository.findAll({
            where: { country_id: 2, rating: { [sequelize_2.Op.gt]: 8 } },
            attributes: [
                "id",
                "avatars",
                "name",
                "original_name",
                "rating",
                "years",
                "durations",
            ],
            include: [
                {
                    model: country_model_1.Country,
                    as: "country",
                    attributes: ["id", "value", "value_EN"],
                },
                {
                    model: genre_model_1.Genre,
                    as: "genre",
                    attributes: ["id", "value", "value_EN"],
                },
            ],
            limit: 10,
        });
        return movies;
    }
    async getFavoriteMovie() {
        const movies = await this.movieRepository.findAll({
            where: { rating: { [sequelize_2.Op.gt]: 9 } },
            limit: 10,
            attributes: [
                "id",
                "avatars",
                "name",
                "original_name",
                "rating",
                "years",
                "durations",
            ],
            include: [
                {
                    model: country_model_1.Country,
                    as: "country",
                    attributes: ["id", "value", "value_EN"],
                },
                {
                    model: genre_model_1.Genre,
                    as: "genre",
                    attributes: ["id", "value", "value_EN"],
                },
            ],
        });
        return movies;
    }
};
MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(movies_model_1.Movie)),
    __metadata("design:paramtypes", [Object, person_service_1.PersonService])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map