const express = require('express');

const Resume = require('../models/resume');
const checkAuth = require('../middleware/check-auth');
let ObjectID = require('mongoose').ObjectID;


const router = express.Router();

router.post('/resume/post', (req, res, next) => {
    const resume = new Resume({
        resumedata: req.body.resumedata
    });

    resume.save().then(resumeCreated => {
        res.status(200).json({
            message: 'resume created successfull'
        });
    });
});

router.put('/resume/post/:id', (req, res, next) => {

    const resume = new Resume({
      _id: req.body._id,
      resumedata: req.body.resumedata
    });

    Resume.updateOne({_id: req.params.id}, resume)
        .then(resData => {
          if (resData.n > 0) {
            res.status(200).json({
              message: 'Resume updated Successfully'
            });
          } else {
            res.status(401).json({
              message: 'You are not allowed to update resume'
            });
          }
        });
});

router.get('/resume', (req, res, next) => {
    Resume.find().then(resume => {
        res.status(200).json({
            resume: resume
        });
    });
});

module.exports = router;

