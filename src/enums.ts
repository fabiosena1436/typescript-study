const GENER = {
    male: 'male',
    famale: 'famale',
    other: 'other'
}

enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

type Person = {
    name: string;
    age: number;
    gender: Gender;
}

const person: Person = {
    name: 'maria',
    age: 15,
    gender: Gender.OTHER
}