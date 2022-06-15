const jwt = require('jsonwebtoken');
const { v1: uuidv1, v4: uuidv4 } = require('uuid');
const axios = require('axios');

const { uploadFromMemory } = require('./storage');
// const { database } = require('./database');

const loadModelHandler = async (req, h) => {
  let res;
  try {
    const { img } = req.payload;
    const { token } = req.headers;
    
    const admin = jwt.verify(token, process.env.SECRET_KEY);

    const id = uuidv4();
    
    await uploadFromMemory(img, id);

    const response = await axios.post('http://10.184.0.6:5000', {
      imgpath: `https://storage.googleapis.com/capstone-bangkit-ocr/ktp/${id}.jpg`,
      uuid: id
    });
    // const response = await fetch(, {
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: {
    //     'Content-Type' : 'application/json',
    //   },
    //   body: JSON.stringify({img: `https://storage.googleapis.com/capstone-bangkit-ocr/ktp/${id}.jpg`})
    // })
    const data = response.data;
    res = h.response({
      status: 'success',
      message: 'load model successfully',
      data
    });

    return res;
  } catch (error) {
    console.log(error);
    res = h.response({
      status: 'failed',
      message: error.message
    });
    res.statusCode = 400;
    return res;
  }


}

module.exports = loadModelHandler;
