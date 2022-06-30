/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - package
 *         - receiver
 *         - sender
 *         - adress
 *       properties:
 *         sender:
 *           type: object
 *           description: sender personal data
 *           properties:
 *              firstname:
 *                  type: string
 *                  required: true
 *              lastname:
 *                  type: string
 *                  required: true
 *              middlename:
 *                  type: string
 *              birthDate:
 *                   type: string
 *                   format: date
 *                   required: true
 *              registrationAdress:
 *                   type: string
 *         receiver:
 *           type: object
 *           description: receiver personal data
 *           properties:
 *              firstname:
 *                  type: string
 *                  required: true
 *              lastname:
 *                  type: string
 *                  required: true
 *              middlename:
 *                  type: string
 *              birthDate:
 *                   type: string
 *                   format: date
 *                   required: true
 *              registrationAdress:
 *                   type: string
 *         address:
 *           type: object
 *           description: receiver address
 *           properties:
 *              city:
 *                  type: string
 *                  required: true
 *              street:
 *                  type: string
 *                  required: true
 *              house:
 *                  type: string
 *                  required: true
 *              apartment:
 *                   type: string
 *                   required: true
 *              comment:
 *                   type: string
 *         package:
 *           type: object
 *           description: receiver adress
 *           properties:
 *              type:
 *                  type: string
 *                  required: true
 *              weight:
 *                  type: number
 *                  required: true
 *              comment:
 *                   type: string
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
 *                      allOf:
 *                          - $ref: '#/components/schemas/Order'
 *                          - type: object
 *                            properties:
 *                              id:
 *                                  type: string
 *                                  description: auto-generated id of the order
 */
