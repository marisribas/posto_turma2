package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class MarcasFipe {

public static final int TIMEOUT = 300;

/**
 *
 * @param param_Dados
 * @return Var
 */
// MarcasFipe
public static Var obterDados(Var param_Dados) throws Exception {
 return new Callable<Var>() {

   // param
   private Var Dados = param_Dados;
   // end

   public Var call() throws Exception {
    Dados = cronapi.json.Operations.toJson(cronapi.util.Operations.getURLFromOthers(Var.valueOf("GET"), Var.valueOf("application/json"), Var.valueOf("https://parallelum.com.br/fipe/api/v1/carros/marcas"), Var.VAR_NULL, Var.VAR_NULL, Var.VAR_NULL));
    return Dados;
   }
 }.call();
}

}

