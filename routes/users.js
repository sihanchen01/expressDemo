const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
   console.log(req.query.name)
   res.send('USER INFOS BLABLALBAL')
})

router.get('/new', (req, res) => {
   res.render('users/new')
})

router.post('/', (req, res) => {
   const isValid = true
   if (isValid) {
      users.push({
         firstName: req.body.firstName
      })
      res.redirect(`/users/${users.length - 1}`)
   } else {
      console.log('ERROR')
      res.render('users/new', {
         firstName: req.body.firstName
      })
   }
})

router
   .route('/:id')
   .get((req, res) => {
      console.log(req.user)
      res.send(`This is page for user ${req.params.id}`)
   })
   .put((req, res) => {
      res.send(`Update is page for user ${req.params.id}`)
   })
   .delete((req, res) => {
      res.send(`Delete is page for user ${req.params.id}`)
   })

const users = [{
   name: 'sihan'
}, {
   name: 'chen'
}]
router.param("id", (req, res, next, id) => {
   req.user = users[id]
   next()
})

module.exports = router