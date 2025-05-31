/**
 * @swagger
 * /api/intro:
 *   post:
 *     summary: Greets the user with a welcome message.
 *     description: This endpoint receives a user's name in the request body and returns a personalized welcome message.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *                 example: John
 *     responses:
 *       200:
 *         description: A personalized welcome message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The welcome message.
 *                   example: Hello John, welcome to the API!
 */

/**
 * @swagger
 * /api/v1/listAllclients:
 *   get:
 *     summary: Retrieve a list of all clients.
 *     description: This endpoint fetches all clients from the database.
 *     responses:
 *       200:
 *         description: A list of clients.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the client.
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     description: The first name of the client.
 *                     example: Juan
 *                   apellido:
 *                     type: string
 *                     description: The last name of the client.
 *                     example: Pérez
 *                   fecha_nacimiento:
 *                     type: string
 *                     format: date
 *                     description: The birth date of the client.
 *                     example: 1990-05-15
 *                   correo:
 *                     type: string
 *                     description: The email of the client.
 *                     example: juan.perez@example.com
 *                   is_deleted:
 *                     type: integer
 *                     description: Logical deletion status (0 = active, 1 = deleted).
 *                     example: 0
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/findClientById/{id}:
 *   get:
 *     summary: Retrieve a client by ID.
 *     description: Fetches a specific client from the database using their unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the client to retrieve.
 *     responses:
 *       200:
 *         description: A single client object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the client.
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   description: The first name of the client.
 *                   example: Juan
 *                 apellido:
 *                   type: string
 *                   description: The last name of the client.
 *                   example: Pérez
 *                 correo:
 *                   type: string
 *                   description: The email of the client.
 *                   example: juan.perez@example.com
 *                 is_deleted:
 *                   type: boolean
 *                   description: Logical deletion status (false = active, true = deleted).
 *                   example: false
 *       404:
 *         description: Client not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Client not found
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Internal Server Error
 */