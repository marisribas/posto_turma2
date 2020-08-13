package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Estatisticas {

public static final int TIMEOUT = 300;

/**
 *
 * @return Var
 */
// Estatisticas
public static Var custoMedioKm() throws Exception {
 return new Callable<Var>() {

   private Var listaret = Var.VAR_NULL;
   private Var dadosBanco = Var.VAR_NULL;

   public Var call() throws Exception {
    listaret = cronapi.list.Operations.newList();
    dadosBanco = cronapi.database.Operations.query(Var.valueOf("app.entity.Abastecimento"),Var.valueOf("select a.carro.marca, a.carro.modelo, SUM(a.valor)/SUM(a.km) from Abastecimento a  group by a.carro.marca, a.carro.modelo  order by SUM(a.valor)/SUM(a.km) asc"));
    while (cronapi.database.Operations.hasElement(dadosBanco).getObjectAsBoolean()) {
        cronapi.list.Operations.addLast(listaret,cronapi.map.Operations.createObjectMapWith(Var.valueOf("marca",cronapi.database.Operations.getField(dadosBanco, Var.valueOf("this[0]"))) , Var.valueOf("modelo",cronapi.database.Operations.getField(dadosBanco, Var.valueOf("this[1]"))) , Var.valueOf("custokm",cronapi.conversion.Operations.formatDouble(cronapi.database.Operations.getField(dadosBanco, Var.valueOf("this[2]")), Var.valueOf("0.00")))));
        cronapi.database.Operations.next(dadosBanco);
    } // end while
    System.out.println(listaret.getObjectAsString());
    return listaret;
   }
 }.call();
}

}

