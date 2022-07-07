const todolistController = require("../controllers/todolist.controller");

describe("Unit tests todolist", () => {
    const user = {
        id: "62c3087b17d6b9b17dd0",
        role: "ROLE_USER",
    };
    let todolistController;
    let mocktodolist = { name: "Todolist 1" };

    const res = {
        status: jest.fn().mockReturnValue({ json: jest.fn() }),
    };
    const mock = {
        create: jest.fn().mockResolvedValue(mocktodolist),
        update: jest.fn().mockResolvedValue(mocktodolist),
        findAllByUserId: jest.fn().mockResolvedValue([mocktodolist]),
        findByIdAndUserId: jest.fn().mockResolvedValue(mocktodolist),
        delete: jest.fn().mockResolvedValue({ message: "todolist deleted" }),
    };

    beforeAll(() => {
        jest.clearAllMocks();
        jest.resetModules();

        jest.mock("../services/todolist.service.js", () => mock);
        todolistController = require("../controllers/todolist.controller");
    });

    test("create a todolist", async () => {
        const req = {
            body: { name: "Todolist 1" },
            user: user,
        };

        const next = jest.fn();
        await todolistController.createTodolist(req, res, next);
        expect(req.body.user_id).toBe(user.id);
        expect(mock.create).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.status().json).toHaveBeenCalledWith(mocktodolist);
    });

    test("update a todolist", async () => {
        const req = {
            body: { name: "Todolist 2" },
            user: user,
            params: { id: "62c3087b17d6b9b17dd0" },
        };

        const next = jest.fn();
        await todolistController.updateTodolist(req, res, next);
        expect(mock.update).toHaveBeenCalledWith(req.params.id, req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status().json).toHaveBeenCalledWith(mocktodolist);
    });

    test("update a todolist not found", async () => {
        mock.update = jest.fn().mockResolvedValue(null);
        jest.mock("../services/todolist.service.js", () => mock);

        const req = {
            body: { name: "Todolist 2" },
            user: user,
            params: { id: "62c3087b17d6b9b17dd0" },
        };

        const next = jest.fn();
        await todolistController.updateTodolist(req, res, next);
        expect(mock.update).toHaveBeenCalledWith(req.params.id, req.body);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.status().json).toHaveBeenCalledWith({
            message: "todolist not found",
        });
    });

    test("delete a todolist", async () => {
        const req = {
            params: { id: "62c3087b17d6b9b17dd0" },
        };

        const next = jest.fn();
        await todolistController.deleteTodolist(req, res, next);
        expect(mock.delete).toHaveBeenCalledWith(req.params.id);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.status().json).toHaveBeenCalledWith({
            message: "todolist deleted",
        });
    });

    test("get all todolist", async () => {
        const req = {
            user: user,
        };

        const next = jest.fn();
        await todolistController.findAllTodolists(req, res, next);
        expect(mock.findAllByUserId).toHaveBeenCalledWith(req.user.id);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status().json).toHaveBeenCalledWith([mocktodolist]);
    });

    test("get one todolist", async () => {
        const req = {
            user: user,
            params: { id: "62c3087b17d6b9b17dd0" },
        };

        const next = jest.fn();
        await todolistController.findTodolistById(req, res, next);
        expect(mock.findByIdAndUserId).toHaveBeenCalledWith(req.params.id, req.user.id);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status().json).toHaveBeenCalledWith(mocktodolist);
    });

    test("get one todolist not found", async () => {
        mock.findByIdAndUserId = jest.fn().mockResolvedValue(null);
        jest.mock("../services/todolist.service.js", () => mock);

        const req = {
            user: user,
            params: { id: "62c3087b17d6b9b17dd0" },
        };

        const next = jest.fn();
        await todolistController.findTodolistById(req, res, next);
        expect(mock.findByIdAndUserId).toHaveBeenCalledWith(req.params.id, req.user.id);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.status().json).toHaveBeenCalledWith({
            message: "todolist not found",
        });
    });
});
