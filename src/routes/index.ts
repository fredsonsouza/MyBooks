import { Router } from "express";

import { booksRoutes } from "./books.routes";
import { bookCasesRouter } from "./booksCases.routes";
import { usersRouter } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/books", booksRoutes);
router.use("/bookCases", bookCasesRouter);
router.use("/users", usersRouter);
router.use(authenticateRoutes);

export { router };
