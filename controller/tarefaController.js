const Tarefa = require('../model/tarefaModel');

module.exports = class tarefaController{


  static async TarefaCreate(req,res){
    try{
      let titulo = req.body.titulo;
      let descricao = req.body.descricao;

      const tarefa = {
        titulo: titulo,
        descricao: descricao
      }
      await Tarefa.create(tarefa);
      res.json({message: "Tarefa criada com sucesso!"});
    } catch(error){
      res.status(500).json({error: "Erro ao criar tarefa"});
    }
  }
  static async TarefaListar(req,res){
    try{
        const tarefa = await Tarefa.findAll();
        res.json(tarefa);
      
    } catch(error){
      res.status(500).json({error: "Erro ao listar tarefa"});
    }
  }
  static async TarefaUpdate(req,res){
    try{
      const id_tarefa = req.params.id;
      
      let titulo = req.body.titulo;
      
      let descricao = req.body.descricao;

      const tarefa = {
        titulo: titulo,
        descricao: descricao
      }
      
      await Tarefa.update(tarefa, {where: {id_tarefa:id_tarefa}});
      res.json({message: "Tarefa atualizada com sucesso! Foram atualizados as seguintes informações: ", dados: tarefa});
    } catch(error){
      res.status(500).json({error: "Falha ao atualizar as informações"});
    }
  }
  static async TarefaDelete(req,res){
    try{
      const id_tarefa = req.params.id;
      await Tarefa.destroy({where:{id_tarefa: id_tarefa}});

      res.json({message: "Tarefa excluída com sucesso!"});
    } catch(error){
      res.status(500).json({error: "Erro ao excluir tarefa"});
    }
  }
}