import { app } from "./app";
import { UserController } from "./controllers/UserController";

const userController = new UserController();
app.post("/signup", userController.signUpController);
app.post("/login", userController.loginController);
app.get("/all", userController.getAllUsersController);
app.delete("/:id", userController.deleteUserById_Controller);
