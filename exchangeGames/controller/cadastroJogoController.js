const db = require('../models')
const {Op} = require('sequelize')

async function buscarGeneroPlataforma () {
  const genero = await db.Genero.findAll()
  const plataforma = await db.Plataforma.findAll()
  return [genero, plataforma]
}

module.exports.cadastrandoJogo = async (req, res) => {
  const generos = [].concat(req.body.genero)
  //console.log(req.body)
  if(!req.body.nomeJogo){
    const erro = "Insira um nome para o jogo."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(req.body.nomeJogo.length > 150){
      const erro = "Atenção: Nome maior que 150 caracteres."
      const retorno = await buscarGeneroPlataforma()
      return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(!req.body.anoJogo){
    const erro = "Atenção: Insira o ano do jogo."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(req.body.anoJogo.length != 4){
      const erro = "Atenção: Formato do ano aceito: AAAA"
      const retorno = await buscarGeneroPlataforma()
      return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(!req.body.descricao){
    const erro = "Atenção: Insira uma descrição para o anúncio."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(req.body.descricao.length > 1500){
    const erro = "Atenção: Descrição maior que 1500 caracteres."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(!req.body.tempoJogo){
    const erro = "Atenção: Insira o tempo de uso."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(req.body.tempoJogo.length > 25){
    const erro = "Atenção: Tempo de uso maior que 25 caracteres."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
    //console.log(req.files[0])
  if(!req.files[0].filename){
    const erro = "Atenção: Envie ao menos uma foto do seu jogo."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  
  const novoAnuncio = await db.Anuncio.create({
  ano: req.body.anoJogo,
  descricao: req.body.descricao,
  nome: req.body.nomeJogo,
  tempo_uso: req.body.tempoJogo,
  usuarios_id:req.session.usuario,
  //Colocar o req.session.id
  plataformas_id: req.body.console,
  condicao: req.body.condicao,
  chat_id: 1
  })
  for(let i = 0; i < generos.length; i++){
    await db.Anuncio_Genero.create({
    anuncios_id: novoAnuncio.id,
    generos_id: generos[i]
    })
  }
  for(let i = 0; i < req.files.length; i++){
    await db.Imagem.create({
    anuncios_id: novoAnuncio.id,
    foto_principal: i == 0 ? 1 : 0,
    caminho: req.files[i].filename
    })
  }
  res.redirect('/jogos')
}

module.exports.cadastroJogo = async (req, res) => {
  const erro = ""
  const genero = await db.Genero.findAll()
  const plataforma = await db.Plataforma.findAll()
  //console.log(genero[0].toJSON())
  //console.log(plataforma[0].toJSON())
  res.render('cadastroDeJogo', {genero, plataforma, erro, usuarioLogado: req.session.nickname})
}

//Editar jogo

module.exports.editarJogo = async function(req, res) {
  const anuncio = await db.Anuncio.findOne({
    where: {id: req.params.id},
    include: [db.Plataforma, db.Imagem, 'generos','usuario']
  })
  const genero = await db.Genero.findAll()
  const plataforma = await db.Plataforma.findAll()
  //console.log(anuncio)
  res.render('editarJogo', {
    usuarioLogado: req.session.nickname,
    anuncio,
    erro: "",
    genero,
    plataforma
  });
}
//Validações editar anúncio
module.exports.editandoJogo = async function(req, res) {
  if(!req.body.nomeJogo){
    const erro = "Insira um nome para o jogo."
    const retorno = await buscarGeneroPlataforma()
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos','usuario']
    })
    return res.render('editarJogo', {anuncio, genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(req.body.nomeJogo.length > 150){
    const erro = "Atenção: Nome maior que 150 caracteres."
    const retorno = await buscarGeneroPlataforma()
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos','usuario']
    })
    return res.render('editarJogo', {anuncio, genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(!req.body.anoJogo){
    const erro = "Atenção: Insira o ano do jogo."
    const retorno = await buscarGeneroPlataforma()
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos','usuario']
    })
    return res.render('editarJogo', {anuncio, genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(req.body.anoJogo.length != 4){
    const erro = "Atenção: Formato do ano aceito: AAAA"
    const retorno = await buscarGeneroPlataforma()
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos','usuario']
    })
    return res.render('editarJogo', {anuncio, genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(!req.body.descricao){
    const erro = "Atenção: Insira uma descrição para o anúncio."
    const retorno = await buscarGeneroPlataforma()
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos','usuario']
    })
    return res.render('editarJogo', {anuncio, genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(req.body.descricao.length > 1500){
    const erro = "Atenção: Descrição maior que 1500 caracteres."
    const retorno = await buscarGeneroPlataforma()
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos','usuario']
    })
    return res.render('editarJogo', {anuncio, genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(!req.body.tempoJogo){
    const erro = "Atenção: Insira o tempo de uso."
    const retorno = await buscarGeneroPlataforma()
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos','usuario']
    })
    return res.render('editarJogo', {anuncio, genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
  }
  if(req.body.tempoJogo.length > 25){
    const erro = "Atenção: Tempo de uso maior que 25 caracteres."
    const retorno = await buscarGeneroPlataforma()
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos','usuario']
    })
    return res.render('editarJogo', {anuncio, genero:retorno[0], plataforma:retorno[1], erro, usuarioLogado: req.session.nickname})
}
  const generos = [].concat(req.body.genero)
  const anuncioOriginal = await db.Anuncio.findOne({        
    where: {id: req.params.id},
    include:['generos']
})  

  await db.Anuncio.update({
    ano: req.body.anoJogo,
    descricao: req.body.descricao,
    nome: req.body.nomeJogo,
    tempo_uso: req.body.tempoJogo,
    plataformas_id: req.body.console,
    condicao: req.body.condicao,
    },
    {where: {id:req.params.id}
})  
//Deletar gênero do anúncio
for(let i = 0; i < anuncioOriginal.generos.length; i++){
  if(!generos.find((verificandoGeneros) => anuncioOriginal.generos[i].id == verificandoGeneros)){
      await db.Anuncio_Genero.destroy({
          where: {
              [Op.and]: [
                  {anuncios_id:req.params.id},
                  {generos_id: anuncioOriginal.generos[i].id}
              ]
          }
      })
  }
}
//Adicionar gênero no anúncio
for(let i = 0; i < generos.length; i++){
  if(!anuncioOriginal.generos.find((verificandoGeneros) => generos[i] == verificandoGeneros.id)){
      await db.Anuncio_Genero.create({
        anuncios_id: req.params.id,
        generos_id: generos[i]
      })
  }
}

  console.log(req.session.usuario)
  //console.log(req.files)
  console.log(req.files)
  const anuncio = `/home/produto/${req.params.id}`
  res.redirect(anuncio);
}



