package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Usuario {

public static final int TIMEOUT = 300;

/**
 *
 * @return Var
 */
// Usuario
public static Var obterIdLogado() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    return cronapi.database.Operations.getField(cronapi.database.Operations.query(Var.valueOf("app.entity.User"),Var.valueOf("select u.id from User u where UPPER(u.userName)  = :user_name"),Var.valueOf("user_name",Var.valueOf((cronapi.util.Operations.getCurrentUserName()).getObjectAsString().toUpperCase()))), Var.valueOf("this[0]"));
   }
 }.call();
}

}

