import { app } from "./app";
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { getMyProfile } from "./endpoints/getMyProfile";
import { getUserProfile } from "./endpoints/getUserProfile";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipe } from "./endpoints/getRecipe";

app.post("/user", signup);
app.post("/user/login", login);
app.get("/user/profile", getMyProfile);
app.get("/user/:id", getUserProfile);

app.post("/recipe", createRecipe);
app.get("/recipe/:id", getRecipe);
