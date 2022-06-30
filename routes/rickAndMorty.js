/**
 * @swagger
 * tags:
 *   name: 🧪 rick and morty
 */

/**
 * @swagger
 * /rickAndMorty/characters:
 *   get:
 *     tags: [🧪 rick and morty]
 *     summary: Returns the list of all the characters
 *     parameters:
 *       - in: header
 *         name: AuthToken
 *         schema:
 *           type: string
 *         required: true
 *         description: auth header
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: page of characters
 *     responses:
 *       200:
 *         success: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  success:
 *                     type: boolean
 *                     description: status of response
 *                  data:
 *                     type: object
 *                     description: Number of characters page
 */

/**
 * @swagger
 * /rickAndMorty/characters/{characterId}:
 *   get:
 *     tags: [🧪 rick and morty]
 *     summary: Returns the character
 *     parameters:
 *       - in: path
 *         name: characterId
 *         required: true
 *         schema:
 *           type: integer
 *         description: the character id
 *       - in: header
 *         name: AuthToken
 *         schema:
 *           type: string
 *         required: true
 *         description: auth header
 *     responses:
 *       200:
 *         success: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  success:
 *                     type: boolean
 *                     description: status of response
 *                  data:
 *                     type: object
 *                     description: Number of characters page
 */
