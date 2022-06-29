/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 */

/**
 * @swagger
 * tags:
 *   name: 📦 order
 */

/**
 * @swagger
 * /create/order:
 *   post:
 *     tags: [📦 order]
 *     summary: Create delivary order
 *     parameters:
 *       - in: body
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: title of order
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
 *                     $ref: '#/components/schemas/Order'
 */
