package controllers

import javax.inject.Inject

import bmmodule.MongoDBSpark
import play.api.mvc._

/**
  * Created by Alfred on 23/03/2017.
  */
class HomeController extends Controller {
    def index = Action {
        Ok(s"yangyuan")
    }
}
