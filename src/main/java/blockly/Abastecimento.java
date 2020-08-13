package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Abastecimento {

public static final int TIMEOUT = 300;

/**
 *
 * @param Entidade
 * @return Var
 */
// Abastecimento
public static Var custoKm(Var Entidade) throws Exception {
 return new Callable<Var>() {

   private Var custoKm = Var.VAR_NULL;

   public Var call() throws Exception {
    custoKm = Var.valueOf(0);
    if (Var.valueOf(!cronapi.object.Operations.getObjectField(Entidade, Var.valueOf("km")).equals(Var.valueOf(0))).getObjectAsBoolean()) {
        custoKm = cronapi.math.Operations.divisor(cronapi.object.Operations.getObjectField(Entidade, Var.valueOf("valor")),cronapi.object.Operations.getObjectField(Entidade, Var.valueOf("km")));
    }
    return custoKm;
   }
 }.call();
}

}

