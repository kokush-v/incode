"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let TaskService = class TaskService {
    constructor() {
        this.taskRepository = new client_1.PrismaClient().task;
        this.taskSelectProperties = {
            id: true,
            title: true,
            description: true,
            type: true,
        };
    }
    async getMany() {
        return this.taskRepository.findMany({ select: this.taskSelectProperties });
    }
    async create({ title, description, boardId, type }) {
        return this.taskRepository.create({
            data: {
                title,
                description,
                type,
                board: {
                    connect: {
                        id: boardId,
                    },
                },
            },
            select: this.taskSelectProperties,
        });
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
//# sourceMappingURL=task.service.js.map