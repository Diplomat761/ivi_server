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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const country_model_1 = require("../country/country.model");
const genre_model_1 = require("../genre/genre.model");
const movies_model_1 = require("../movies/movies.model");
const person_model_1 = require("./person.model");
let PersonService = class PersonService {
    constructor(personRepository, movieRepository) {
        this.personRepository = personRepository;
        this.movieRepository = movieRepository;
    }
    async createPerson(personDataList) {
        const persons = [];
        for (const movieData of personDataList) {
            const person = new person_model_1.Person(movieData);
            await person.save();
            persons.push(person);
        }
        return persons;
    }
    async getAll() {
        const persons = await this.personRepository.findAll();
        return persons;
    }
    async getById(id) {
        const person = await this.personRepository.findOne({
            where: { id },
            attributes: [
                "id",
                "avatar",
                "full_name",
                "full_name_EN",
                "description",
                "description_EN",
                "DOB",
            ],
            include: [
                {
                    model: movies_model_1.Movie,
                    as: "movies",
                    through: { attributes: [] },
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
                },
            ],
        });
        const movies = await this.movieRepository.findAll({
            where: { director_id: id },
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
        return { person, movies };
    }
    async getByActor(id) {
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
    async getByDirector(id) {
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
    async getMatchingDirectors(query) {
        const matchingDirectors = await this.personRepository.findAll({
            where: {
                full_name: {
                    [sequelize_2.Op.iLike]: `${query}%`,
                },
            },
        });
        return matchingDirectors;
    }
};
PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(person_model_1.Person)),
    __param(1, (0, sequelize_1.InjectModel)(movies_model_1.Movie)),
    __metadata("design:paramtypes", [Object, Object])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map