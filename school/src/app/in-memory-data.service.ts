import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        let students = [
            {id:1, name: "Katleen"},
            {id:2, name: "Auro"},
            {id:3, name: "Jack"},
            {id:4, name: "Tom"},
            {id:5, name: "Harry"},
            {id:6, name: "Stanley"},
            {id:7, name: "Roger"},
            {id:8, name: "Jaquilene"},
            {id:9, name: "Samantha"},
            {id:10, name: "Kernel"},
            {id:11, name: "Margaret"},
            {id:12, name: "Nancy"},
            {id:13, name: "Wick"},

        ]
        return {students};
    }



}