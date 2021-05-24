class GameController{
    index(req, res, next){
        res.render('game/index');
    }
}
module.exports = new GameController;