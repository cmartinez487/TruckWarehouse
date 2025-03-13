"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
const parseComment = (comment) => {
    if (!isString(comment)) {
        throw new Error('Incorrect or missing comment: ' + comment);
    }
    ;
    return comment;
};
const parseDate = (date) => {
    if (!isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    ;
    return date;
};
const parseWeather = (weather) => {
    if (!isString(weather) || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather: ' + weather);
    }
    ;
    return weather;
};
const parseVisibility = (visibility) => {
    if (!isString(visibility) || !isVisibility(visibility)) {
        throw new Error('Incorrect or missing visibility: ' + visibility);
    }
    ;
    return visibility;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    return Object.values(enum_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(enum_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
