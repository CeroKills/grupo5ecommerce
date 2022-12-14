const fs = require('fs');
const path=require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const user = require("../models/user");
const usuariosFilePath = path.join(__dirname, '../data/users.json');
let usuariosJson = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const registroController={
    registro: (req, res) =>{
        
        res.render('../views/usuarios/registro');
    },
    login: (req, res) =>{
        res.render('../views/usuarios/login');
    },

    

    loginProcess: (req,res)=>{
      let userToLogin = user.findByField("mail", req.body.mail);

      if (userToLogin){
        let correctPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
        if(correctPassword){
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            if(req.body.remember_usuario){
               res.cookie("userEmail",req.body.mail,{maxAge:(1000*60)*2})
            }
           // return res.render('../views/usuarios/profile');
           return res.redirect("profile")
        }
      }
      return res.render('../views/usuarios/login',{
        errors: {
            mail:{
                msg:"El mail ingresado no se encuentra registrado"
            }
        }
      });
    },


    profile: (req,res)=>{
          return res.render('../views/usuarios/profile',{
            user: req.session.userLogged
          });
    },

    logout: (req,res)=>{
        res.clearCookie("userEmail");
        req.session.destroy();
       
        
      return res.redirect("/")
    },
    /*processRegister: (req, res) =>
    {
        const resultValidation = validationReuslt(req);
        if(resultValidation.errors.length > 0){
            return res.render('../views/usuarios/registro', {
                errors: resultValidation.mapped()})
            }
        }
    ,*/
    store: (req, res) => { 
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render('../views/usuarios/registro', {
                errors: resultValidation.mapped()})
                /*return res.send(req.body)*/
                /*return res.send(resultValidation.mapped())*/
            }else{
 
        let nuevoUsuario = {
        id: usuariosJson[usuariosJson.length - 1].id + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        mail: req.body.mail,
        nacimiento: req.body.nacimiento,
        pais_residencia: req.body.pais_residencia,
        intereses: req.body.intereses,
        foto: req.file.filename,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    usuariosJson.push(nuevoUsuario);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosJson, null, " "));
   return res.render('../views/usuarios/login')
    //res.redirect('/usuario/login')
    ;}


}
}

module.exports = registroController;